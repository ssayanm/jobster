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
  EditJob,
} from "./pages";
import checkDefaultTheme from "./utils/checkDefaultTheme";
import { registerAction } from "./action/registerAction";
import { loginAction } from "./action/loginAction";
import { editJobloader, jobLoader, userLoader } from "./utils/loader";
import { addJobAction } from "./action/addJobAction";
import { editJobAction } from "./action/editJobAction";

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
        loader: userLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
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
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobloader,
            action: editJobAction,
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
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
