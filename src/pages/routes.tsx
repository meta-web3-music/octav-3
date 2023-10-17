import { Redirect, Route } from "react-router";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import SignIn from "./signin";

const routes: [string, JSX.Element, boolean?][] = [
  ["/tab1", <Tab1 />],
  ["/tab2", <Tab2 />],
  ["/tab3", <Tab3 />],
  ["/signin", <SignIn />, true],
];
export const Routes = () => {
  return (
    <>
      {routes.map(([path, c, rootRedirect]) => (
        <>
          <Route key={path} exact path={path}>
            {c}
          </Route>
          <Route key={path} exact path="/">
            <Redirect to={path} />
          </Route>
        </>
      ))}
    </>
  );
};
