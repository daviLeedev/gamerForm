"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Hls from "hls.js";

function isSafari() {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  return /Safari/i.test(ua) && !/Chrome/i.test(ua) && !/Chromium/i.test(ua);
}

export type HlsPlayerProps = {
  src: string;
  poster?: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  onError?: (e: Error) => void;
  onReady?: () => void;
  onEnded?: () => void;
};

export function HlsPlayer({
  src,
  poster,
  muted = true,
  autoPlay = true,
  loop = true,
  onError,
  onReady,
  onEnded,
}: HlsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [showTapToPlay, setShowTapToPlay] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const cleanup = useCallback(() => {
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    const safari = isSafari();

    if (safari) {
      video.src = src;
      video.load();
      onReady?.();
      return () => {
        video.src = "";
      };
    }

    if (Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => onReady?.());
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          onError?.(new Error(data.type + ": " + data.details));
        }
      });
      return () => cleanup();
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.load();
      onReady?.();
      return () => {
        video.src = "";
      };
    }

    onError?.(new Error("HLS not supported"));
    return () => {};
  }, [src, cleanup, onReady, onError]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [e] = entries;
        if (!e) return;
        if (e.isIntersecting) {
          video.play().catch(() => setShowTapToPlay(true));
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  const handlePlay = useCallback(() => {
    setShowTapToPlay(false);
    setHasPlayed(true);
  }, []);

  const handlePause = useCallback(() => {
    if (hasPlayed) setShowTapToPlay(true);
  }, [hasPlayed]);

  const handleTapToPlay = useCallback(() => {
    videoRef.current?.play();
    setShowTapToPlay(false);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "9/16", maxWidth: "100%", backgroundColor: "#000" }}>
      <video
        ref={videoRef}
        poster={poster}
        muted={muted}
        autoPlay={autoPlay}
        loop={loop}
        playsInline
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={onEnded}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      {showTapToPlay && (
        <button
          type="button"
          onClick={handleTapToPlay}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.4)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          aria-label="Tap to play"
        >
          Tap to play
        </button>
      )}
    </div>
  );
}
