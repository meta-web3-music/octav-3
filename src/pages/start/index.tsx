import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Redirect, Route } from "react-router";
import Home from "../home";

const Start: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/start" to="/start/home" />
          <Route exact path="/start/home">
            <Home />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton
            tab="home"
            className="text-[#8A8B8F]"
            href="/start/home"
          >
            <span className="text-xl">
              <span className="iconify" data-icon="fluent:home-32-regular" />
            </span>
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href="/radio" className="text-[#8A8B8F]">
            <span className="text-xl">
              <span className="iconify" data-icon="mdi:compass-outline" />
            </span>
            <IonLabel>Discover</IonLabel>
          </IonTabButton>

          <IonTabButton
            tab="library"
            href="/library"
            className="text-[#8A8B8F]"
          >
            <span className="text-xl">
              <span className="iconify" data-icon="ic:outline-notifications" />
            </span>
            <IonLabel>Notifications</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Start;
