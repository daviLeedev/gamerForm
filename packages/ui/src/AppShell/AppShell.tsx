"use client";

import type { ReactNode } from "react";
import styles from "./AppShell.module.css";

export function AppShell({
  header,
  leftBanner,
  rightBanner,
  sidebar,
  footer,
  children,
}: {
  header?: ReactNode;
  leftBanner?: ReactNode;
  rightBanner?: ReactNode;
  /** @deprecated Use leftBanner instead */
  sidebar?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}) {
  const left = leftBanner ?? sidebar;
  return (
    <div className={styles.shell}>
      {header != null && <header className={styles.header}>{header}</header>}
      <div className={styles.contentWrapper}>
        <div className={styles.body}>
          {left != null && <aside className={styles.leftBanner}>{left}</aside>}
          <main className={styles.main}>{children}</main>
          {rightBanner != null && <aside className={styles.rightBanner}>{rightBanner}</aside>}
        </div>
        {footer != null && footer}
      </div>
    </div>
  );
}
