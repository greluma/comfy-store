import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const checkoutLoader = (store) => () => {
  const user = store.getState().userState?.user || null;
  const userName = store.getState().userState.user?.userName || "demo user";

  if (!user || userName === "demo user") {
    toast.warn("Log In or Sign Up to Continue");
    return redirect("/login");
  }
  return null;
};
