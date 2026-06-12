"use client";

import { useRef, useState } from "react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  tiktokId?: string;
}

export default function VideoPlayer({ src, poster, tiktokId }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // TikTok embed — vertical 9:16 format, centered
  if (tiktokId) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "360px",
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            aspectRatio: "9/16",
            background: "#0a0812",
            boxShadow: "0 32px 80px rgba(0,0,0,0.22)",
          }}
        >
          <iframe
            src={`https://www.tiktok.com/embed/v2/${tiktokId}`}
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Video de Islandia para Mujeres — Flymingo"
          />
        </div>
      </div>
    );
  }

  // Fallback: local video player
  if (!src) return null;

  function handlePlay() {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  }

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "28px",
        overflow: "hidden",
        aspectRatio: "16/9",
        background: "#0a0812",
        boxShadow: "0 32px 80px rgba(0,0,0,0.22)",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {!playing && (
        <button
          onClick={handlePlay}
          aria-label="Reproducir video"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            background: "linear-gradient(to top, rgba(10,8,18,0.7) 0%, rgba(10,8,18,0.2) 100%)",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              background: "var(--color-brand-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 0 12px rgba(244,120,152,0.18)",
              transition: "transform 0.2s ease",
            }}
            className="hover:scale-110"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="white"
              style={{ marginLeft: "3px" }}
              aria-hidden="true"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Ver el viaje
          </span>
        </button>
      )}
    </div>
  );
}
