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

const SITE_URL = "https://renanmouraoadvocacia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Renan Mourão Advocacia | Assessoria Jurídica Especializada",
    template: "%s | Renan Mourão Advocacia",
  },
  description:
    "Escritório de advocacia especializado em Adjudicação Compulsória, Recuperação de Contas Digitais, Revisão de Juros Abusivos e Divórcio Extrajudicial. Atendimento personalizado e resultados.",
  keywords: [
    "advogado",
    "advocacia",
    "Renan Mourão",
    "escritório de advocacia",
    "advogado online",
    "direito civil",
    "direito digital",
    "direito bancário",
    "direito de família",
    "adjudicação compulsória",
    "regularização de imóvel",
    "recuperação de conta Instagram",
    "recuperação de conta TikTok",
    "conta hackeada",
    "juros abusivos",
    "revisão de contrato bancário",
    "divórcio extrajudicial",
    "divórcio em cartório",
    "assessoria jurídica",
    "consultoria jurídica",
  ],
  authors: [{ name: "Renan Mourão", url: SITE_URL }],
  creator: "Renan Mourão Advocacia",
  publisher: "Renan Mourão Advocacia",

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Renan Mourão Advocacia",
    title: "Renan Mourão Advocacia | Assessoria Jurídica Especializada",
    description:
      "Soluções jurídicas com transparência e compromisso. Especialistas em Adjudicação Compulsória, Recuperação de Contas, Juros Abusivos e Divórcio Extrajudicial.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Renan Mourão Advocacia",
    description:
      "Assessoria jurídica especializada. Transparência, compromisso e resultados.",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Legal Services",
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
