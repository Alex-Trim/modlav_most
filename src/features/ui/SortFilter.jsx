"use client";
import React from "react";
import { Dropdown } from "@/shared/components/drop-down";
import { useFilterStore } from "../model/useFilterStore";

const sortOptions = [
  { id: "popular", name: "Популярные" },
  { id: "cheap", name: "Сначала дешёвые" },
  { id: "expensive", name: "Сначала дорогие" },
];

export const SortFilter = () => {
  const sort = useFilterStore((state) => state.sort);
  const setSort = useFilterStore((state) => state.setSort);

  return (
    <div>
      <label style={{ marginBottom: "4px", display: "block" }}>
        Сортировка
      </label>
      <Dropdown
        options={sortOptions}
        selected={sortOptions.find((s) => s.id === sort)}
        onChange={(option) => setSort(option.id)}
        placeholder="Сортировка"
      />
    </div>
  );
};
