import { Navigate, createBrowserRouter } from "react-router-dom";
import Start from "./start";
import SignIn from "./signin";
import Home from "./home";
import Discover from "./discover";

export const router = createBrowserRouter([
  {
    path: "/start",
    element: <Start />,
    children: [
      { path: "home", element: <Home />, index: true },
      { path: "discover", element: <Discover />, index: true },
      { path: "", element: <Navigate to="home" /> },
    ],
  },
  { path: "/signin", element: <SignIn /> },
  { path: "/", element: <Navigate to="/signin" /> },
  { path: "*", element: <p>Not Found</p> },
]);
