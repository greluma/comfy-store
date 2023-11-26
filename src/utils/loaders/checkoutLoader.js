import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const checkoutLoader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("Log In or Sign Up to Continue");
    return redirect("/login");
  }
  return null;
};
