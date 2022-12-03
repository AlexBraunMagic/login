import { useEffect, useRef, useState } from 'react';
import { Result } from '../result/result';
import EYE_SOLID_ICON from '../../assets/icon/eye-solid.svg';
import EYE_SLASH_SOLID_ICON from '../../assets/icon/eye-slash-solid.svg';
import './style.css';

export const Layout: React.FC = () => {



    const [showResult, setShowResult] = useState<Boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [disabledShowBtn, setDisabledShowBtn] = useState<boolean>(true);
    const [disabledClearBtn, setDisabledClearBtn] = useState<boolean>(true);

    
    const [inputType, setInputType] = useState<string>('password');
    const [changeInputType, setChangeInputType] = useState<boolean>(false);

    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function changeLoginHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setLogin(e.target.value);
    }

    function changePasswordHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }


    const show = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowResult(true);
        loginRef.current!.value = '';
        passwordRef.current!.value = '';
        setDisabledShowBtn(true);
        setDisabledClearBtn(false)
    }

    const clear = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowResult(false);
        setLogin('');
        setPassword('');
        setDisabledClearBtn(true);
    }

    const showPassword = (e: React.MouseEvent) => {
        e.preventDefault();
        setChangeInputType(!changeInputType);

        if(changeInputType) {
            setInputType('password');
            return
        }
        setInputType('text');
    }

    useEffect(() => {
        if (login.length > 0 && password.length > 0) {
            setDisabledShowBtn(false)
        }
        else (
            setDisabledShowBtn(true)
        )
    }, [login, password]);



    return (
        <div className="container">
            <div className="inner">
                <div className="form__wrapper">
                    <form className="form__login">
                        <div className="form__login-box">
                            <label className="form__login-label" htmlFor="login">Login</label>
                            <input 
                                ref={loginRef}
                                className="form__login-input" 
                                id="login" 
                                onChange={changeLoginHandler} 
                                placeholder="Add password" 
                                type="text" 
                            />
                        </div>
                        <div className="form__login-box">
                            <label className="form__password-label" htmlFor="password" >Password</label>
                            <input 
                                ref={passwordRef}
                                className="form__password-input" 
                                id="password" 
                                placeholder="Add login" 
                                onChange={changePasswordHandler}
                                type={inputType}
                            />
                            <button 
                                disabled={disabledShowBtn}
                                onClick={(e: React.MouseEvent) => {
                                    showPassword(e);
                                }}
                                className={`form__password-show-btn ${disabledShowBtn ? "disabled-btn" : ''}`}
                            >
                                <img className="form__password-show-btn-icon" src={changeInputType ? EYE_SLASH_SOLID_ICON : EYE_SOLID_ICON} alt="Eyes"/>
                            </button>
                        </div>
                        <div className="form__btn-box">
                            <button
                                disabled={disabledShowBtn}
                                className={`form__login-btn form__login-btn-submit ${disabledShowBtn ? "disabled-btn" : ''}`} 
                                onClick={(e: React.MouseEvent) => {
                                    show(e);
                                }}
                            >Show</button>
                            <button
                                disabled={disabledClearBtn}
                                className={`form__login-btn form__login-btn-clear ${disabledClearBtn ? "disabled-btn" : ''}`}
                                onClick={(e: React.MouseEvent) => {
                                    clear(e);
                                }}
                            >Clear</button>
                        </div>
                    </form>
                </div>
                {showResult && <Result login={login} password={password} />}
            </div>
        </div>
    )
}