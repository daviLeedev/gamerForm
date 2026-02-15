"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { ReactNode } from "react";
import styles from "./Tabs.module.css";

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (v: string) => void;
  children: ReactNode;
}) {
  return (
    <TabsPrimitive.Root
      className={styles.root}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
    >
      {children}
    </TabsPrimitive.Root>
  );
}

export function TabsList({ children }: { children: ReactNode }) {
  return (
    <TabsPrimitive.List className={styles.list}>{children}</TabsPrimitive.List>
  );
}

export function TabsTrigger({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  return (
    <TabsPrimitive.Trigger className={styles.trigger} value={value}>
      {children}
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) {
  return (
    <TabsPrimitive.Content className={styles.content} value={value}>
      {children}
    </TabsPrimitive.Content>
  );
}
