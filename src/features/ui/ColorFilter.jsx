"use client";
import React from "react";
import { Dropdown } from "@/shared/components/drop-down";
import { useFilterStore } from "../model/useFilterStore";

const colors = [
  { id: "null", name: "Все цвета" },
  { id: "Бордовый", name: "Бордовый" },
  { id: "Красный", name: "Красный" },
  { id: "Синий", name: "Синий" },
  { id: "Чёрный", name: "Чёрный" },
  { id: "Золотой", name: "Золотой" },
  { id: "Розовый", name: "Розовый" },
  { id: "Белый", name: "Белый" },
];

export const ColorFilter = () => {
  const color = useFilterStore((state) => state.color);
  const setColor = useFilterStore((state) => state.setColor);

  return (
    <div>
      <label style={{ marginBottom: "4px", display: "block" }}>Цвет</label>
      <Dropdown
        options={colors}
        selected={colors.find((c) => c.id === color)}
        onChange={(option) => setColor(option.id)}
        placeholder="Выберите цвет"
      />
    </div>
  );
};
