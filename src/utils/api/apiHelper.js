export const baseUrl =
  import.meta.env.VITE_ENVIRONMENT === "production"
    ? import.meta.env.VITE_API
    : "http://localhost:8080/api/v1";
