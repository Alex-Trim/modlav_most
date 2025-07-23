"use client";

import styles from "./styles.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";

const categories = [
  "Все категории",
  "Новинки",
  "Распродажа",
  "Майки",
  "Футболки",
  "Рубашки",
  "Туники",
  "Топы",
  "Худи, свитшоты",
  "Блузы",
  "Джемперы",
  "Свитеры",
  "Верхняя одежда",
  "Леггинсы",
  "Брюки",
  "Джинсы",
  "Сарафаны",
  "Платья",
  "Юбки",
  "Костюмы",
  "Домашняя одежда",
  "Головные уборы",
  "Комплекты",
];

export const Sidebar = () => {
  const searchParams = useSearchParams();
  const current = searchParams.get("category") || "Все категории";

  return (
    <aside className={styles.sidebar}>
      {categories.map((cat) => (
        <Link
          key={cat}
          href={`?category=${encodeURIComponent(cat)}`}
          className={`${styles.link} ${current === cat ? styles.active : ""}`}
        >
          {cat}
          {(cat === "Верхняя одежда" || cat === "Головные уборы") && (
            <FiChevronDown className={styles.chevron} />
          )}
        </Link>
      ))}
    </aside>
  );
};
