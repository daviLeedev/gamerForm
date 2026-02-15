import styles from "./page.module.css";

const FEED = [
  {
    title: "커뮤니티 메인 피드가 새롭게 정리됐습니다",
    author: "community 관리자",
    summary:
      "센달 그루브 컬러를 메인으로 적용하고 밝은 테마로 정돈하여 시각적 집중도를 높였습니다. Autosuggest형 태그로 관심사를 바로 탐색하세요.",
  },
  {
    title: "Shorts 위젯이 오른쪽 하단에 고정됩니다",
    author: "Shorts 팀",
    summary:
      "CP 흐름을 고려해 Shorts CTA를 헤더에 넣고, 위젯은 피드 아래에서 확장할 수 있도록 구성했으며, 모달 재생 시 피드가 가려지지 않게 했습니다.",
  },
  {
    title: "실시간 베스트/AI 창작 태그로 트래픽을 유도합니다",
    author: "운영팀",
    summary:
      "가벼운 태그 칩을 활용해 피드 전체를 살펴보거나 선택한 주제를 빠르게 필터링할 수 있습니다. 네비는 pill 스타일로 제작되어 텍스트 대비가 선명합니다.",
  },
];

export default function Home() {
  return (
    <main className={styles.pageMain}>
      <section className={styles.hero}>
        <span className={styles.pill}>community feed</span>
        <h1 className={styles.heroTitle}>그리드</h1>
        <p className={styles.heroCopy}></p>
      </section>

      {/* <section>
        <div className={styles.feedHeader}>
          <h2 className={styles.feedTitle}>게시판 추천</h2>
          <button className={styles.shortAction}>Shorts 위젯 열기</button>
        </div>
        <div className={styles.feedGrid}>
          {FEED.map((entry) => (
            <article key={entry.title} className={styles.card}>
              <span className={styles.pill}>추천</span>
              <h3 className={styles.cardTitle}>{entry.title}</h3>
              <p className={styles.cardSummary}>{entry.summary}</p>
              <div className={styles.cardMeta}>{entry.author}</div>
            </article>
          ))}
        </div>
      </section> */}
    </main>
  );
}
