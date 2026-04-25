import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Renan Mourão Advocacia | Assessoria Jurídica Especializada",
  description:
    "Escritório de advocacia especializado em Adjudicação Compulsória, Recuperação de Contas Digitais, Revisão de Juros Abusivos e Divórcio Extrajudicial. Atendimento personalizado e resultados.",
  keywords: [
    "advogado",
    "advocacia",
    "Renan Mourão",
    "direito civil",
    "adjudicação compulsória",
    "recuperação de conta",
    "juros abusivos",
    "divórcio extrajudicial",
  ],
  authors: [{ name: "Renan Mourão" }],
  openGraph: {
    title: "Renan Mourão Advocacia",
    description:
      "Assessoria jurídica especializada. Transparência, compromisso e resultados.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${newsreader.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
