"use client";
import { Dropdown } from "@/shared/components/drop-down";
import { useFilterStore } from "../model/useFilterStore";

const sizes = [
  { id: "null", name: "Все размеры" },
  { id: "42-44", name: "42-44" },
  { id: "46-48", name: "46-48" },
  { id: "50-52", name: "50-52" },
  { id: "54-56", name: "54-56" },
];

export const SizeFilter = () => {
  const size = useFilterStore((state) => state.size);
  const setSize = useFilterStore((state) => state.setSize);

  return (
    <div>
      <label style={{ marginBottom: "4px", display: "block" }}>Размер</label>
      <Dropdown
        options={sizes}
        selected={sizes.find((s) => s.id === size)}
        onChange={(option) => setSize(option.id)}
        placeholder="Выберите размер"
      />
    </div>
  );
};
