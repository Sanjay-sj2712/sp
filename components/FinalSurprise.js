"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, Heart } from "lucide-react";
import { surprisePhotos } from "@/data/photos.js";
import FloatingParticles from "./FloatingParticles";

// Each message can have its own custom duration (in milliseconds).
// You can adjust the "duration" for each message individually!
const messages = [
  {
    text: "Paathiya..Namma evlo happy ahh irunthrukom nu",
    duration: 5000,
  },
  {
    text: "Unaku vena naa pudikathavana aagirukalam, enaku nee enaku epovum enaku pudicha angel than",
    duration: 11000,
  },
  {
    text: "If I could go back and change every moment that hurt you...I would",
    duration: 11000,
  },
  {
    text: "Unna ennala epovume maraka mudiyathu...un ninaivodu vaazha palaga than mudiyum, amma than unna rendu naala ketutu irunthanga..unta pesanumnu",
    duration: 13000,
  },
  {
    text: "Ipo kooda enaku yen koodave irukriya nu kekanum pola iruku...but bayamaruku unna handle panna theriyala and naa ethume pannama selfish ahh yosikranu thonuthu",
    duration: 13000,
  },
  {
    text: "Naa selfish than, ennala mulusa laa mara mudiyathu but unnakaga kandippa naraiya mathipan but athuvum odane mudiyathu, konja konjama change pannikran",
    duration: 13000,
  },
  {
    text: "And namma life la odite than irupom, aana epola time iruko apola namma happy ahh irukalam, after marriage namma kandipa happy ahh irupom, enaku antha nambika iruku",
    duration: 13000,
  },
  {
    text: "Naa un petha parents um illa, nee petha kolanthayum illa epdi irunthalum accept panna...nee choose panra partner so...",
    duration: 11000,
  },
  {
    text: "Nalla Yosichu Sollu...Ellame un istam than.",
    duration: 9000,
  },
];

const getMessageText = (msg) => (typeof msg === "string" ? msg : msg?.text || "");
const getMessageDuration = (msg) =>
  typeof msg === "object" && msg?.duration ? msg.duration : 6000;

