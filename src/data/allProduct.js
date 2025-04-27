const BASE_URL = "https://fakestoreapi.com";

export async function getAllProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return await res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return await res.json();
}

export async function getProductByCategories(category) {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  return await res.json();
}

export async function fetchAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  return data;
}
