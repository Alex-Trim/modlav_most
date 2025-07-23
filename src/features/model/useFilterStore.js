import { create } from "zustand";

export const useFilterStore = create((set) => ({
  size: null,
  color: null,
  sort: null,
  isNew: false,
  isHit: false,
  isSale: false,

  setSize: (size) => set({ size }),
  setColor: (color) => set({ color }),
  setSort: (sort) => set({ sort }),
  setSortTag: (tag) => set({ sortTag: tag }),
  setIsNew: (value) => set({ isNew: value }),
  setIsHit: (value) => set({ isHit: value }),
  setIsSale: (value) => set({ isSale: value }),

  resetFilters: () =>
    set({
      size: null,
      color: null,
      sort: null,
      isNew: false,
      isHit: false,
      isSale: false,
    }),
}));
