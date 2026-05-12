import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaivei Studio — Produção Audiovisual",
  description:
    "Produção audiovisual em Lisboa. Filmagem, fotografia e cobertura de eventos — concertos, artistas e corporativos. Cada frame com intenção.",
  keywords:
    "produção audiovisual lisboa, filmagem eventos, fotografia concertos, cobertura audiovisual, video corporativo portugal",
  openGraph: {
    title: "Vaivei Studio — Produção Audiovisual",
    description: "Filmagem, fotografia e cobertura de eventos em Lisboa e Portugal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-base text-t1">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
