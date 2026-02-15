import { useQuery } from "@tanstack/react-query";
import type { ShortItem } from "@gameform/shared";

export const MOCK_SHORTS: ShortItem[] = [
  {
    id: "1",
    playbackUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    title: "Sample Short 1",
    durationSec: 10,
    aspectRatio: "9:16",
  },
  {
    id: "2",
    playbackUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    title: "Sample Short 2",
    durationSec: 10,
    aspectRatio: "9:16",
  },
];

export function useShortsFeed() {
  return useQuery({
    queryKey: ["shorts-feed"],
    queryFn: async (): Promise<ShortItem[]> => MOCK_SHORTS,
    staleTime: 60_000,
  });
}
