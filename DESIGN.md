# DESIGN.md - Landing Page: Escritório de Advocacia Renan Mourão

## 1. Visão Geral
Landing page em Next.js (Single Page Application) focada em conversão e apresentação de serviços jurídicos. O site possui navegação por âncoras (Anchor Navigation) e um botão flutuante para voltar ao topo (Back to Top). O design é "Dark Mode Native", transmitindo elegância, modernidade e segurança.

## 2. Paleta de Cores (Design System)
O fundo principal é escuro (quase preto), iluminado por gradientes baseados na paleta "Trust Blue" (Azul Confiança) para fundos e "Prestige Gold" (Dourado Prestígio) para destaques.

- **Background Principal:** `#0A0A0A` (Preto profundo)
- **Background Secundário (Cards/Seções):** `#141414` a `#1A1A1A`
- **Textos:**
  - Primário (Títulos): `#F8F9FA` (Branco gelo)
  - Secundário (Parágrafos): `#A0AEC0` (Cinza azulado para conforto visual)
- **Cores de Destaque (Brand Colors):**
  - Azul Institucional: `#0F3460` (Base) a `#1A5276` (Highlight)
  - Dourado Acento (Botões/Links): `#C5A880` ou `#D4AF37`
- **Gradiente Principal (Background FX):** `linear-gradient(135deg, #0A0A0A 0%, #0F3460 50%, #0A0A0A 100%)` com baixa opacidade (10-15%) para não ofuscar a leitura.

## 3. Tipografia
- **Fontes Sugeridas (Google Fonts):**
  - Títulos (Headings): `Playfair Display` ou `Merriweather` (Traz a sobriedade e tradição jurídica).
  - Corpo de Texto (Body): `Inter` ou `Roboto` (Garante leiturabilidade impecável em telas digitais).

## 4. Estrutura da Página (Anchor Navigation)

A página será dividida nas seguintes seções (Sections) com seus respectivos IDs para a navegação:

### 4.1. Header & Navigation (`#inicio`)
- **Logo:** Renan Mourão.
- **Menu Links:** Início | Áreas de Atuação | Sobre | Fale Conosco.
- **Comportamento:** Fixo (Sticky) no topo com fundo translúcido (backdrop-blur) ao rolar a página.

### 4.2. Hero Section (`#inicio`)
- **Visual:** Background preto com um sutil gradiente azul radial.
- **Conteúdo:** Título de impacto, subtítulo resumindo as soluções em Direito Civil, Família, Criminal e Bancário.
- **CTA:** Botão primário "Fale Conosco" (cor Dourado Acento) direcionando para o contato.

### 4.3. Sobre o Escritório (`#sobre`)
- **Conteúdo:** Foco nos princípios de transparência e compromisso, destacando a equipe especializada e a busca pelo melhor resultado processual.

### 4.4. Áreas de Atuação (`#atuacao`)
Layout em Grid (2x2 ou 1x4 no mobile) utilizando componentes `ServiceCard`.

1. **Adjudicação Compulsória:**
   - Ícone: Casa/Documento.
   - Resumo: Propriedade definitiva de imóveis de forma segura para compradores com contrato quitado. Regularização e registro pleno.
2. **Recuperação de Contas (Instagram/TikTok):**
   - Ícone: Smartphone/Escudo.
   - Resumo: Restabelecimento de acesso a perfis bloqueados, invadidos ou desativados via liminar judicial (Marco Civil da Internet).
3. **Juros Abusivos:**
   - Ícone: Cifrão/Porcentagem cortada.
   - Resumo: Revisão estratégica de contratos bancários, eliminação de cobranças indevidas e redução de saldo devedor.
4. **Divórcio Extrajudicial:**
   - Ícone: Balança/Aliança.
   - Resumo: Solução rápida, econômica e discreta em cartório para casais em consenso sem filhos menores.

### 4.5. Footer & Contato (`#contato`)
- **Conteúdo:** Informações de contato (WhatsApp, E-mail, Endereço), links rápidos, botão de CTA final.
- **Elementos UI:** Botão flutuante "Voltar ao Topo" (ícone de seta para cima) visível após scroll inicial.

## 5. Componentes Reutilizáveis (UI Kit)

Para garantir consistência, o código deve ser componentizado da seguinte forma:

1. **`SectionWrapper`**: Componente de layout que envolve cada bloco da página, garantindo o padding correto, alinhamento centralizado (max-width) e o atributo `id` dinâmico para a âncora.
2. **`ServiceCard`**: Componente visual das áreas de atuação. Deve aceitar props: `title`, `description`, `icon`. Fundo em `#141414`, borda sutil de `1px solid #333`, e efeito de `hover` revelando um leve brilho azul nas bordas.
3. **`PrimaryButton`**: Componente de botão principal para CTAs ("Fale Conosco"). Background em Dourado `#C5A880`, texto em preto, cantos arredondados, com hover de escurecimento.
4. **`SectionHeader`**: Componente para títulos de seção ("Áreas de Atuação", "Sobre"), utilizando a fonte de Títulos e uma linha de acento embaixo ou ao lado.