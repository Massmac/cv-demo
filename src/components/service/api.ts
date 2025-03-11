import axios from "axios";

const API_BASE_URL = "http://localhost:8050/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to get JWT token from local storage
const getAuthToken = () => localStorage.getItem("token");

// Attach JWT token to requests
apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Handle token expiration or unauthorized requests
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // Handle logout or token refresh
      localStorage.removeItem("token");
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);