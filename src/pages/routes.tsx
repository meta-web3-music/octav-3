import { Navigate, createBrowserRouter } from "react-router-dom";
import Start from "./start";
import SignIn from "./signin";
import Home from "./home";
import Artist from "./artist";
import Posts from "./posts";
import Fandom from "./fandom";
import Notifications from "./notifications";
import Music from "./music";

export const router = createBrowserRouter([
  {
    path: "/start",
    element: <Start />,
    children: [
      { path: "home", element: <Home /> },
      { path: "notifications", element: <Notifications /> },
      { path: "", element: <Navigate to="home" /> },
    ],
  },
  { path: "/signin", element: <SignIn /> },
  {
    path: "/artist",
    element: <Artist />,
    children: [
      {
        path: "post",
        element: <Posts />,
      },
      {
        path: "fandom",
        element: <Fandom />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "",
        element: <Navigate to="post" />,
      },
    ],
  },
  { path: "/", element: <Navigate to="/signin" /> },
  { path: "*", element: <p>Not Found</p> },
]);
