import { toast } from "react-toastify";
import { customFetch } from "..";
import { redirect } from "react-router-dom";

const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("auth/local/register", data);
    toast.success("Registered Successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || "Please check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

export default registerAction;
