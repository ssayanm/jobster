import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

import {
  adminQuery,
  allJobsQuery,
  singleJobQuery,
  statsQuery,
  userQuery,
} from "../utils/query";

export const userLoader = (queryClient) => async () => {
  try {
    const data = await queryClient.ensureQueryData(userQuery);
    return data;
  } catch (error) {
    redirect("/");
  }
};

export const jobLoader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    await queryClient.ensureQueryData(allJobsQuery(params));
    return { searchValues: { ...params } };
  };

export const editJobloader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleJobQuery(params.id));
      return params.id;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect("/dashboard/all-jobs");
    }
  };

export const adminLoader = (queryClient) => async () => {
  try {
    const data = await queryClient.ensureQueryData(adminQuery);
    return data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

// export const adminLoader = (queryClient) => async () => {
//   const data = await queryClient.ensureQueryData(adminQuery);
//   return data;
// };

// export const editJobloader = async ({ params }) => {
//   try {
//     const { data } = await customFetch.get(`/jobs/${params.id}`);
//     return data;
//   } catch (error) {
//     toast.error(error.response.data.msg);
//     return redirect("/dashboard/all-jobs");
//   }
// };

// export const adminLoader = async () => {
//   try {
//     const response = await customFetch("/users/admin/app-stats");
//     return response.data;
//   } catch (error) {
//     toast.error("You are not authorized to view this page");
//     return redirect("/dashboard");
//   }
// };

// export const statsLoader = async () => {
//   return null;
//   // const response = await customFetch.get("/jobs/stats");
//   // return response.data;
// };

export const statsLoader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return data;
};
