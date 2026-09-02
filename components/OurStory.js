"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { timelineEntries } from "@/data/timeline.js";

export default function OurStory() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section
      id="our-story"
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
            "radial-gradient(ellipse 70% 40% at 50% 20%, rgba(201,116,138,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ textAlign: "center", marginBottom: 72, position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(201,116,138,0.7)",
            marginBottom: 12,
          }}
        >
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 7vw, 3.8rem)",
            fontWeight: 500,
            lineHeight: 1.15,
            color: "#f5f0eb",
            marginBottom: 16,
          }}
        >
          Ithalam enaku thonuna vishayam,<br />
          <em style={{ color: "#c9748a" }}>Thappa or correct ah nu la theriyala.</em>
        </h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
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
          &ldquo;Unaku ethume theriyathaanu nee epovum kepa
          <br />
          Unmaya ve enaku theriyala, oru relationship la epdi irukanumnu yarum solli tharathu illa          <br />
          <br />
          Naa entha ponnayum pathathu illa avanga epdi nu palagi purinjukitathu illa...enaku therinja ore ponnu yen priya than, naa unna pathuthana intha 8 years vazhanthan
          <br />
          <br />
          Enna porutha vara yen priya enakaga enna venalum pannuva, romba caring ahh irupa, romba understanding ahh irupa ipdi than ithana varushama irunthan<br />
          <br />
          Enaku epdi irukum na ipdi pata orunthiya romba nalla pathukanum nu irukum...
          <br />
          <br />
          Ipo thidirnu un expectation ivlo adhigama aagucha illa ivlo naal nee kaatatha vishayatha ipo kaatrathaalaya theriyala...naa enna pannalum unaku satisfied ahh illa          <br />
          <br />
          <br />
          Enoda expectations ku complete opposite ahh irukrathunala ennala handle panna mudiyala          <br />
          <br />
          Nee sonna un friends sonnathellam correctu, enaku than puriyala nu...but ellar life um ore maari irukathula...ellaru love um ore maari irukathula...cinema, reels, friends ivanaga life la love epdi iruko apdi than irukanumnu illala...Love ovoruthanga character ahh vachuthan play aagum          <br />
          <br />
          <br />
          Ennala ellathayum sagichaka mudiyum, ellathayum meeri kadaisi vara nikka mudiyum...yaar enna sonnalum enna pesunalum...ennala engeyum unna vitu kudukaama iruka mudiyum...enna nadanthalum oruthavangalukaga ennala epovum iruka mudiyum, intha purithal and anbu than enna porutha vara periya love, intha maari vishayam ellarutayum irukathu...
          <br />
          <br />
          Life epovume namma ethirpakra maari irukathu..ithu matum illa, itha vida naraiya face pannanum, odanum, ellathayum face pannitu than love um pannanum...happy ah vum irukanum...almost most of the lives ipdi than iruku.
          <br/>
          <br/>
          Intha maari thana naa 8 varushama irunthan apo pudicha enna ipo pudikama poiducha?...Apo accept pannan epovume panna mudiyathu nu solluva crtu than, but enna avlo pudicha naala than athalam un kannuku theriyala, Enaku theriyum nee naraiya maaritanu athuketha maari naanum maara start pannirukan but you can't accept that pace!
          <br />
          <br />
          Yen kooda irunthaa nee happy ah iruka mudiyathunu ivlo yosikrala...yen kooda happy ahh iruntha moments la unnaku nyabagam varalaya...illa nee happy ahh ve illanu feel panriya...
          <br />
          <br />
          <br />
          <em style={{ color: "#c9748a" }}>Unmaya yosichi sollu...does my absence affect you?</em>
          <br />
          Enaa ennala inum accept pannika mudiyala 8 years ah naa aasapata, kanavu kanda yen life enaku illanu nenachale life la thothutom nu thonuthu.
          <br />
          <br />
          I think yennoda old life enaku thirumba vantha maari iruku...back to normal...enaa..nee solluvala, oru level mela feelings adhigamachuna...azhuga varathu smile than varum nu, apdi than iruku.

        </motion.h2>
        <p
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
            color: "rgba(245,240,235,0.5)",
            fontStyle: "italic",
          }}
        >
        </p>
      </motion.div>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          maxWidth: 700,
          margin: "0 auto",
          zIndex: 1,
        }}
      >
        {/* Vertical line — hidden on mobile, shown on wider screens */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            background:
              "linear-gradient(to bottom, transparent, rgba(201,116,138,0.3) 10%, rgba(201,116,138,0.3) 90%, transparent)",
            transform: "translateX(-50%)",
            display: "none",
          }}
          className="timeline-line"
        />

        <style>{`
          @media (min-width: 640px) {
            .timeline-line { display: block !important; }
          }
          @media (min-width: 640px) {
            .timeline-card:nth-child(even) .timeline-inner {
              margin-left: auto;
            }
            .timeline-card:nth-child(odd) .timeline-inner {
              margin-right: auto;
            }
          }
        `}</style>

        {/* {timelineEntries.map((entry, i) => (
          <TimelineCard key={entry.id} entry={entry} index={i} />
        ))} */}
      </div>
    </section>
  );
}

