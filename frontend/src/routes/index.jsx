import {createBrowserRouter} from "react-router-dom";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
