import './style.css';

interface Result {
    login: string,
    password: string,
}


export const Result: React.FC<Result> = ({login, password}) => {

    return (
        <div className="result__wrapper">
            <div className="result__login-box">
                <h2 className="result__login-title">Your login:</h2>
                <p className="result__login-content">{login}</p>
            </div>
            <div className="result__password-box">
                <h2 className="result__password-title">Your password:</h2>
                <p className="result__password-content">{password}</p>
            </div>
        </div>
    )
}