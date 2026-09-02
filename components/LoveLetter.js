"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { letterParagraphs, letterSignature } from "@/data/letter.js";
import { Heart } from "lucide-react";

export default function LoveLetter() {
  const ref = useRef(null);
  const headerInView = useInView(ref, { once: true, margin: "-10%" }) ;
  const letterRef = useRef(null);
  const letterInView = useInView(letterRef, { once: true, margin: "-8%" }) ;

  return (
    <section
      id="letter"
      style={{
        position: "relative",
        padding: "100px 20px",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(201,116,138,0.07) 0%, rgba(124,111,168,0.05) 50%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: 48, position: "relative", zIndex: 1 }}
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
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem, 6.5vw, 3.5rem)",
            fontWeight: 500,
            color: "#f5f0eb",
            lineHeight: 1.2,
          }}
        >
          A Letter I Wanted
          <br />
          <em style={{ color: "#c9748a" }}>You To Read</em>
        </h2>
      </motion.div>

      {/* Letter card */}
      <motion.div
        ref={letterRef}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={letterInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 640,
          margin: "0 auto",
        }}
      >
        {/* Card */}
        <div
          style={{
            background: "rgba(245,240,235,0.03)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(201,116,138,0.2)",
            borderRadius: 24,
            padding: "clamp(28px, 6vw, 52px)",
            position: "relative",
            boxShadow:
              "0 0 60px rgba(201,116,138,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Decorative top line */}
          <div
            style={{
              width: "100%",
              height: 1,
              background:
                "linear-gradient(to right, transparent, rgba(201,116,138,0.4), transparent)",
              marginBottom: 32,
            }}
          />

          {/* Small heart icon */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Heart
              size={18}
              style={{ color: "rgba(201,116,138,0.6)", fill: "rgba(201,116,138,0.3)" }}
            />
          </div>

          {/* Letter body */}
          <div
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1rem, 3vw, 1.12rem)",
              lineHeight: 1.9,
              color: "rgba(245,240,235,0.82)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {letterParagraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  fontWeight: i === letterParagraphs.length - 1 ? 500 : 400,
                  color:
                    i === letterParagraphs.length - 1
                      ? "#e8a0b0"
                      : "rgba(245,240,235,0.82)",
                  textShadow:
                    i === letterParagraphs.length - 1
                      ? "0 0 20px rgba(201,116,138,0.4)"
                      : "none",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Signature */}
          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(to right, rgba(201,116,138,0.3), transparent)",
              }}
            />
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                fontStyle: "italic",
                color: "rgba(201,116,138,0.8)",
              }}
            >
              {letterSignature}
            </p>
          </div>

          {/* Decorative bottom line */}
          <div
            style={{
              width: "100%",
              height: 1,
              background:
                "linear-gradient(to right, transparent, rgba(201,116,138,0.4), transparent)",
              marginTop: 32,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

