import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});
const basePath = process.env.NEXT_PUBLIC_BASEPATH || "";
const isGithubPages = process.env.NEXT_PUBLIC_ENV === "GH_PAGE";

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "We invite you to celebrate our special day",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
  metadataBase: isGithubPages
    ? new URL(`https://yourusername.github.io${basePath}`)
    : new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${basePath}/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/favicon/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/favicon/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${basePath}/favicon/safari-pinned-tab.svg`}
          color="#000000"
        />
        <link rel="shortcut icon" href={`${basePath}/favicon/favicon.ico`} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content={`${basePath}/favicon/browserconfig.xml`}
        />
        <meta name="theme-color" content="#000" />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${basePath}/feed.xml`}
        />
      </head>
      <body
        className={cn(
          inter.className,
          "dark:bg-slate-900 dark:text-slate-400",
          greatVibes.variable
        )}
      >
        {/* <ThemeSwitcher /> */}
        <div className="min-h-screen">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
