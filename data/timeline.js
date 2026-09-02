// ============================================================
// TIMELINE CONFIG
// Edit this file to update the "Our Story" section.
// Replace [ADD ...] placeholders with your actual content.
// ============================================================

import { timelinePhotos } from "./photos.js";

export const timelineEntries = [
  {
    id: "beginning",
    chapter: "The Beginning",
    title: "[ADD TITLE — e.g. 'When it all started']",
    date: "[ADD DATE]",
    caption: "[ADD MEMORY — describe this moment in 1-2 sentences]",
    photo: timelinePhotos[0]?.src ?? "",
  },
  {
    id: "first-memory",
    chapter: "Our First Memory",
    title: "[ADD TITLE — e.g. 'That one day']",
    date: "[ADD DATE]",
    caption: "[ADD MEMORY]",
    photo: timelinePhotos[1]?.src ?? "",
  },
  {
    id: "crazy-days",
    chapter: "The Crazy Days",
    title: "[ADD TITLE — e.g. 'When we were just having fun']",
    date: "[ADD DATE]",
    caption: "[ADD MEMORY]",
    photo: timelinePhotos[2]?.src ?? "",
  },
  {
    id: "little-moments",
    chapter: "The Little Moments",
    title: "[ADD TITLE — e.g. 'Random Tuesday']",
    date: "[ADD DATE]",
    caption: "[ADD MEMORY]",
    photo: timelinePhotos[3]?.src ?? "",
  },
  {
    id: "favorite-memories",
    chapter: "Our Favorite Memories",
    title: "[ADD TITLE — e.g. 'One of my favorite days with you']",
    date: "[ADD DATE]",
    caption: "[ADD MEMORY]",
    photo: timelinePhotos[4]?.src ?? "",
  },
  {
    id: "today",
    chapter: "Today",
    title: "[ADD TITLE — e.g. 'Right now']",
    date: "[ADD DATE]",
    caption: "[ADD MEMORY — something about where you are now, what you feel]",
    photo: timelinePhotos[5]?.src ?? "",
  },
];
