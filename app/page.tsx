import Header from "@/app/components/Header";
import BackToTop from "@/app/components/BackToTop";
import SectionWrapper from "@/app/components/SectionWrapper";
import SectionHeader from "@/app/components/SectionHeader";
import ServiceCard from "@/app/components/ServiceCard";
import PrimaryButton from "@/app/components/PrimaryButton";
import TestimonialCard from "@/app/components/TestimonialCard";
import {
  IconHouseDocument,
  IconShieldPhone,
  IconPercentSlash,
  IconScaleRing,
} from "@/app/components/Icons";

const SERVICES = [
  {
    title: "Adjudicação Compulsória",
    description:
      "Propriedade definitiva de imóveis de forma segura para compradores com contrato quitado. Regularização e registro pleno junto ao cartório competente.",
    icon: <IconHouseDocument size={24} />,
  },
  {
    title: "Recuperação de Contas",
    description:
      "Restabelecimento de acesso a perfis bloqueados, invadidos ou desativados em Instagram, TikTok e outras plataformas via liminar judicial (Marco Civil da Internet).",
    icon: <IconShieldPhone size={24} />,
  },
  {
    title: "Juros Abusivos",
    description:
      "Revisão estratégica de contratos bancários, eliminação de cobranças indevidas e redução de saldo devedor. Defesa do consumidor contra práticas abusivas.",
    icon: <IconPercentSlash size={24} />,
  },
  {
    title: "Divórcio Extrajudicial",
    description:
      "Solução rápida, econômica e discreta em cartório para casais em consenso sem filhos menores. Assessoria completa de ponta a ponta.",
    icon: <IconScaleRing size={24} />,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Após anos tentando regularizar meu imóvel, o escritório resolveu tudo em poucos meses. Profissionais sérios e que realmente se importam com o cliente.",
    name: "Marcelo Andrade",
    role: "Empresário — Adjudicação Compulsória",
    stars: 5,
  },
  {
    quote:
      "Tive minha conta do Instagram hackeada e achei que tinha perdido tudo. A equipe do Dr. Renan conseguiu uma liminar rápida e recuperei meu perfil com todos os seguidores.",
    name: "Camila Ferreira",
    role: "Influenciadora Digital — Recuperação de Conta",
    stars: 5,
  },
  {
    quote:
      "Descobri que pagava quase o dobro de juros no meu financiamento. A revisão contratual reduziu minha parcela em 40%. Recomendo de olhos fechados.",
    name: "Roberto Mendes",
    role: "Servidor Público — Juros Abusivos",
    stars: 5,
  },
];

