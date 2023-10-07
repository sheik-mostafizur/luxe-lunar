import {createBrowserRouter} from "react-router-dom";
import SignIn from "../pages/signin";
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
    element: <div>SignUp Hello world!</div>,
  },
]);

export default router;
