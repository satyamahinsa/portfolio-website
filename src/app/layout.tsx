import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Serif, Poppins } from "next/font/google";
import { profile } from "@/content/profile";
import { SmoothScroll } from "@/components/SmoothScroll";
import { themeInitScript } from "@/components/theme";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.fullName} — ${profile.role}`,
    template: `%s — ${profile.shortName}`,
  },
  description: profile.tagline,
  openGraph: {
    title: `${profile.fullName} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#07080b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable} ${instrumentSerif.variable} overflow-x-clip antialiased`}
    >
      <head>
        {/* Sets light/dark before first paint so there is no theme flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh overflow-x-clip bg-bg font-sans text-fg">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
