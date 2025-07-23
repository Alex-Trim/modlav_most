const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const ProductService = {
  async getAll({
    color,
    size,
    sort,
    isNew,
    isHit,
    isSale,
    limit = 10,
    page = 1,
  }) {
    const params = new URLSearchParams();

    if (color && color !== "null") params.append("color", color);
    if (size && size !== "null") params.append("sizes.id", size);
    if (sort) {
      if (sort === "cheap") params.append("sortBy", "price");
      else if (sort === "expensive") params.append("sortBy", "-price");
    }
    if (isNew) params.append("isNew", true);
    if (isHit) params.append("isHit", true);
    if (isSale) params.append("isOnSale", true);

    params.append("limit", limit);
    params.append("page", page);

    const url = `${API_BASE}/items?${params.toString()}`;

    console.log(url);
    const response = await fetch(url);

    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  },

  async getById(id) {
    const response = await fetch(`${API_BASE}/items/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return response.json();
  },
};
