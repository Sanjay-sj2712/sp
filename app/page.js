import StarField from "@/components/StarField.js";
import Hero from "@/components/Hero.js";
import BeforeYouScroll from "@/components/BeforeYouScroll.js";
import OurStory from "@/components/OurStory.js";
import ThingsShouldHaveSaid from "@/components/ThingsShouldHaveSaid.js";
import ThingsILoveAboutYou from "@/components/ThingsILoveAboutYou.js";
import PhotoGallery from "@/components/PhotoGallery.js";
import LoveLetter from "@/components/LoveLetter.js";
import FinalSurprise from "@/components/FinalSurprise.js";
import MusicPlayer from "@/components/MusicPlayer.js";
import FloatingNav from "@/components/FloatingNav.js";
import Footer from "@/components/Footer.js";

export default function Page() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100svh",
        background: "#050810",
        overflowX: "hidden",
      }}
    >
      {/* Global star field — fixed behind everything */}
      <StarField count={140} />

      {/* Fixed overlays */}
      <MusicPlayer />
      <FloatingNav />

      {/* Page sections */}
      <Hero />
      <BeforeYouScroll />
      <OurStory />
      {/* <ThingsShouldHaveSaid />
      <ThingsILoveAboutYou /> */}
      {/* <PhotoGallery /> */}
      <LoveLetter />
      <FinalSurprise />
      <Footer />
    </main>
  );
}

