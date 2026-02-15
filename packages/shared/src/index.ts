export type ShortItem = {
  id: string;
  playbackUrl: string; // HLS master.m3u8
  posterUrl?: string;
  title?: string;
  durationSec?: number;
  aspectRatio?: "9:16" | "1:1" | "16:9";
};
