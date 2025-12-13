export const setAuthToken = (token) => {
  localStorage.setItem("accessToken", token);
};

export const getAuthToken = () => {
  return localStorage.getItem("accessToken");
};

export const removeAuthToken = () => {
  localStorage.removeItem("accessToken");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("accessToken");
};