"use client";
import Link from "next/link";
import { formatPrice } from "../lib/formatPrice";
import styles from "./styles.module.css";
export const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image || "/images/clothing.webp"}
          alt={product.title}
          className={styles.image}
        />

        {product.isNew && <span className={styles.newBadge}>NEW</span>}
        {product.oldPrice && <span className={styles.saleBadge}>SALE</span>}
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.prices}>
          {product.oldPrice ? (
            <>
              <span className={styles.price}>{formatPrice(product.price)}</span>
              <span className={styles.oldPrice}>
                {formatPrice(product.oldPrice)}
              </span>
            </>
          ) : (
            <span className={styles.price}>{formatPrice(product.price)}</span>
          )}
        </div>

        <div className={styles.meta}>
          <p>Размеры:{product.sizes.map((s) => s.id).join(", ")}</p>
          <p>Цвет: {product.color}</p>
        </div>
      </div>
    </Link>
  );
};
