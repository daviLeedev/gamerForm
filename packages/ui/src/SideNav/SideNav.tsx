"use client";

import type { ReactNode } from "react";
import styles from "./SideNav.module.css";

export function SideNav({ children }: { children: ReactNode }) {
  return <ul className={styles.nav}>{children}</ul>;
}

export function SideNavItem({
  href,
  children,
  active,
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        className={[styles.item, active && styles.itemActive].filter(Boolean).join(" ")}
      >
        {children}
      </a>
    </li>
  );
}
