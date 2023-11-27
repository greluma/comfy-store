import { toast } from "react-toastify";
import { customFetch } from "../../utils";
import { redirect } from "react-router-dom";

export const ordersLoader = (store) => async () => {
  const user = store.getState().userState?.user || null;
  const userName = store.getState().userState.user?.userName || "demo user";

  if (!user || userName === "demo user") {
    toast.warn("Log In or Sign Up to Continue");
    return redirect("/login");
  }

  try {
    const response = await customFetch("/orders", {
      headers: {
        Authorization: `Bearer ${user.token || localStorage.getItem("token")}`,
      },
    });
    const { data, meta } = response.data;
    return { data, meta };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "there was an error placing your order";
    toast.error(errorMessage);
    if ([401, 403].includes(error?.response?.status)) {
      return redirect("/login");
    }
    return null;
  }
};
