import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const userProfileAction = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }

  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};
