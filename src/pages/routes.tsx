import { Redirect, Route } from "react-router";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import SignIn from "./signin";
import Start from "./start";
import React from "react";
import Home from "./home";

const routes: [string, React.FC<any> | string, boolean?, boolean?][] = [
  // ["/tab1", Tab1, true],
  // ["/tab2", Tab2, true],
  // ["/tab3", Tab3, true],
  ["/start", Start, false],
  ["/signin", SignIn, true],
  ["/", "/signin", true],
];
export const Routes = () => {
  return (
    <>
      {routes.map(([path, Comp_to, exact, rootRedirect]) => {
        return (
          <React.Fragment key={path}>
            <Route exact={exact} path={path}>
              {typeof Comp_to === "string" ? (
                <Redirect key={path} to={Comp_to} />
              ) : (
                <Comp_to />
              )}
            </Route>
          </React.Fragment>
        );
      })}
    </>
  );
};
