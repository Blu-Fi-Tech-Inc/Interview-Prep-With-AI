import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interview-Prep-With-AI",
  openGraph: {
    title: "Interview-Prep-With-AI",
    description:
      "PrepMe is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "https://www.canva.com/design/DAFpOt5MYDM/fyd8tA1hcSsxHMtVLiI1kg/view?mode=prototype",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interview-Prep-With-AI",
    description:
    "PrepMe is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://www.canva.com/design/DAFpOt5MYDM/fyd8tA1hcSsxHMtVLiI1kg/view?mode=prototype"],
    creator: "@blufitechnology",
  },
  metadataBase: new URL("https://prepme.blufitech.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
