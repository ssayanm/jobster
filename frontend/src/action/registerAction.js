import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    return redirect("/login");
  } catch (error) {
    console.log(error.response.data);
    return error;
  }
};
