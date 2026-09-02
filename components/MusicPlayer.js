"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";

const MUSIC_SRC = "/music/song.mp3";

export default function MusicPlayer() {
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [checked, setChecked] = useState(false);
  const audioRef = useRef(null);

  // Check if file exists
  useEffect(() => {
    fetch(MUSIC_SRC, { method: "HEAD" }) 
      .then((res) => {
        if (res.ok) setAvailable(true);
      }) 
      .catch(() => {}) 
      .finally(() => setChecked(true));
  }, []);

  useEffect(() => {
    if (!available) return;
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    return () => {
      audio.pause();
    };
  }, [available]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => {}) ;
      setPlaying(true);
    }
  };

  if (!checked || !available) return null;

  return (
    <AnimatePresence>
      <motion.button
        key="music-btn"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        onClick={toggle}
        title={playing ? "Pause music" : "Play music"}
        style={{
          position: "fixed",
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 24px)",
          left: 20,
          zIndex: 9000,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(10px)",
          border: `1px solid ${playing ? "rgba(201,116,138,0.5)" : "rgba(255,255,255,0.1)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: playing ? "#c9748a" : "rgba(245,240,235,0.5)",
          boxShadow: playing ? "0 0 16px rgba(201,116,138,0.3)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
        {/* Pulse ring when playing */}
        {playing && (
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              position: "absolute",
              inset: -4,
              borderRadius: "50%",
              border: "1px solid rgba(201,116,138,0.4)",
              pointerEvents: "none",
            }}
          />
        )}
      </motion.button>
    </AnimatePresence>
  );
}

