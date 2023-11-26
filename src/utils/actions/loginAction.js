import { toast } from "react-toastify";
import { customFetch } from "..";
import { redirect } from "react-router-dom";
import { logInUser } from "../../feactures/user/userSlice";

const loginAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("auth/local", data);
      store.dispatch(logInUser(response.data));
      toast.success("Logged in Successfully");
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

export default loginAction;
