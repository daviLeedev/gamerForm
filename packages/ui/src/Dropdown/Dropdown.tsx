"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({
  trigger,
  children,
}: {
  trigger: ReactNode;
  children: ReactNode;
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild className={styles.trigger}>
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content} sideOffset={4}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function DropdownItem({
  onSelect,
  children,
}: {
  onSelect?: () => void;
  children: ReactNode;
}) {
  return (
    <DropdownMenu.Item className={styles.item} onSelect={onSelect}>
      {children}
    </DropdownMenu.Item>
  );
}
