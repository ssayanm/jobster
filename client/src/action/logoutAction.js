import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const logoutAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post("/auth/login", data);
      toast.success("Logout successful");
      queryClient.invalidateQueries();
      return redirect("/login");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
