import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Modena Call Service | Service Kompor Resmi ke Rumah",
  description:
    "Layanan Modena Call Service untuk perbaikan, perawatan, bongkar pasang, dan penggantian suku cadang kompor Modena. Teknisi profesional datang langsung ke rumah Anda.",
  keywords: [
    "modena call service",
    "service kompor modena",
    "service kompor freestanding modena",
    "service kompor tanam modena",
    "teknisi kompor modena",
    "perbaikan kompor gas modena",
    "service kompor jakarta",
    "service kompor surabaya",
  ],
  authors: [{ name: "Modena Call Service" }],
  creator: "Modena Call Service",
  metadataBase: new URL("https://modenacallservice.com"),
  openGraph: {
    title: "Modena Call Service | Service Kompor ke Rumah",
    description:
      "Layanan resmi Modena Call Service untuk perbaikan dan perawatan kompor gas Modena. Teknisi berpengalaman, cepat, dan bergaransi.",
    url: "https://modenacallservice.com",
    siteName: "Modena Call Service",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600490036275-35f5f1656861?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Modena Call Service - Service Kompor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modena Call Service | Service Kompor Gas",
    description:
      "Perbaikan & perawatan kompor Modena langsung ke rumah. Aman, cepat, dan profesional.",
    images: [
      "https://images.unsplash.com/photo-1600490036275-35f5f1656861?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">
            <Navbar />
            <main>{children}</main>
          </div>

          {/* MOBILE DRAWER */}
          <div className="drawer-side z-40">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu bg-black text-white min-h-full w-80 p-4">
              <li>
                <Link href="#tentang">Tentang Kami</Link>
              </li>
              <li>
                <Link href="#harga">Layanan</Link>
              </li>
              <li>
                <Link href="#galeri">Galeri</Link>
              </li>
              <li>
                <Link href="#testimoni">Testimoni</Link>
              </li>
              <li className="mt-4">
                <Link
                  href="https://wa.me/6288290685638"
                  target="_blank"
                  className="btn bg-white text-black font-semibold border-0 shadow-none rounded-full"
                >
                  Hubungi Teknisi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
