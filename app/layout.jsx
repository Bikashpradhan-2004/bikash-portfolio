import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bikash | Portfolio",
  description:
    "Welcome to my portfolio! I'm Bikash P, a passionate developer with a strong foundation in mathematics and computer applications. Explore my projects, skills, and experience in web development, problem-solving, and technology.",
  openGraph: {
    title: "Bikash | Portfolio",
    description:
      "Showcasing my projects, technical skills, and experience in web development and software engineering.",
    url: "https://bikashcodes.online",
    siteName: "Bikash Portfolio",
    images: [
      {
        url: "https://www.bikashcodes.online/images/photo.png",
        width: 1200,
        height: 630,
        alt: "Bikash Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-6xl w-11/12 mx-auto">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
