"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ProductService } from "@/shared/api/productsApi";
import { useFilterStore } from "@/features/model/useFilterStore";

export const useProductsInfiniteQuery = () => {
  const { isNew, isHit, isSale, color, size, sort } = useFilterStore();
  const limit = 10;

  return useInfiniteQuery({
    queryKey: ["products", { isNew, isHit, isSale, color, size, sort }],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await ProductService.getAll({
        isNew,
        isHit,
        isSale,
        color,
        size,
        sort,
        limit,
        page: pageParam,
      });
      return response;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.current_page < lastPage.meta.total_pages) {
        return lastPage.meta.current_page + 1;
      }
      return undefined;
    },
  });
};
