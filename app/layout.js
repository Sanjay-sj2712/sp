import "./globals.css";
import MuiProvider from "@/components/MuiProvider.js";

export const metadata = {
  title: "For You ❤️",
  description: "A little corner of the internet made with love.",
  openGraph: {
    title: "For You ❤️",
    description: "A little corner of the internet made with love.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#050810" />
      </head>
      <body>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}
