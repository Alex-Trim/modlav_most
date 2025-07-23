"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Блокируем скролл страницы при открытом меню
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src="/images/logo.png" alt="MODLAV" />
            </div>

            {/* Кнопка бургер-меню для мобильных */}
            <button
              className={styles.burgerButton}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Мобильное меню (выпадашка) */}
          <div
            className={`${styles.mobileMenu} ${
              isMenuOpen ? styles.menuOpen : ""
            }`}
          >
            <nav className={styles.nav}>
              <a href="#" className={styles.active}>
                Каталог
              </a>
              <a href="#">Новинки</a>
              <a href="#">Доставка и оплата</a>
              <a href="#">Отзывы</a>
            </nav>

            <div className={styles.icons}>
              <FiSearch size={20} />
              <FiUser size={20} />
              <div className={styles.iconWithCount}>
                <FiHeart size={20} />
                <span className={styles.count}>0</span>
              </div>
              <div className={styles.iconWithCount}>
                <FiShoppingBag size={20} />
                <span className={styles.count}>0</span>
              </div>
            </div>
          </div>

          {/* Десктопная версия меню */}
          <div className={styles.desktopMenu}>
            <nav className={styles.nav}>
              <a href="#" className={styles.active}>
                Каталог
              </a>
              <a href="#">Новинки</a>
              <a href="#">Доставка и оплата</a>
              <a href="#">Отзывы</a>
            </nav>

            <div className={styles.icons}>
              <FiSearch size={20} />
              <FiUser size={20} />
              <div className={styles.iconWithCount}>
                <FiHeart size={20} />
                <span className={styles.count}>0</span>
              </div>
              <div className={styles.iconWithCount}>
                <FiShoppingBag size={20} />
                <span className={styles.count}>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
