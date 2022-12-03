import { IonContent, IonPage } from '@ionic/react';
import { Layout } from '../components/layout/Layout';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Layout />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
