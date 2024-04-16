import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const userProfileAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();

    const file = formData.get("avatar");
    if (file && file.size > 500000) {
      toast.error("Image size too large");
      return null;
    }

    try {
      await customFetch.patch("/users/update-user", formData);
      queryClient.invalidateQueries(["user"]);
      toast.success("Profile updated successfully");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
    return null;
  };
