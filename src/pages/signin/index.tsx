import { IonContent, IonPage } from "@ionic/react";

const SignIn: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center">
          <img src="./favicon.png" className="w-12" />
          <div className="ml-3"></div>
          <p className="text-4xl font-semibold">OCTAV3</p>
        </div>

        <div className="connect-platform fixed bg-[#D9D9D9] bottom-0 w-[100vw] flex flex-col items-center pt-2 pb-6 rounded-t-3xl">
          <p className="text-[rgba(0,0,0,0.60)] my-5 w-[50%] text-center">
            Connect your streaming platform to get started
          </p>

          <button className="bg-black text-white rounded-3xl p-2 w-[90%]">
            Continue with Spotify
          </button>
          <div className="my-1"></div>
          <button className="bg-black text-white rounded-3xl p-2 w-[90%]">
            Continue with Apple Music
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
