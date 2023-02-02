import products from "~/data/server-product-data.json";

export default defineEventHandler((event) => {
  return products;
});
