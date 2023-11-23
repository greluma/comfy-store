import { customFetch } from "../../utils";

export const productsLoader = async ({ request }) => {
  const response = await customFetch(`products`);
  const products = response?.data?.data;
  const meta = response?.data?.meta;
  return { products, meta };
};
