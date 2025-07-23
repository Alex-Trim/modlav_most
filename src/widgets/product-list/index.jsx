"use client";
import React from "react";
import { useProductsInfiniteQuery } from "@/entities/product/model/useProductsInfiniteQuery";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import styles from "./styles.module.css";

export const ProductList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useProductsInfiniteQuery();
  const observerRef = React.useRef();

  React.useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchNextPage, hasNextPage]);

  if (status === "loading") return <div>Загрузка...</div>;
  if (status === "error") return <div>Ошибка загрузки</div>;

  return (
    <>
      <div className={styles.grid}>
        {data?.pages?.map((page) =>
          page.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
      <div ref={observerRef} style={{ height: 1 }}></div>
      {isFetchingNextPage && (
        <div className={styles.info}>Загрузка новых товаров...</div>
      )}
      <button onClick={() => fetchNextPage()}>Загрузить еще</button>
      {!hasNextPage && <div className={styles.info}>Больше товаров нет</div>}
    </>
  );
};
