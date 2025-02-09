import api from "./interceptor";

export const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    if (response.data?.status === "success") {
      const accessToken = response.data.data.accessToken;
      localStorage.setItem("token", accessToken);
      return response.data;
    }
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};
