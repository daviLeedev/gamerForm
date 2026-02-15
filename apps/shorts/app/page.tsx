"use client";

import { HlsPlayer } from "@gameform/video";

const SAMPLE_M3U8 = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

export default function ShortsPage() {
  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 16 }}>
      <h1>숏폼 피드</h1>
      <HlsPlayer
        src={SAMPLE_M3U8}
        muted
        autoPlay
        loop
      />
    </div>
  );
}
