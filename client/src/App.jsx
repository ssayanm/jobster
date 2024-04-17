import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
import {
  adminLoader,
  editJobloader,
  jobLoader,
  statsLoader,
  userLoader,
} from "./utils/loader";
import { addJobAction } from "./action/addJobAction";
import { editJobAction } from "./action/editJobAction";
import { deleteJobAction } from "./action/deleteJobAction";
import { userProfileAction } from "./action/userProfileAction";
import ErrorElement from "./components/ErrorElement";

checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
        action: loginAction(queryClient),
      },
      {
        path: "dashboard",
        element: <DashboardLayout queryClient={queryClient} />,
        loader: userLoader(queryClient),
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction(queryClient),
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: jobLoader(queryClient),
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobloader,
            action: editJobAction,
          },

          {
            path: "delete-job/:id",
            action: deleteJobAction,
          },

          {
            path: "profile",
            element: <Profile />,
            action: userProfileAction(queryClient),
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader(queryClient),
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
