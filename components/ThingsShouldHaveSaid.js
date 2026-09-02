"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { apologyCards } from "@/data/apologyCards.js";

export default function ThingsShouldHaveSaid() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" }) ;

  return (
    <section
      id="things-should-have-said"
      style={{
        position: "relative",
        padding: "100px 20px",
        background: "rgba(5,8,16,0.6)",
        overflow: "hidden",
      }}
    >
      {/* Background atmosphere */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(124,111,168,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ textAlign: "center", marginBottom: 64, position: "relative", zIndex: 1 }}
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
          {/* Section III */}
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem, 6.5vw, 3.5rem)",
            fontWeight: 500,
            color: "#f5f0eb",
            marginBottom: 20,
            lineHeight: 1.2,
          }}
        >
          Things I Should
          <br />
          <em style={{ color: "#c9748a" }}>Have Said</em>
        </h2>
        <p
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
            color: "rgba(245,240,235,0.5)",
            maxWidth: 380,
            margin: "0 auto",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          I know saying sorry isn&apos;t enough.
          <br />
          There are things I should have understood sooner.
        </p>
      </motion.div>

      {/* Apology cards */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 600,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {apologyCards.map((card, i) => (
          <ApologyCard key={card.id} text={card.text} index={i} />
        ))}
      </div>
    </section>
  );
}

function ApologyCard({ text, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" }) ;
  const isLast = index === 5;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 1.1,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      style={{
        padding: "24px 28px",
        background: isLast
          ? "linear-gradient(135deg, rgba(201,116,138,0.12), rgba(124,111,168,0.08))"
          : "rgba(255,255,255,0.035)",
        backdropFilter: "blur(10px)",
        borderRadius: 14,
        border: isLast
          ? "1px solid rgba(201,116,138,0.3)"
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: isLast ? "0 0 30px rgba(201,116,138,0.12)" : "none",
      }}
    >
      <p
        style={{
          fontFamily: isLast ? "'Playfair Display', Georgia, serif" : "'Inter', sans-serif",
          fontSize: isLast
            ? "clamp(1rem, 3.5vw, 1.3rem)"
            : "clamp(0.95rem, 3vw, 1.15rem)",
          fontWeight: isLast ? 500 : 300,
          color: isLast ? "#e8a0b0" : "rgba(245,240,235,0.82)",
          lineHeight: 1.65,
          fontStyle: isLast ? "italic" : "normal",
          textShadow: isLast ? "0 0 20px rgba(201,116,138,0.4)" : "none",
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}