export default function Home() {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Renan Mourão Advocacia",
    alternateName: "Escritório Renan Mourão",
    url: "https://renanmouraoadvocacia.com.br",
    logo: "https://renanmouraoadvocacia.com.br/favicon.ico",
    description:
      "Escritório de advocacia especializado em Adjudicação Compulsória, Recuperação de Contas Digitais, Revisão de Juros Abusivos e Divórcio Extrajudicial.",
    telephone: "+55-45-99951-7673",
    email: "mourao.adv07@gmail.com",
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Dinheiro, Cartão, Pix, Transferência",
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    knowsLanguage: "pt-BR",
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Jurídicos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Adjudicação Compulsória",
            description:
              "Propriedade definitiva de imóveis de forma segura para compradores com contrato quitado. Regularização e registro pleno.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Recuperação de Contas Digitais",
            description:
              "Restabelecimento de acesso a perfis bloqueados, invadidos ou desativados via liminar judicial.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Revisão de Juros Abusivos",
            description:
              "Revisão estratégica de contratos bancários, eliminação de cobranças indevidas e redução de saldo devedor.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Divórcio Extrajudicial",
            description:
              "Solução rápida, econômica e discreta em cartório para casais em consenso sem filhos menores.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const jsonLdAttorney = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "Renan Mourão",
    url: "https://renanmouraoadvocacia.com.br",
    telephone: "+55-45-99951-7673",
    email: "mourao.adv07@gmail.com",
    jobTitle: "Advogado",
    knowsAbout: [
      "Direito Civil",
      "Direito Digital",
      "Direito Bancário",
      "Direito de Família",
      "Adjudicação Compulsória",
      "Recuperação de Contas Digitais",
      "Juros Abusivos",
      "Divórcio Extrajudicial",
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que é adjudicação compulsória?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A adjudicação compulsória é uma ação judicial que permite ao comprador de um imóvel obter a propriedade definitiva quando o vendedor se recusa a outorgar a escritura, mesmo após o pagamento integral do contrato.",
        },
      },
      {
        "@type": "Question",
        name: "Como recuperar uma conta hackeada do Instagram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Através de liminar judicial baseada no Marco Civil da Internet, é possível obrigar a plataforma a restabelecer o acesso ao perfil bloqueado, invadido ou desativado indevidamente.",
        },
      },
      {
        "@type": "Question",
        name: "Como saber se estou pagando juros abusivos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Juros são considerados abusivos quando excedem a taxa média de mercado divulgada pelo Banco Central. Uma revisão contratual pode identificar cobranças indevidas e reduzir significativamente o saldo devedor.",
        },
      },
      {
        "@type": "Question",
        name: "Quais os requisitos para o divórcio extrajudicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O divórcio extrajudicial pode ser feito em cartório quando há consenso entre as partes, não existem filhos menores ou incapazes, e ambos estão de acordo com a partilha de bens. É rápido, econômico e discreto.",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOrganization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdAttorney),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFaq),
        }}
      />

      <Header />

      {/* ========== HERO ========== */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "var(--bg-primary)" }}
      >
        {/* Gradient overlays */}
        <div className="absolute inset-0 gradient-radial-hero" />
        <div
          className="absolute inset-0 noise-overlay"
          style={{ pointerEvents: "none" }}
        />

        {/* Decorative elements */}
        <div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full opacity-[0.07] blur-[100px]"
          style={{ background: "var(--blue-base)" }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-[0.05] blur-[120px]"
          style={{ background: "var(--blue-highlight)" }}
        />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 md:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="animate-fade-in-up opacity-0 mb-6">
              <span
                className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full border"
                style={{
                  color: "var(--gold-accent)",
                  borderColor: "rgba(197, 168, 128, 0.2)",
                  background: "rgba(197, 168, 128, 0.05)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--gold-accent)" }}
                />
                Escritório de Advocacia
              </span>
            </div>

            {/* Heading */}
            <h1 className="animate-fade-in-up opacity-0 animation-delay-100 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
              <span style={{ color: "var(--text-primary)" }}>
                Soluções jurídicas com{" "}
              </span>
              <span
                className="relative"
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold-accent), var(--gold-bright))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                transparência
              </span>
              <span style={{ color: "var(--text-primary)" }}>
                {" "}e{" "}
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold-accent), var(--gold-bright))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                compromisso.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-fade-in-up opacity-0 animation-delay-200 font-sans text-lg md:text-xl leading-relaxed max-w-xl mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              Atuação especializada em Direito Imobiliário, Digital, Bancário e
              Família. Seu direito, nossa prioridade.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up opacity-0 animation-delay-300 flex flex-col sm:flex-row gap-4">
              <PrimaryButton href="#contato" size="lg">
                Fale Conosco
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M4 14L14 4M14 4H6M14 4V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </PrimaryButton>
              <PrimaryButton href="#atuacao" variant="outline" size="lg">
                Conheça Nossas Áreas
              </PrimaryButton>
            </div>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-in-up opacity-0 animation-delay-500 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "500+", label: "Clientes Atendidos" },
              { value: "98%", label: "Taxa de Sucesso" },
              { value: "10+", label: "Anos de Experiência" },
              { value: "24h", label: "Tempo de Resposta" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl"
                style={{
                  background: "rgba(20, 20, 20, 0.6)",
                  border: "1px solid rgba(51, 51, 51, 0.3)",
                }}
              >
                <div
                  className="font-serif text-2xl md:text-3xl font-semibold"
                  style={{ color: "var(--gold-accent)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-sans text-xs md:text-sm mt-1 tracking-wide"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, var(--bg-primary), transparent)",
          }}
        />
      </section>

      {/* ========== SOBRE ========== */}
      <SectionWrapper id="sobre" withGradient>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <SectionHeader
              label="Quem Somos"
              title="Advocacia moderna com valores sólidos"
              align="left"
            />
            <div className="space-y-5">
              <p
                className="font-sans text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                O escritório <strong style={{ color: "var(--text-primary)" }}>Renan Mourão Advocacia</strong>{" "}
                atua com um compromisso firme: entregar clareza e resultados em
                cada etapa do processo. Acreditamos que a advocacia deve ser
                acessível, transparente e centrada nas pessoas.
              </p>
              <p
                className="font-sans text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Nossa equipe combina conhecimento técnico aprofundado com uma
                abordagem humanizada, buscando sempre o melhor resultado
                processual para cada cliente. Cada caso é tratado com a atenção
                e a estratégia que merece.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 2L12.472 7.018L18 7.816L14 11.716L14.944 17.218L10 14.618L5.056 17.218L6 11.716L2 7.816L7.528 7.018L10 2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  title: "Transparência",
                  text: "Comunicação clara em todas as fases.",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7 10L9.5 12.5L13.5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  title: "Compromisso",
                  text: "Dedicação total ao seu caso.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div
                    className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg"
                    style={{
                      background: "rgba(15, 52, 96, 0.2)",
                      color: "var(--gold-accent)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="font-sans text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="font-sans text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual Element */}
          <div className="relative flex items-center justify-center">
            <div
              className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))",
                border: "1px solid var(--border-card)",
              }}
            >
              {/* Decorative content inside */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(15, 52, 96, 0.3)",
                    border: "2px solid rgba(26, 82, 118, 0.4)",
                  }}
                >
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--gold-accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </div>
                <p
                  className="font-serif text-2xl md:text-3xl font-medium italic leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  &ldquo;Seu direito, nossa prioridade.&rdquo;
                </p>
                <div
                  className="mt-4 h-[1px] w-16"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--gold-accent), transparent)",
                  }}
                />
                <p
                  className="mt-4 font-sans text-sm font-medium"
                  style={{ color: "var(--gold-accent)" }}
                >
                  Renan Mourão
                </p>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24"
                style={{
                  background:
                    "radial-gradient(circle at 100% 0%, rgba(197, 168, 128, 0.1) 0%, transparent 70%)",
                }}
              />
            </div>

            {/* Floating accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20 blur-[60px]"
              style={{ background: "var(--blue-base)" }}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ========== ÁREAS DE ATUAÇÃO ========== */}
      <SectionWrapper id="atuacao" className="!pt-12 md:!pt-16">
        <SectionHeader
          label="Expertise"
          title="Áreas de Atuação"
          subtitle="Atuamos com especialização e estratégia nas áreas que mais impactam a vida dos nossos clientes."
          className="!mb-8 md:!mb-10"
        />
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ========== DEPOIMENTOS ========== */}
      <SectionWrapper id="depoimentos" withGradient>
        <SectionHeader
          label="Depoimentos"
          title="O que dizem nossos clientes"
          subtitle="A confiança dos nossos clientes é o maior reconhecimento do nosso trabalho."
        />
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              stars={testimonial.stars}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ========== CONTATO ========== */}
      <SectionWrapper id="contato" withGradient>
        <SectionHeader
          label="Contato"
          title="Fale Conosco"
          subtitle="Entre em contato para uma consulta. Estamos prontos para entender seu caso e oferecer a melhor orientação jurídica."
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M17 14.2V16.7C17.0005 16.9331 16.9522 17.1636 16.8585 17.3762C16.7647 17.5887 16.6275 17.7787 16.4557 17.9337C16.2839 18.0886 16.0812 18.2051 15.8609 18.2758C15.6405 18.3465 15.4076 18.3699 15.1775 18.3444C12.8221 18.0884 10.5597 17.2862 8.5675 16.0005C6.71834 14.8305 5.14999 13.2622 3.98 11.413C2.68998 9.41226 1.88752 7.13993 1.635 4.77498C1.60967 4.54565 1.63282 4.31356 1.70298 4.09383C1.77314 3.87411 1.88884 3.67185 2.04278 3.50025C2.19672 3.32864 2.38554 3.19138 2.59697 3.09711C2.80841 3.00283 3.03782 2.95369 3.27 2.95298H5.77C6.17862 2.94909 6.57534 3.09348 6.8879 3.35881C7.20046 3.62414 7.40847 3.99328 7.4725 4.39748C7.59196 5.20498 7.80301 5.99598 8.1 6.75748C8.2149 7.04665 8.24372 7.36206 8.18312 7.66692C8.12252 7.97178 7.97497 8.25302 7.7575 8.47498L6.6925 9.53998C7.77524 11.4502 9.3498 13.0247 11.26 14.1075L12.325 13.0425C12.547 12.825 12.8282 12.6775 13.1331 12.6169C13.4379 12.5563 13.7534 12.5851 14.0425 12.7L14.0425 12.7C14.804 12.997 15.595 13.208 16.4025 13.3275C16.8113 13.3921 17.1842 13.6036 17.4504 13.9209C17.7166 14.2382 17.8583 14.64 17.85 15.0525"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                label: "WhatsApp",
                value: "(45) 99951-7673",
                href: "https://wa.me/5545999517673",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect
                      x="2"
                      y="4"
                      width="16"
                      height="12"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 6L10 11L18 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                label: "E-mail",
                value: "mourao.adv07@gmail.com",
                href: "mailto:mourao.adv07@gmail.com",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 18C10 18 17 13 17 9C17 5.13401 13.866 2 10 2C6.13401 2 3 5.13401 3 9C3 13 10 18 10 18Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                ),
                label: "Endereço",
                value: "Centro, Cidade - Estado",
                href: "#",
              },
            ].map((info) => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-card)",
                }}
              >
                <div
                  className="flex-shrink-0 h-11 w-11 flex items-center justify-center rounded-lg transition-colors duration-300 group-hover:scale-105"
                  style={{
                    background: "rgba(15, 52, 96, 0.2)",
                    border: "1px solid rgba(15, 52, 96, 0.3)",
                    color: "var(--blue-highlight)",
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <div
                    className="font-sans text-xs font-bold tracking-[0.1em] uppercase mb-1"
                    style={{ color: "var(--gold-accent)" }}
                  >
                    {info.label}
                  </div>
                  <div
                    className="font-sans text-base md:text-lg font-medium transition-colors duration-300 group-hover:text-[var(--text-primary)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Card */}
          <div
            className="relative flex flex-col items-center justify-center rounded-2xl p-8 md:p-12 text-center overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(15, 52, 96, 0.3) 0%, rgba(10, 10, 10, 0.8) 100%)",
              border: "1px solid rgba(26, 82, 118, 0.3)",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, var(--border-subtle) 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative z-10">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(197, 168, 128, 0.1)",
                  border: "2px solid rgba(197, 168, 128, 0.3)",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--gold-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
                </svg>
              </div>
              <h3
                className="font-serif text-2xl md:text-3xl font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Pronto para resolver seu caso?
              </h3>
              <p
                className="font-sans text-base leading-relaxed mb-8 max-w-sm mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                Agende uma consulta e descubra como podemos ajudar. Primeira
                análise sem compromisso.
              </p>
              <PrimaryButton
                href="https://wa.me/5545999517673"
                size="lg"
              >
                Agendar Consulta pelo WhatsApp
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M4 14L14 4M14 4H6M14 4V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ========== FOOTER ========== */}
      <footer
        className="relative py-12 px-6 md:px-8"
        style={{
          background: "var(--bg-primary)",
          borderTop: "1px solid rgba(51, 51, 51, 0.3)",
        }}
      >
        <div className="mx-auto max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span
              className="font-serif text-lg font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Renan Mourão
            </span>
            <span
              className="text-[0.6rem] font-sans font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--gold-accent)" }}
            >
              Advocacia
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Sobre", href: "#sobre" },
              { label: "Áreas de Atuação", href: "#atuacao" },
              { label: "Depoimentos", href: "#depoimentos" },
              { label: "Contato", href: "#contato" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm transition-colors duration-300 hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="font-sans text-xs"
            style={{ color: "var(--text-secondary)", opacity: 0.6 }}
          >
            © {new Date().getFullYear()} Renan Mourão Advocacia. Todos os
            direitos reservados.
          </p>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}
