import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const userLoader = async () => {
  try {
    const { data } = await customFetch("/users/current-user");
    return data;
  } catch (error) {
    redirect("/");
  }
};

export const jobLoader = async ({ request }) => {
  try {
    const { data } = await customFetch("/jobs");
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
