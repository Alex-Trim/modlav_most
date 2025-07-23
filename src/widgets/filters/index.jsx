import React from "react";
import { ColorFilter } from "@/features/ui/ColorFilter";
import { SizeFilter } from "@/features/ui/SizeFilter";
import { SortFilter } from "@/features/ui/SortFilter";
import { SortSelect } from "@/features/ui/SortSelect";

import styles from "./styles.module.css";

export const Filters = () => {
  return (
    <aside className={styles.filters}>
      <div className={styles.filters_row}>
        <SortSelect />
      </div>

      <div className={styles.filters_row}>
        <div className={styles.filters_group}>
          <SortFilter />
          <SizeFilter />
          <ColorFilter />
        </div>
      </div>
    </aside>
  );
};
