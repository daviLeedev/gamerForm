"use client";

import { useCallback, useEffect, useState } from "react";
import { HlsPlayer } from "@gameform/video";
import { Modal } from "@gameform/ui";
import { useShortsFeed, MOCK_SHORTS } from "./useShortsFeed";
import styles from "./ShortsWidget.module.css";

const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export function ShortsWidget() {
  const { data: itemsData = [] } = useShortsFeed();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = itemsData.length > 0 ? itemsData : MOCK_SHORTS;
  const current = items[activeIndex] ?? null;

  const handleClose = useCallback(() => setIsOpen(false), []);
  const handlePrev = useCallback(() => setActiveIndex((i) => (i <= 0 ? items.length - 1 : i - 1)), [items.length]);
  const handleNext = useCallback(() => setActiveIndex((i) => (i >= items.length - 1 ? 0 : i + 1)), [items.length]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);


  if (isMobile) {
    return (
      <>
        <button
          type="button"
          className={styles.fab}
          onClick={() => setIsOpen(true)}
          aria-label="Open shorts"
        >
          Shorts
        </button>
        <Modal open={isOpen} onOpenChange={setIsOpen} title={current?.title}>
          <div className={styles.modalContent}>
            {current && (
              <HlsPlayer
                key={current.id}
                src={current.playbackUrl}
                poster={current.posterUrl}
                muted
                autoPlay
                loop={false}
                onEnded={handleNext}
              />
            )}
            <div className={styles.modalActions}>
              <button type="button" onClick={handlePrev} aria-label="Previous short">
                Prev
              </button>
              <button type="button" onClick={handleNext} aria-label="Next short">
                Next
              </button>
              <button type="button" onClick={handleClose} aria-label="Close">
                Close
              </button>
            </div>
          </div>
        </Modal>
      </>
    );
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        className={styles.fabDesktop}
        onClick={() => setIsOpen(true)}
        aria-label="Open shorts widget"
      >
        Shorts
      </button>
    );
  }

  return (
    <div
      className={[styles.widget, isMinimized && styles.widgetMinimized].filter(Boolean).join(" ")}
      role="region"
      aria-label="Shorts widget"
    >
      <div className={styles.widgetHeader}>
        <span>{current?.title ?? "Shorts"}</span>
        <div className={styles.widgetHeaderActions}>
          <button
            type="button"
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label={isMinimized ? "Expand" : "Minimize"}
          >
            {isMinimized ? "Expand" : "Min"}
          </button>
          <button type="button" onClick={handleClose} aria-label="Close widget">
            Close
          </button>
        </div>
      </div>
      {!isMinimized && current && (
        <>
          <div className={styles.playerWrap}>
            <HlsPlayer
              key={current.id}
              src={current.playbackUrl}
              poster={current.posterUrl}
              muted
              autoPlay
              loop={false}
              onEnded={handleNext}
            />
          </div>
          <div className={styles.navButtons}>
            <button type="button" onClick={handlePrev} aria-label="Previous short">
              Prev
            </button>
            <button type="button" onClick={handleNext} aria-label="Next short">
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
