import { $fetch } from "ohmyfetch";

const api = $fetch.create({
  baseURL: "https://api.quotable.io",
});
export default api;
