"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BeforeYouScroll() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="before-you-scroll"
      ref={ref}
      style={{
        position: "relative",
        minHeight: "80svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "100px 24px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,111,168,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 560, width: "100%" }}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.75rem, 2.2vw, 0.85rem)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(245,240,235,0.3)",
            marginBottom: 32,
          }}
        >
          Before you scroll...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.3 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 5.5vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.4,
            color: "rgba(245,240,235,0.88)",
            marginBottom: 40,
            fontStyle: "italic",
          }}
        >
          &ldquo;Intha 4 to 5 days ahh ennanamo mind la oduthu...
          <br />
          Normal ahh irukra maari nadika mudiyala... yaarkitayume, ellarum easy ahh identify pannidraanga.
          <br />
          <br />
          Etha eduthalum, enna pannalum un nyabagam vanthute irukku...
          <br />
          En life la ye naa adhigama nesichachu unna matum than...nee epdi aanalum, enna pannalum veruka mudiyala.
          <br />
          <br />
          Yen! enaa you're mine. but
          <br />
          <br />
          Ennaal mudintha varai un vaazhkayil irunthu tholaivil iruka muyarchikiren
          <br />
          <br />
          Unnai thedi varum antha pazhakathai mella vituvidugiren
          <br />
          <br />
          Ini unnai paarka vendum endra aasaiyai adakikolgiren
          <br />
          <br />
          Ithai ellam seivathaal enaku un mel kaadhal illai endru matum ennividathe!
          <br />
          <br />
          Yen irupaal nee varunthivida koodathu enbartharkaaga matume...
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.7 }}
          style={{
            width: 40,
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(201,116,138,0.5), transparent)",
            margin: "0 auto 40px",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 1.0 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.3rem, 4.5vw, 2.2rem)",
            fontWeight: 500,
            color: "#c9748a",
            textShadow:
              "0 0 24px rgba(201,116,138,0.7), 0 0 48px rgba(201,116,138,0.3)",
            letterSpacing: "0.01em",
          }}
        >
         Thanks! you made my life colorful for some years...
        </motion.p>
      </div>
    </section>
  );
}

