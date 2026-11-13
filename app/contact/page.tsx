import { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

const SITE_URL = "https://flixtor.plus";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Contact Us - FlixTor",
  description: "Get in touch with the FlixTor team. We'd love to hear from you!",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us - FlixTor",
    description: "Get in touch with the FlixTor team. We'd love to hear from you!",
    url: `${SITE_URL}/contact`,
    siteName: "FlixTor",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact FlixTor",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - FlixTor",
    description: "Get in touch with the FlixTor team. We'd love to hear from you!",
    images: [`${SITE_URL}/img/og-image.jpg`],
    site: "@flixtor",
    creator: "@flixtor",
  },
};

export default function Page() {
  return <ContactPage />;
}