import { products, categories } from "./mockData";

// simulate network delay
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getCategories() {
  await delay(500);
  return categories;
}

export async function getProducts({ category, sub }) {
  await delay(500);

  return products.filter((p) => {
    if (category && p.category !== category) return false;
    if (sub && p.subcategory !== sub) return false;
    return true;
  });
}

export async function getProductById(id) {
  await delay(500);
  return products.find((p) => p.id === id);
}