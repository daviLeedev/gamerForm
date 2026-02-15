"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import styles from "./Modal.module.css";

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  trigger,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  children: ReactNode;
  trigger?: ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content} aria-describedby={undefined}>
          {title && (
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          )}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
