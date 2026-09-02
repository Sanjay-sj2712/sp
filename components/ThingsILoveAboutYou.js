"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { loveCards } from "@/data/loveCards.js";

export default function ThingsILoveAboutYou() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" }) ;
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-5%" }) ;

  return (
    <section
      id="things-i-love"
      style={{
        position: "relative",
        padding: "100px 20px",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(201,116,138,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: 60, position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(201,116,138,0.6)",
            marginBottom: 12,
          }}
        >
          Section IV
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem, 6.5vw, 3.5rem)",
            fontWeight: 500,
            color: "#f5f0eb",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          What I Love
          <br />
          <em style={{ color: "#c9748a" }}>About You</em>
        </h2>
        <p
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
            color: "rgba(245,240,235,0.5)",
            fontStyle: "italic",
          }}
        >
          Honestly... there are too many things to fit on one page.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        ref={gridRef}
        initial="hidden"
        animate={gridInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 720,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 14,
        }}
      >
        {loveCards.map((card, i) => (
          <LoveCard key={card.id} card={card} index={i} isLast={i === loveCards.length - 1} />
        ))}
      </motion.div>

      <style>{`
        @media (min-width: 600px) {
          #things-i-love .love-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

function LoveCard({ card, index, isLast }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
      whileHover={{ scale: 1.03, y: -3 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        gridColumn: isLast ? "1 / -1" : "auto",
        padding: "20px 20px",
        background: hovered
          ? "rgba(201,116,138,0.1)"
          : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(10px)",
        borderRadius: 16,
        border: hovered
          ? "1px solid rgba(201,116,138,0.35)"
          : "1px solid rgba(255,255,255,0.06)",
        cursor: "default",
        transition: "background 0.3s ease, border-color 0.3s ease",
        boxShadow: hovered ? "0 0 24px rgba(201,116,138,0.15)" : "none",
        minHeight: 80,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(0.9rem, 2.8vw, 1.05rem)",
          fontWeight: 500,
          color: hovered ? "#e8a0b0" : "rgba(245,240,235,0.85)",
          lineHeight: 1.4,
          marginBottom: card.subtext ? 8 : 0,
          transition: "color 0.3s ease",
        }}
      >
        {card.text}
      </p>
      {card.subtext && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.75rem, 2vw, 0.82rem)",
            color: "rgba(201,116,138,0.7)",
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          {card.subtext}
        </motion.p>
      )}
    </motion.div>
  );
}

