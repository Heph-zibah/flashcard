import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlashLearn | Interactive Flashcard Learning App",
  description:
    "FlashLearn helps you study smarter with interactive digital flashcards. Add, flip, and track learned flashcards for efficient learning. Perfect for students and lifelong learners.",
  manifest: "/manifest.json",
  themeColor: "#0f172a",
  openGraph: {
    title: "FlashLearn | Interactive Flashcard Learning App",
    description:
      "FlashLearn helps you study smarter with interactive digital flashcards. Add, flip, and track learned flashcards for efficient learning. Perfect for students and lifelong learners.",
    url: "https://flashcard-oadaramola.vercel.app/",
    siteName: "FlashLearn",
    type: "website",
    images: [
      {
        url: "/flashcard_form.PNG",
        width: 1200,
        height: 630,
        alt: "FlashLearn - Interactive Flashcard App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlashLearn | Interactive Flashcard Learning App",
    description:
      "FlashLearn helps you study smarter with interactive digital flashcards. Add, flip, and track learned flashcards for efficient learning.",
    images: ["/og-image.png"],
    site: "@oadaramola10",
    creator: "@oadaramola10",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },
  keywords: [
    "flashcards",
    "study app",
    "digital learning",
    "interactive learning",
    "e-learning",
    "study tools",
    "learn online",
    "FlashLearn",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
