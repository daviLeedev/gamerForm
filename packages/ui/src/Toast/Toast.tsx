"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import type { ReactNode } from "react";
import styles from "./Toast.module.css";

export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      {children}
    </ToastPrimitive.Provider>
  );
}

export function Toast({
  open,
  onOpenChange,
  title,
  description,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}) {
  return (
    <ToastPrimitive.Root
      className={styles.root}
      open={open}
      onOpenChange={onOpenChange}
    >
      {title && (
        <ToastPrimitive.Title className={styles.title}>{title}</ToastPrimitive.Title>
      )}
      {description && (
        <ToastPrimitive.Description className={styles.description}>
          {description}
        </ToastPrimitive.Description>
      )}
    </ToastPrimitive.Root>
  );
}
