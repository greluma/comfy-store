import { toast } from "react-toastify";
import { customFetch, formatPrice } from "..";
import { redirect } from "react-router-dom";
import { clearCart } from "../../feactures/cart/cartSlice";

const checkoutAction =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData.entries());
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const order = {
      data: {
        address,
        cartItems,
        chargeTotal: orderTotal,
        name: name || user.name,
        numItemsInCart,
        orderTotal: formatPrice(orderTotal),
      },
    };
    try {
      await customFetch.post("/orders", order, {
        headers: {
          Authorization: `Bearer ${
            user.token || localStorage.getItem("token")
          }`,
        },
      });
      store.dispatch(clearCart());
      toast.success("Order placed successfully");
      return redirect("/orders");
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

export default checkoutAction;
