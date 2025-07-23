"use client";
import React from "react";
import styles from "./styles.module.css";

export const ToggleSwitch = ({ id, label, checked, onChange }) => {
  return (
    <label className={styles.switch_wrapper} htmlFor={id}>
      <div className={styles.switch}>
        <input type="checkbox" id={id} checked={checked} onChange={onChange} />
        <span className={styles.slider}></span>
      </div>
      <span className={styles.label_text}>{label}</span>
    </label>
  );
};
