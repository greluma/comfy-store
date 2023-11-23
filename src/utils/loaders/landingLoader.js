import { customFetch } from "../../utils";

const featuredProductsURL = "products?featured=true";

export const landingLoader = async () => {
  const response = await customFetch(featuredProductsURL);
  const products = response.data.data;
  return { products };
};
