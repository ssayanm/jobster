import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AllJobs,
  Profile,
  Admin,
  Stats,
} from "./pages";
import checkDefaultTheme from "./utils/checkDefaultTheme";
import { registerAction } from "./action/registerAction";
import { loginAction } from "./action/loginAction";
import { jobLoader, userLoader } from "./utils/loader";
import { jobAction } from "./action/jobAction";

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,

        children: [
          {
            index: true,
            element: <AddJob />,
            action: jobAction,
            loader: jobLoader,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: jobLoader,
          },

          {
            path: "profile",
            element: <Profile />,
            loader: userLoader,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
        loader: userLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
