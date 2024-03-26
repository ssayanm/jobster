import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const editJobAction = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success("Job update successful");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};
