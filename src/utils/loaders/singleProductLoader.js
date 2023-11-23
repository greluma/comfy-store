import { customFetch } from "../../utils";

export const singleProductLoader = async ({ params }) => {
  const { id } = params;
  const response = await customFetch(`products/${id}`);
  return { products: response.data.data };
};
