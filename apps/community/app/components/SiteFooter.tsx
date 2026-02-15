"use client";

import { Container } from "@gameform/ui";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
          <div className={styles.links}>
            <a href="/about">이용약관</a>
            <a href="/privacy">개인정보처리방침</a>
            <a href="/help">고객센터</a>
            <a href="/sitemap">사이트맵</a>
          </div>
          <div className={styles.copyright}>
            © Community. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
