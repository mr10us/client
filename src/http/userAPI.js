import { $authHost, $host } from ".";

export const registration = async (email, password) => {
  const response = await $host.post("/auth/registation", {
    email,
    password,
    role: "ADMIN",
  });
  return response;
};

export const login = async (email, password) => {
  const response = await $host.post("/auth/login", { email, password });
  return response;
};

export const getUsers = async () => {
  const response = await $host.get("/auth/users", {});
  return response;
};
