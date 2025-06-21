import {
  Crimson_Text,
  Source_Sans_3,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google";

// Serif font for headings - intellectual authority with warm character
export const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Display serif for hero sections and major headings - sophisticated elegance
export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Sans-serif for body text - clean, readable, humanistic
export const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Monospace for code and technical elements
export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Legacy exports for backward compatibility
export const geistSans = sourceSans;
export const geistMono = jetbrainsMono;
