"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import type { ReactNode } from "react";
import styles from "./ScrollArea.module.css";

export function ScrollArea({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ScrollAreaPrimitive.Root className={[styles.root, className].filter(Boolean).join(" ")}>
      <ScrollAreaPrimitive.Viewport className={styles.viewport}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Corner />
      <ScrollAreaPrimitive.Scrollbar className={styles.scrollbar} orientation="vertical">
        <ScrollAreaPrimitive.Thumb className={styles.thumb} />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  );
}
