"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryPhotos } from "@/data/photos.js";

export default function PhotoGallery() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
  }, [lightboxIndex]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryPhotos.length);
  }, [lightboxIndex]);

  return (
    <section
      id="gallery"
      style={{
        position: "relative",
        padding: "100px 16px",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(124,111,168,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: 56, position: "relative", zIndex: 1 }}
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
          Section V
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.8rem, 6.5vw, 3.5rem)",
            fontWeight: 500,
            color: "#f5f0eb",
            marginBottom: 14,
            lineHeight: 1.2,
          }}
        >
          Little Moments,
          <br />
          <em style={{ color: "#c9748a" }}>Big Memories</em>
        </h2>
        <p
          style={{
            fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)",
            color: "rgba(245,240,235,0.4)",
            fontStyle: "italic",
          }}
        >
          Tap any photo to see it up close.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          margin: "0 auto",
          columns: "2 180px",
          columnGap: 10,
        }}
      >
        {galleryPhotos.map((photo, i) => (
          <GalleryItem
            key={photo.src}
            photo={photo}
            index={i}
            onClick={() => openLightbox(i)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(5,8,16,0.95)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: "env(safe-area-inset-top, 16px)",
                right: 20,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#f5f0eb",
                zIndex: 1,
              }}
            >
              <X size={20} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 700,
                maxHeight: "80svh",
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: galleryPhotos[lightboxIndex].aspect === "portrait" ? "3/4" : galleryPhotos[lightboxIndex].aspect === "landscape" ? "4/3" : "1/1",
              }}
            >
              <Image
                src={galleryPhotos[lightboxIndex].src}
                alt={galleryPhotos[lightboxIndex].caption}
                fill
                style={{ objectFit: "cover" }}
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            {galleryPhotos[lightboxIndex].caption !== "[ADD CAPTION]" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                style={{
                  marginTop: 16,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
                  fontStyle: "italic",
                  color: "rgba(245,240,235,0.6)",
                  textAlign: "center",
                  maxWidth: 500,
                }}
              >
                {galleryPhotos[lightboxIndex].caption}
              </motion.p>
            )}

            {/* Navigation */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                gap: 12,
                marginTop: 20,
              }}
            >
              <NavButton onClick={prev} icon={<ChevronLeft size={20} />} />
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  color: "rgba(245,240,235,0.3)",
                  letterSpacing: "0.05em",
                  minWidth: 60,
                  justifyContent: "center",
                }}
              >
                {lightboxIndex + 1} / {galleryPhotos.length}
              </span>
              <NavButton onClick={next} icon={<ChevronRight size={20} />} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function NavButton({ onClick, icon }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "50%",
        width: 44,
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#f5f0eb",
      }}
    >
      {icon}
    </button>
  );
}

function GalleryItem({ photo, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: (index % 6) * 0.06 }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      style={{
        display: "inline-block",
        width: "100%",
        marginBottom: 10,
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        breakInside: "avoid",
        aspectRatio:
          photo.aspect === "portrait"
            ? "3/4"
            : photo.aspect === "landscape"
            ? "4/3"
            : "1/1",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <Image
        src={photo.src}
        alt={photo.caption}
        fill
        style={{
          objectFit: "cover",
          transition: "transform 0.5s ease",
        }}
        sizes="(max-width: 640px) 50vw, 33vw"
        loading="lazy"
      />
      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(201,116,138,0.15)",
        }}
      />
    </motion.div>
  );
}

