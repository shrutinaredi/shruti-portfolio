import type { Metadata } from "next";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import TerminalEasterEgg from "@/components/TerminalEasterEgg";

export const metadata: Metadata = {
  title: "Shruti Agarwal — Software Engineer & ML Researcher",
  description:
    "CS grad student at UW-Madison. Building distributed systems at scale and pushing the boundaries of ML infrastructure.",
  openGraph: {
    title: "Shruti Agarwal — Software Engineer & ML Researcher",
    description:
      "CS grad student at UW-Madison. Prev: Mastercard SDE II. Open to Summer 2026 internships in ML systems & distributed computing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CursorFollower />
        <TerminalEasterEgg />
        {children}
      </body>
    </html>
  );
}
