import customFetch from "./customFetch";

export const userQuery = {
  queryKey: ["user"],
  queryFn: async () => {
    const { data } = await customFetch("/users/current-user");
    return data;
  },
};

export const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  },
};

export const adminQuery = {
  queryKey: ["jobs", "user"],
  queryFn: async () => {
    const response = await customFetch.get("/users/admin/app-stats");
    return response.data;
  },
};

export const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params;
  return {
    queryKey: [
      "jobs",
      search ?? "",
      jobStatus ?? "all",
      jobType ?? "all",
      sort ?? "newest",
      page ?? 1,
    ],
    queryFn: async () => {
      const { data } = await customFetch.get("/jobs", {
        params,
      });
      return data;
    },
  };
};
