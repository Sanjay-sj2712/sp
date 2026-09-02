"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        padding: "60px 24px calc(env(safe-area-inset-bottom, 0px) + 48px)",
        textAlign: "center",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(201,116,138,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(201,116,138,0.4), transparent)",
            margin: "0 auto 28px",
          }}
        />

        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ marginBottom: 16 }}
        >
          <Heart
            size={20}
            style={{ color: "#c9748a", fill: "rgba(201,116,138,0.4)" }}
          />
        </motion.div>

        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)",
            fontStyle: "italic",
            color: "rgba(245,240,235,0.3)",
            letterSpacing: "0.03em",
          }}
        >
          Made with love, for you.
        </p>
      </motion.div>
    </footer>
  );
}