export default function FinalSurprise() {
  const [stage, setStage] = useState("idle");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [confetti, setConfetti] = useState([]);
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Slideshow (photo timing kept intact)
  useEffect(() => {
    if (stage !== "slideshow") return;
    const slides = surprisePhotos.length;
    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      if (i >= slides) {
        clearInterval(intervalRef.current);
        setStage("message");
      } else {
        setPhotoIndex(i);
      }
    }, 2300);
    return () => clearInterval(intervalRef.current);
  }, [stage]);

  // Message sequencing with individual customizable duration per message
  useEffect(() => {
    if (stage !== "message") return;
    if (!messages || messages.length === 0) {
      setStage("question");
      return;
    }

    let timerId;
    let currentIndex = 0;

    const scheduleNext = () => {
      const duration = getMessageDuration(messages[currentIndex]);
      timerId = setTimeout(() => {
        if (currentIndex < messages.length - 1) {
          currentIndex++;
          setMsgIndex(currentIndex);
          scheduleNext();
        } else {
          setStage("question");
        }
      }, duration);
    };

    scheduleNext();

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [stage]);

  const handleYes = () => {
    setStage("yes");
    const pieces = Array.from({ length: 28 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      hue: Math.random() > 0.5 ? 340 : 280,
      id: i,
    }));
    setConfetti(pieces);

    // Redirect to WhatsApp after 5 seconds with prefilled message
    setTimeout(() => {
      const phoneNumber = "917397541499";
      const message = encodeURIComponent("are you sure you want to start it again");
      window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }, 5000);
  };

  const handleMaybe = async () => {
    setStage("maybe");

    try {
      await fetch("/api/notify", {
        method: "POST",
      });
    } catch (error) {
      console.error("Notification failed:", error);
    }
  };

  const open = () => {
    // Play song.mp3
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/music/song.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.6;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.log("Audio play error:", err));
    } catch (e) {
      console.log("Audio initialize error:", e);
    }

    setPhotoIndex(0);
    setMsgIndex(0);
    setStage("opening");
    // Opening screen stays for 4 seconds
    setTimeout(() => setStage("slideshow"), 7000);
  };

  const close = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setStage("idle");
    setConfetti([]);
  };

  return (
    <>
      {/* Section */}
      <section
        id="final-surprise"
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
        {/* BG */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,116,138,0.1) 0%, rgba(124,111,168,0.06) 45%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          style={{ position: "relative", zIndex: 1, maxWidth: 480, width: "100%" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(245,240,235,0.3)",
              marginBottom: 20,
            }}
          >
            Ithuku mela naa pesi bore <br />adika virumbala          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 6.5vw, 3rem)",
              fontWeight: 500,
              color: "#f5f0eb",
              marginBottom: 40,
              lineHeight: 1.3,
            }}
          >
            I saved something
            <br />
            <em style={{ color: "#c9748a" }}>special for us.</em>
          </h2>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(201,116,138,0.5), 0 0 80px rgba(201,116,138,0.2)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={open}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 36px",
              background:
                "linear-gradient(135deg, rgba(201,116,138,0.25), rgba(124,111,168,0.2))",
              border: "1px solid rgba(201,116,138,0.5)",
              borderRadius: 50,
              color: "#f5f0eb",
              fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              letterSpacing: "0.04em",
              cursor: "pointer",
              minHeight: 56,
              minWidth: 160,
              boxShadow: "0 0 24px rgba(201,116,138,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            Open it
            <Heart size={16} style={{ fill: "#c9748a", color: "#c9748a" }} />
          </motion.button>
        </motion.div>
      </section>

      {/* Overlay */}
      <AnimatePresence>
        {stage !== "idle" && (
          <motion.div
            key="surprise-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10000,
              background: "#050810",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              overflow: "hidden",
            }}
          >
            <FloatingParticles count={24} />

            {/* BG glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,116,138,0.1) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {/* Close button */}
            <button
              onClick={close}
              style={{
                position: "absolute",
                top: "env(safe-area-inset-top, 16px)",
                right: 20,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#f5f0eb",
                zIndex: 2,
              }}
            >
              <X size={18} />
            </button>

            {/* Opening */}
            {stage === "opening" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ zIndex: 1, textAlign: "center" }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.3rem, 5vw, 2rem)",
                    color: "rgba(245,240,235,0.7)",
                    fontStyle: "italic",
                  }}
                >
                  One moment...enna porutha vara namma romba happy ah irunthrukom...here are they
                </p>
              </motion.div>
            )}

            {/* Slideshow */}
            {stage === "slideshow" && surprisePhotos.length > 0 && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={photoIndex}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 480,
                    maxHeight: "75svh",
                    borderRadius: 20,
                    overflow: "hidden",
                    aspectRatio: "3/4",
                    zIndex: 1,
                    boxShadow: "0 0 60px rgba(201,116,138,0.2)",
                  }}
                >
                  <Image
                    src={surprisePhotos[photoIndex].src}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                    priority
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(5,8,16,0.4) 0%, transparent 50%)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            )}

            {/* Messages */}
            {(stage === "message" || stage === "question") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ zIndex: 1, textAlign: "center", maxWidth: 500 }}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={msgIndex}
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.9 }}
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(1.2rem, 5vw, 1.9rem)",
                      fontWeight: 500,
                      lineHeight: 1.45,
                      color: msgIndex === 1 ? "#e8a0b0" : "rgba(245,240,235,0.9)",
                      textShadow:
                        msgIndex === 1
                          ? "0 0 24px rgba(201,116,138,0.6)"
                          : "none",
                      fontStyle: "italic",
                    }}
                  >
                    {getMessageText(messages[msgIndex])}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            )}

            {/* Question */}
            {stage === "question" && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                style={{ zIndex: 1, textAlign: "center", marginTop: 48, maxWidth: 420 }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.4rem, 5.5vw, 2.2rem)",
                    fontWeight: 500,
                    color: "#f5f0eb",
                    marginBottom: 40,
                  }}
                >
                  Can we start again? or Can we have a break and start again?
                </p>
                <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleYes}
                    style={{
                      padding: "14px 32px",
                      background: "linear-gradient(135deg, rgba(201,116,138,0.3), rgba(232,160,176,0.2))",
                      border: "1px solid rgba(201,116,138,0.5)",
                      borderRadius: 50,
                      color: "#f5f0eb",
                      fontSize: "clamp(0.9rem, 3vw, 1rem)",
                      fontFamily: "'Inter', sans-serif",
                      cursor: "pointer",
                      minHeight: 52,
                      minWidth: 120,
                      boxShadow: "0 0 20px rgba(201,116,138,0.25)",
                    }}
                  >
                    Yes ❤️
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleMaybe}
                    style={{
                      padding: "14px 28px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 50,
                      color: "rgba(245,240,235,0.6)",
                      fontSize: "clamp(0.9rem, 3vw, 1rem)",
                      fontFamily: "'Inter', sans-serif",
                      cursor: "pointer",
                      minHeight: 52,
                      minWidth: 120,
                    }}
                  >
                    Venam...
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Yes response */}
            {stage === "yes" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{ zIndex: 1, textAlign: "center", maxWidth: 480 }}
              >
                {/* Confetti hearts */}
                {confetti.map((c) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 1, scale: 0.5, y: 0 }}
                    animate={{ opacity: 0, scale: 1.5, y: -120 }}
                    transition={{ duration: 2.5, delay: Math.random() * 0.8 }}
                    style={{
                      position: "absolute",
                      left: `${c.x}%`,
                      top: `${c.y}%`,
                      fontSize: "1.2rem",
                      pointerEvents: "none",
                    }}
                  >
                    ❤️
                  </motion.div>
                ))}
                <Heart
                  size={40}
                  style={{
                    color: "#c9748a",
                    fill: "rgba(201,116,138,0.5)",
                    marginBottom: 24,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.3rem, 5vw, 2rem)",
                    fontWeight: 500,
                    color: "#f5f0eb",
                    lineHeight: 1.5,
                    fontStyle: "italic",
                    textShadow: "0 0 30px rgba(201,116,138,0.5)",
                  }}
                >
                  Then let&apos;s make the next chapter
                  <br />
                  our favorite one. ❤️
                </p>
              </motion.div>
            )}

            {/* Maybe response */}
            {stage === "maybe" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                style={{ zIndex: 1, textAlign: "center", maxWidth: 400 }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.2rem, 4.5vw, 1.7rem)",
                    fontWeight: 400,
                    color: "rgba(245,240,235,0.85)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  That&apos;s okay ❤️
                  <br />
                  Take care : )
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

