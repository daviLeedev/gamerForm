"use client";

import type { ReactNode } from "react";
import styles from "./TopNav.module.css";

export function TopNav({
  search,
  userMenu,
  logo,
}: {
  search?: ReactNode;
  userMenu?: ReactNode;
  logo?: ReactNode;
}) {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>{logo}</div>
      {search && <div className={styles.center}>{search}</div>}
      <div className={styles.right}>{userMenu}</div>
    </nav>
  );
}
