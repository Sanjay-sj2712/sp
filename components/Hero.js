"use client";
import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById("before-you-scroll");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding:
          "env(safe-area-inset-top, 24px) 24px env(safe-area-inset-bottom, 24px)",
        overflow: "hidden",
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(201,116,138,0.12) 0%, rgba(124,111,168,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <FloatingParticles count={20} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 480, width: "100%" }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(201,116,138,0.85)",
            marginBottom: 20,
          }}
        >
          Hi Priya... ❤️
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.9 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.2rem, 9vw, 4.5rem)",
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: "#f5f0eb",
            marginBottom: 28,
          }}
        >
          I made something
          <br />
          <em style={{ color: "#c9748a" }}>for you.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.3 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 3vw, 1.1rem)",
            lineHeight: 1.8,
            color: "rgba(245,240,235,0.65)",
            maxWidth: 360,
            margin: "0 auto 48px",
          }}
        >
          I know things haven't been okay <br />between us.
          <br />
          <br />
          Ellathayum Mudichukalam nu sonnan...<br />But mudiyala 😔
          <br />
          <br />
          So instead of sending you another long message...
          <br />
          <br />
          I made you something.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.7 }}
        >
          <motion.button
            onClick={scrollToNext}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 32px rgba(201,116,138,0.55), 0 0 64px rgba(201,116,138,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 32px",
              background: "linear-gradient(135deg, rgba(201,116,138,0.2), rgba(124,111,168,0.15))",
              border: "1px solid rgba(201,116,138,0.45)",
              borderRadius: 50,
              color: "#f5f0eb",
              fontSize: "clamp(0.9rem, 3vw, 1rem)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              letterSpacing: "0.04em",
              cursor: "pointer",
              minWidth: 140,
              minHeight: 52,
              boxShadow: "0 0 20px rgba(201,116,138,0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            Enter
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 28px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(201,116,138,0.6), transparent)",
            margin: "0 auto",
          }}
        />
      </motion.div>
    </section>
  );
}

