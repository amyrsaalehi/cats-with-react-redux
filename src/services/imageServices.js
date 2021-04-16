import http from "./http";

function getImages({
  category_ids = 1,
  limit = 10,
  page = 0,
  size = "thumb",
  order = "ASC",
}) {
  return http.get("images/search", {
    params: {
      category_ids,
      limit,
      page,
      size,
      order,
    },
  });
}

export { getImages };
