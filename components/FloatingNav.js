"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "before-you-scroll", label: "Before" },
  { id: "our-story", label: "Our Story" },
  { id: "things-should-have-said", label: "Should Have Said" },
  { id: "things-i-love", label: "Love" },
  { id: "gallery", label: "Gallery" },
  { id: "letter", label: "Letter" },
  { id: "final-surprise", label: "Surprise" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 8000,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "center",
      }}
    >
      {sections.map(({ id, label }) => (
        <button
          key={id}
          title={label}
          onClick={() => scrollTo(id)}
          style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}
        >
          <motion.div
            animate={{ opacity: active === id ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
            style={{
              width: active === id ? 7 : 5,
              height: active === id ? 7 : 5,
              borderRadius: "50%",
              background: active === id ? "#c9748a" : "rgba(245,240,235,0.5)",
              boxShadow: active === id ? "0 0 8px rgba(201,116,138,0.7)" : "none",
              transition: "all 0.3s ease",
            }}
          />
        </button>
      ))}
    </div>
  );
}
