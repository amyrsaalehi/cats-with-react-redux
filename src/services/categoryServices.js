import http from "./http";

function getAllCategories() {
  return http.get("categories");
}

export { getAllCategories };
