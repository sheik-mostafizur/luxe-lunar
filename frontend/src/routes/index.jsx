import {createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/signin",
    element: <div>SignIn, Hello world!</div>,
  },
  {
    path: "/signup",
    element: <div>SignUp Hello world!</div>,
  },
]);

export default router;
