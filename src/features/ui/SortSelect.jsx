"use client";
import React from "react";
import { ToggleSwitch } from "@/shared/components/toggle-switches";
import { useFilterStore } from "../model/useFilterStore";

export const SortSelect = () => {
  const { isNew, setIsNew, isHit, setIsHit, isSale, setIsSale } =
    useFilterStore();

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <label style={{ display: "flex" }}>
        <ToggleSwitch
          checked={isNew}
          onChange={(e) => {
            setIsNew(e.target.checked);
          }}
        />
        Новинки
      </label>
      <label style={{ display: "flex" }}>
        <ToggleSwitch
          checked={isHit}
          onChange={(e) => setIsHit(e.target.checked)}
        />
        Хиты продаж
      </label>
      <label style={{ display: "flex" }}>
        <ToggleSwitch
          checked={isSale}
          onChange={(e) => setIsSale(e.target.checked)}
        />
        Распродажа
      </label>
    </div>
  );
};