// function TimelineCard({ entry, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-8%" });
//   const isRight = index % 2 === 1;

//   return (
//     <motion.div
//       ref={ref}
//       className="timeline-card"
//       initial={{ opacity: 0, y: 50, scale: 0.97 }}
//       animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//       transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
//       style={{ marginBottom: 60, position: "relative" }}
//     >
//       {/* Chapter label */}
//       <p
//         style={{
//           fontFamily: "'Inter', sans-serif",
//           fontSize: "0.72rem",
//           letterSpacing: "0.16em",
//           textTransform: "uppercase",
//           color: "rgba(201,116,138,0.6)",
//           marginBottom: 12,
//           textAlign: "center",
//         }}
//       >
//         {entry.chapter}
//       </p>

//       <div
//         className="timeline-inner"
//         style={{
//           background: "rgba(255,255,255,0.04)",
//           backdropFilter: "blur(12px)",
//           border: "1px solid rgba(255,255,255,0.07)",
//           borderRadius: 20,
//           overflow: "hidden",
//           maxWidth: "100%",
//           transition: "border-color 0.3s ease",
//         }}
//       >
//         {/* Photo */}
//         {entry.photo && (
//           <div
//             style={{
//               position: "relative",
//               width: "100%",
//               height: "clamp(200px, 55vw, 340px)",
//               overflow: "hidden",
//             }}
//           >
//             <Image
//               src={entry.photo}
//               alt={entry.title}
//               fill
//               style={{
//                 objectFit: "cover",
//                 transition: "transform 0.6s ease",
//               }}
//               sizes="(max-width: 640px) 100vw, 50vw"
//               className="timeline-img"
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 background:
//                   "linear-gradient(to top, rgba(5,8,16,0.7) 0%, transparent 50%)",
//               }}
//             />
//           </div>
//         )}

//         {/* Text */}
//         <div style={{ padding: "20px 24px 24px" }}>
//           <p
//             style={{
//               fontFamily: "'Inter', sans-serif",
//               fontSize: "0.75rem",
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//               color: "rgba(201,116,138,0.6)",
//               marginBottom: 8,
//             }}
//           >
//             {entry.date}
//           </p>
//           <h3
//             style={{
//               fontFamily: "'Playfair Display', Georgia, serif",
//               fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
//               fontWeight: 500,
//               color: "#f5f0eb",
//               marginBottom: 10,
//               lineHeight: 1.3,
//             }}
//           >
//             {entry.title}
//           </h3>
//           <p
//             style={{
//               fontSize: "clamp(0.88rem, 2.5vw, 0.95rem)",
//               color: "rgba(245,240,235,0.6)",
//               lineHeight: 1.7,
//             }}
//           >
//             {entry.caption}
//           </p>
//         </div>
//       </div>

//       <style>{`
//         .timeline-img:hover {
//           transform: scale(1.03);
//         }
//         .timeline-inner:hover {
//           border-color: rgba(201,116,138,0.25) !important;
//         }
//       `}</style>
//     </motion.div>
//   );
// }
