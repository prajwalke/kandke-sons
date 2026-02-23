
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Fetch all products
export const getProducts = async () => {
  return axios.get(`${API_URL}/api/products`);
};

// Add a new product
export const addProduct = async (productData) => {
  return axios.post(`${API_URL}/api/products`, productData);
};

// Delete a product
export const deleteProduct = async (productId) => {
  return axios.delete(`${API_URL}/api/products/${productId}`);
};
