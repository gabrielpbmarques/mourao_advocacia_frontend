import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Renan Mourão Advocacia | Assessoria Jurídica Especializada",
    short_name: "Renan Mourão Adv.",
    description:
      "Escritório de advocacia especializado em Adjudicação Compulsória, Recuperação de Contas Digitais, Revisão de Juros Abusivos e Divórcio Extrajudicial.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0F3460",
    orientation: "portrait-primary",
    categories: ["business", "legal"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
