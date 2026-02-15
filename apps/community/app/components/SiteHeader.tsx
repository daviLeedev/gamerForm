"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SiteHeader.module.css";

const NAV_LINKS = [
  { href: "/galleries", label: "갤러리" },
  { href: "/galleries/minor", label: "SHORT" },
];

const FILTER_TAGS = ["실시간 베스트", "AI 창작", "비트코인"];
const DEFAULT_RECENT_VISITS = [
  { id: "bitcoin", label: "비트코인", href: "/galleries/bitcoin" },
];
const RECENT_VISIT_LABEL = "최근 방문";

export function SiteHeader() {
  const [recentVisits, setRecentVisits] = useState(DEFAULT_RECENT_VISITS);

  useEffect(() => {
    // future: fetch from API or read from browser cache before updating recent visits
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topFull}>
        <div className={styles.headerInner}>
          <div className={styles.topRow}>
            <a className={styles.logo} href="/">
              <Image
                src="/logo.png"
                alt="Community"
                width={140}
                height={40}
                priority
              />
            </a>
            <form className={styles.searchForm} role="search">
              <input
                type="search"
                className={styles.searchInput}
                placeholder="통합검색"
                aria-label="검색"
                name="q"
              />
              <button
                type="submit"
                className={styles.searchBtn}
                aria-label="검색"
              >
                검색
              </button>
            </form>
            <div className={styles.actions}>
              <a className={styles.loginBtn} href="/login">
                로그인
              </a>
              <button
                type="button"
                className={styles.shortsBtn}
                aria-label="Shorts 열기"
              >
                Shorts
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.navFull}>
        <div className={styles.headerInner}>
          <nav className={styles.navRow} aria-label="커뮤니티 메뉴">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.navItem}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.tagFull}>
        <div className={styles.headerInner}>
          <div className={styles.recentRow} aria-label="최근 방문">
            <span className={styles.recentLabel}>{RECENT_VISIT_LABEL}</span>
            <div className={styles.tagActions}>
              {recentVisits.map((visit) => (
                <Link
                  key={visit.id}
                  href={visit.href}
                  className={styles.recentAction}
                >
                  {visit.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
