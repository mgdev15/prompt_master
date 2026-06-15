// ============================================================
// Prompt Master — Internationalization & Template Definitions
// ============================================================

export const i18n = {
  pt: {
    title: "Prompt Master",
    subtitle: "Gerador de Prompt Universal para Sites Profissionais",
    clearBtn: "Limpar formulário",
    generateBtn: "Gerar Prompt",
    copyBtn: "Copiar Prompt",
    copiedFeedback: "Copiado!",
    errorRequired: "Preencha os campos obrigatórios: Nome da marca, Tipo de negócio e Cidade.",

    step1Title: "Identidade do Negócio",
    step1Desc: "Defina o nome, tipo, slogan e diferenciais de mercado da sua marca.",
    step2Title: "Páginas e Conteúdo",
    step2Desc: "Selecione as páginas estruturais e descreva serviços e contatos.",
    step3Title: "Design e Visual",
    step3Desc: "Escolha o tom cromático principal e o estilo visual do layout.",
    step4Title: "Diretório de Imagens",
    step4Desc: "Informe onde as fotos do site estarão armazenadas.",
    step5Title: "Funcionalidades Extras",
    step5Desc: "Marque os componentes dinâmicos e interativos desejados.",
    step6Title: "Observações Adicionais",
    step6Desc: "Adicione instruções personalizadas para o design final do site.",
    step7Title: "Stack Tecnológica",
    step7Desc: "Defina as tecnologias, frameworks, bancos de dados e ambiente de deploy do seu projeto.",

    brandNameLabel: "Nome da marca / empresa",
    brandNamePlaceholder: "Ex: Nathalia Dentes, Café Tulipa, Studio Mais",

    businessTypeLabel: "Tipo de negócio",
    businessTypeSelect: "Selecione...",
    businessTypes: {
      dental:       "Clínica Odontológica",
      medical:      "Clínica Médica / Estética",
      restaurant:   "Restaurante / Café / Lanchonete",
      barber:       "Barbearia / Salão de Beleza",
      tattoo:       "Estúdio de Tatuagem",
      law:          "Advocacia / Escritório Jurídico",
      accounting:   "Contabilidade / Finanças",
      realestate:   "Imobiliária / Corretora",
      gym:          "Academia / Personal Trainer",
      psychology:   "Psicologia / Terapia",
      education:    "Educação / Cursos Online",
      ecommerce:    "E-commerce / Loja Virtual",
      tech:         "Tecnologia / Software / SaaS",
      marketing:    "Agência de Marketing / Design",
      architecture: "Arquitetura / Decoração",
      photography:  "Fotografia / Vídeo",
      other:        "Outro (especificar)"
    },

    customTypeLabel: "Tipo de negócio personalizado",
    customTypePlaceholder: "Ex: barbearia, estúdio de tatuagem...",
    locationLabel: "Cidade / Estado",
    locationPlaceholder: "Ex: Porto Alegre, RS",
    sloganLabel: "Slogan ou frase de impacto",
    sloganPlaceholder: "Ex: Seu sorriso merece o melhor cuidado",
    credentialsLabel: "Credenciais / Diferenciais",
    credentialsPlaceholder: "Ex: Credenciada Hosp. São Lucas PUCRS, Especialista em Odontologia Preventiva, +10 anos de experiência",
    credentialsHelper: "Aparecem como badges no hero e ao longo do site",

    pagesLabel: "Páginas do site (clique para selecionar)",
    pagesList: {
      home:         "Home",
      about:        "Sobre Nós",
      services:     "Serviços",
      contact:      "Contato",
      blog:         "Blog / Dicas",
      gallery:      "Galeria",
      team:         "Equipe",
      testimonials: "Depoimentos",
      faq:          "FAQ",
      booking:      "Agendamento Online"
    },

    servicesLabel: "Produtos / Serviços oferecidos",
    servicesPlaceholder: "Ex: Odontologia Preventiva, Clareamento Dental, Ortodontia, Implantes, Restaurações Estéticas",
    hoursLabel: "Horário de funcionamento",
    hoursPlaceholder: "Ex: Seg–Sex: 08h–18h\nSábado: 08h–12h",
    contactLabel: "Informações de contato",
    contactPlaceholder: "Ex: Tel: (51) 99999-9999\nEmail: contato@marca.com",

    paletteLabel: "Paleta de cores principal (selecione uma)",
    colors: {
      blue:      "Azul",
      green:     "Verde",
      orange:    "Laranja",
      pink:      "Rosa",
      purple:    "Roxo",
      darkgray:  "Cinza",
      red:       "Vermelho",
      lightgray: "Neutro",
      teal:      "Turquesa",
      indigo:    "Índigo",
      yellow:    "Amarelo",
      gold:      "Dourado"
    },

    styleLabel: "Estilo visual",
    // Values are display labels; keys are stored in formData
    stylesList: {
      modern:     "Moderno e clean",
      luxury:     "Luxuoso",
      warm:       "Acolhedor",
      minimalist: "Minimalista",
      vibrant:    "Vibrante",
      corporate:  "Corporativo"
    },

    heroDirLabel: "Diretório das fotos do hero (carrossel)",
    heroDirPlaceholder: "Ex: ./assets/images/hero/ ou /fotos/hero",
    imagesDirLabel: "Diretório de imagens gerais",
    imagesDirPlaceholder: "Ex: ./assets/images/ ou deixe vazio para usar Unsplash",
    imageSourceLabel: "Fonte de imagens de apoio",
    imageSources: {
      unsplash: "Unsplash (automático)",
      local:    "Somente locais",
      mixed:    "Mistas"
    },

    featuresLabel: "Funcionalidades desejadas",
    featuresList: {
      whatsapp:     "WhatsApp flutuante",
      contactForm:  "Formulário de contato",
      scrollReveal: "Scroll reveal",
      hamburger:    "Menu hambúrguer",
      testimonials: "Depoimentos",
      counters:     "Contadores animados",
      map:          "Mapa embutido",
      accordion:    "FAQ accordion",
      lightbox:     "Galeria lightbox",
      timeline:     "Timeline animada",
      bookingModal: "Modal de agendamento",
      darkMode:     "Dark mode toggle"
    },

    observationsLabel: "Observações livres",
    observationsPlaceholder: "Ex: o site deve ter um chatbot simples, ou preciso de uma seção de portfólio com filtro por categoria...",

    frontendLabel: "Tecnologia Frontend",
    frontendOptions: {
      html_css_js: "HTML + CSS + JS (puro)",
      react_vite: "React + Vite",
      nextjs: "Next.js",
      vue: "Vue.js",
      angular: "Angular",
      svelte: "Svelte"
    },
    backendLabel: "Incluir backend?",
    backendOptions: {
      none: "Não (só frontend)",
      nodejs_express: "Node.js + Express",
      django: "Python + Django",
      fastapi: "Python + FastAPI",
      laravel: "PHP + Laravel",
      rails: "Ruby on Rails",
      dotnet: ".NET / C#"
    },
    databaseLabel: "Banco de dados",
    databaseOptions: {
      none: "Nenhum",
      postgresql: "PostgreSQL",
      mysql: "MySQL",
      mongodb: "MongoDB",
      sqlite: "SQLite",
      supabase: "Supabase",
      firebase: "Firebase"
    },
    deployLabel: "Incluir instruções de deploy?",
    deployOptions: {
      none: "Não",
      vercel: "Vercel",
      netlify: "Netlify",
      railway: "Railway",
      vps: "VPS / Servidor próprio",
      docker: "Docker + Docker Compose"
    },

    resultTitle: "✅ Prompt Gerado com Sucesso",
    howToUseTitle: "Como usar este gerador",
    howToUseText: "Preencha os campos acima e clique em \"Gerar Prompt\" para obter o texto completo. Se preferir editar manualmente, o prompt usa variáveis bem sinalizadas:",
    tableHeaderVar: "Variável",
    tableHeaderDesc: "Descrição",
    variables: [
      { name: "{{NOME_DA_MARCA}}",  desc: "Substitua pelo nome do negócio" },
      { name: "{{TIPO_DE_NEGOCIO}}", desc: "Clínica, restaurante, escritório..." },
      { name: "{{CIDADE_ESTADO}}",  desc: "Localização" },
      { name: "{{SLOGAN}}",         desc: "Frase de impacto" },
      { name: "{{CREDENCIAIS}}",    desc: "Badges e diferenciais" },
      { name: "{{SERVICOS}}",       desc: "Lista de produtos/serviços" },
      { name: "{{HORARIOS}}",       desc: "Funcionamento" },
      { name: "{{CONTATO}}",        desc: "Tel, email, WhatsApp" },
      { name: "{{PALETA_CORES}}",   desc: "Tom principal do design" },
      { name: "{{PAGINAS}}",        desc: "Quais páginas gerar" },
      { name: "{{DIR_HERO}}",       desc: "Caminho das fotos do carrossel" },
      { name: "{{DIR_IMAGENS}}",    desc: "Caminho de imagens gerais" },
      { name: "{{FUNCIONALIDADES}}", desc: "Recursos extras desejados" },
      { name: "{{FRONTEND}}",       desc: "Tecnologia frontend principal" },
      { name: "{{BACKEND}}",        desc: "Framework de backend (se houver)" },
      { name: "{{DATABASE}}",       desc: "Banco de dados utilizado (se houver)" },
      { name: "{{DEPLOY}}",         desc: "Plataforma/método de deploy" }
    ]
  },

  en: {
    title: "Prompt Master",
    subtitle: "Universal Prompt Generator for Professional Websites",
    clearBtn: "Clear form",
    generateBtn: "Generate Prompt",
    copyBtn: "Copy Prompt",
    copiedFeedback: "Copied!",
    errorRequired: "Please fill in the required fields: Brand name, Business type and City.",

    step1Title: "Business Identity",
    step1Desc: "Define the brand name, type, tagline, and credentials.",
    step2Title: "Pages & Content",
    step2Desc: "Select structural pages and specify services and contact info.",
    step3Title: "Design & Visual",
    step3Desc: "Choose the main color palette and the visual style of the layout.",
    step4Title: "Images Directory",
    step4Desc: "Define where website images and assets will be stored.",
    step5Title: "Extra Features",
    step5Desc: "Select interactive components and dynamic scripts.",
    step6Title: "Additional Notes",
    step6Desc: "Add custom parameters or specific requests for the final code.",
    step7Title: "Technology Stack",
    step7Desc: "Define the technologies, frameworks, databases, and deployment environment for your project.",

    brandNameLabel: "Brand / Company Name",
    brandNamePlaceholder: "e.g. Nathalia Dentes, Café Tulipa, Studio Mais",

    businessTypeLabel: "Business Type",
    businessTypeSelect: "Select...",
    businessTypes: {
      dental:       "Dental Clinic",
      medical:      "Medical / Aesthetic Clinic",
      restaurant:   "Restaurant / Café",
      barber:       "Barbershop / Beauty Salon",
      tattoo:       "Tattoo Studio",
      law:          "Law Firm",
      accounting:   "Accounting / Finance",
      realestate:   "Real Estate",
      gym:          "Gym / Personal Trainer",
      psychology:   "Psychology / Therapy",
      education:    "Education / Online Courses",
      ecommerce:    "E-commerce / Online Store",
      tech:         "Technology / Software / SaaS",
      marketing:    "Marketing / Design Agency",
      architecture: "Architecture / Interior Design",
      photography:  "Photography / Video",
      other:        "Other (specify)"
    },

    customTypeLabel: "Custom Business Type",
    customTypePlaceholder: "e.g. barber, tattoo studio...",
    locationLabel: "City / State",
    locationPlaceholder: "e.g. London, UK",
    sloganLabel: "Slogan or impact phrase",
    sloganPlaceholder: "e.g. Your smile deserves the best care",
    credentialsLabel: "Credentials / Differentials",
    credentialsPlaceholder: "e.g. Certified by St. Lucas Hospital, Specialist in Preventive Dentistry, 10+ years experience",
    credentialsHelper: "Will appear as badges in the hero section and across the website",

    pagesLabel: "Site pages (click to select)",
    pagesList: {
      home:         "Home",
      about:        "About Us",
      services:     "Services",
      contact:      "Contact",
      blog:         "Blog / Tips",
      gallery:      "Gallery",
      team:         "Team",
      testimonials: "Testimonials",
      faq:          "FAQ",
      booking:      "Online Booking"
    },

    servicesLabel: "Products / Services offered",
    servicesPlaceholder: "e.g. Preventive Dentistry, Teeth Whitening, Orthodontics, Implants, Cosmetic Fillings",
    hoursLabel: "Business hours",
    hoursPlaceholder: "e.g. Mon–Fri: 08am–06pm\nSaturday: 08am–12pm",
    contactLabel: "Contact information",
    contactPlaceholder: "e.g. Tel: +1 (555) 999-9999\nEmail: contact@brand.com",

    paletteLabel: "Main color palette (select one)",
    colors: {
      blue:      "Blue",
      green:     "Green",
      orange:    "Orange",
      pink:      "Pink",
      purple:    "Purple",
      darkgray:  "Dark Gray",
      red:       "Red",
      lightgray: "Light Gray",
      teal:      "Teal",
      indigo:    "Indigo",
      yellow:    "Yellow",
      gold:      "Gold"
    },

    styleLabel: "Visual style",
    stylesList: {
      modern:     "Modern & clean",
      luxury:     "Luxurious",
      warm:       "Welcoming",
      minimalist: "Minimalist",
      vibrant:    "Vibrant",
      corporate:  "Corporate"
    },

    heroDirLabel: "Hero photos directory (carousel)",
    heroDirPlaceholder: "e.g. ./assets/images/hero/ or /photos/hero",
    imagesDirLabel: "General images directory",
    imagesDirPlaceholder: "e.g. ./assets/images/ or leave empty to use Unsplash",
    imageSourceLabel: "Image source",
    imageSources: {
      unsplash: "Unsplash (automatic)",
      local:    "Local only",
      mixed:    "Mixed"
    },

    featuresLabel: "Desired features",
    featuresList: {
      whatsapp:     "Floating WhatsApp",
      contactForm:  "Contact form",
      scrollReveal: "Scroll reveal",
      hamburger:    "Hamburger menu",
      testimonials: "Testimonials",
      counters:     "Animated counters",
      map:          "Embedded map",
      accordion:    "FAQ accordion",
      lightbox:     "Lightbox gallery",
      timeline:     "Animated timeline",
      bookingModal: "Booking modal",
      darkMode:     "Dark mode toggle"
    },

    observationsLabel: "Free observations",
    observationsPlaceholder: "e.g. the site should have a simple chatbot, or I need a portfolio section with category filters...",

    frontendLabel: "Frontend Technology",
    frontendOptions: {
      html_css_js: "HTML + CSS + JS (vanilla)",
      react_vite: "React + Vite",
      nextjs: "Next.js",
      vue: "Vue.js",
      angular: "Angular",
      svelte: "Svelte"
    },
    backendLabel: "Include backend?",
    backendOptions: {
      none: "No (frontend only)",
      nodejs_express: "Node.js + Express",
      django: "Python + Django",
      fastapi: "Python + FastAPI",
      laravel: "PHP + Laravel",
      rails: "Ruby on Rails",
      dotnet: ".NET / C#"
    },
    databaseLabel: "Database",
    databaseOptions: {
      none: "None",
      postgresql: "PostgreSQL",
      mysql: "MySQL",
      mongodb: "MongoDB",
      sqlite: "SQLite",
      supabase: "Supabase",
      firebase: "Firebase"
    },
    deployLabel: "Include deployment instructions?",
    deployOptions: {
      none: "No",
      vercel: "Vercel",
      netlify: "Netlify",
      railway: "Railway",
      vps: "VPS / Self-hosted",
      docker: "Docker + Docker Compose"
    },

    resultTitle: "✅ Prompt Generated Successfully",
    howToUseTitle: "How to use this generator",
    howToUseText: "Fill out the fields above and click \"Generate Prompt\" to receive your complete prompt instantly. If you prefer to write manually, the universal prompt uses clearly marked variables:",
    tableHeaderVar: "Variable",
    tableHeaderDesc: "Description",
    variables: [
      { name: "{{BRAND_NAME}}",    desc: "replace with business name" },
      { name: "{{BUSINESS_TYPE}}", desc: "clinic, restaurant, office..." },
      { name: "{{CITY_STATE}}",    desc: "location" },
      { name: "{{SLOGAN}}",        desc: "impact phrase" },
      { name: "{{CREDENTIALS}}",   desc: "badges and differentials" },
      { name: "{{SERVICES}}",      desc: "list of products/services" },
      { name: "{{HOURS}}",         desc: "operational hours" },
      { name: "{{CONTACT}}",       desc: "tel, email, WhatsApp" },
      { name: "{{COLOR_PALETTE}}", desc: "main design color" },
      { name: "{{PAGES}}",         desc: "what pages to generate" },
      { name: "{{HERO_DIR}}",      desc: "path to carousel photos" },
      { name: "{{IMAGES_DIR}}",    desc: "path to general images" },
      { name: "{{FEATURES}}",      desc: "extra features desired" },
      { name: "{{FRONTEND}}",      desc: "Main frontend technology" },
      { name: "{{BACKEND}}",       desc: "Backend framework (if any)" },
      { name: "{{DATABASE}}",      desc: "Database used (if any)" },
      { name: "{{DEPLOY}}",        desc: "Deploy platform/method" }
    ]
  }
};

// ──────────────────────────────────────────────
// Prompt templates & structure helpers
// ──────────────────────────────────────────────

const getFileStructure = (frontend, backend) => {
  const isSpa = /react|vite|vue|angular|svelte|next/i.test(frontend);
  const isNext = /next/i.test(frontend);
  const isReact = /react|next/i.test(frontend);
  const hasBackend = backend && !/não|no\s*\(frontend\s*only\)|none/i.test(backend);
  
  if (hasBackend) {
    let clientStructure = '/index.html\n    /css\n    /js';
    if (isNext) {
      clientStructure = '/app\n      /layout.js\n      /page.js\n      /page.module.css\n      /components/\n        /Header.js\n        /Header.module.css\n    /public';
    } else if (isReact) {
      clientStructure = '/src\n      /main.jsx\n      /App.jsx\n      /App.module.css\n      /components/\n        /Header.jsx\n        /Header.module.css\n    /index.html';
    } else if (isSpa) {
      clientStructure = '/src\n    /index.html';
    }
    return `/[projeto-raiz]
  /frontend (ou client)
    ${clientStructure}
  /backend (ou server)
    /src (ou /app)
    /package.json (ou requirements.txt, etc.)`;
  }
  
  if (isNext) {
    return `/package.json
/app/
  /layout.js
  /page.js
  /page.module.css
  /components/
    /Header.js
    /Header.module.css
/public/
/assets/`;
  }
  
  if (isReact) {
    return `/package.json
/index.html
/src/
  /main.jsx
  /App.jsx
  /App.module.css
  /components/
    /Header.jsx
    /Header.module.css
  /assets/`;
  }
  
  if (isSpa) {
    return `/package.json
/index.html
/src/
  /main.js (ou main.jsx)
  /App.js (ou App.jsx)
  /components/
  /assets/`;
  }
  
  return `/index.html
/css/style.css
/js/main.js
/assets/images/hero/
/assets/images/`;
};

export const templates = {
  pt: (data) => {
    const isReact = /react|next/i.test(data.frontend);
    return `Crie um site profissional completo para ${data.brandName}, um(a) ${data.businessType} localizado(a) em ${data.location}.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IDENTIDADE DA MARCA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Nome: ${data.brandName}
• Slogan: ${data.slogan || "Não especificado"}
• Diferenciais e credenciais: ${data.credentials || "Não especificados"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STACK TECNOLÓGICA & ARQUITETURA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Frontend principal: ${data.frontend}
• Backend principal: ${data.backend}
• Banco de dados: ${data.database}
• Configuração/Instruções de Deploy: ${data.deploy}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PÁGINAS A CRIAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.pages.join(", ")} — cada uma com conteúdo relevante, seções bem estruturadas e chamadas para ação claras.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERVIÇOS / PRODUTOS OFERECIDOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.services || "Não especificados"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMAÇÕES OPERACIONAIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Horário de funcionamento: ${data.hours || "Não especificado"}
• Contato: ${data.contact || "Não especificado"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN E IDENTIDADE VISUAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Paleta de cores principal: ${data.colorPalette}
• Estilo visual: ${data.visualStyle}
• O site deve ser moderno, responsivo (mobile-first), com animações suaves de scroll reveal.
• Utilize a paleta de cores definida como identidade visual em botões, destaques, gradientes e seções alternadas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMAGENS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Fotos do hero/carrossel: ${data.heroDir || "Usar placeholders do Unsplash relacionados ao segmento"}
• Imagens gerais: ${data.imagesDir || "Usar placeholders do Unsplash relacionados ao segmento"}
• Fonte de imagens: ${data.imageSource}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FUNCIONALIDADES OBRIGATÓRIAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.features.map(f => `• ${f}`).join("\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUISITOS TÉCNICOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Desenvolvimento frontend: Utilizar ${data.frontend} de acordo com as melhores práticas da tecnologia.
${isReact ? `• CSS Modules obrigatório: Todo o CSS deve ser estruturado usando CSS Modules (arquivos terminando em \`.module.css\`) e importados localmente nos componentes. Não utilize CSS global para componentes específicos para evitar conflitos de escopo que possam quebrar o layout do site.\n` : ''}${!/não|none/i.test(data.backend) ? `• Desenvolvimento backend: Implementar a API e lógica com ${data.backend}.\n` : ''}${!/nenhum|none/i.test(data.database) ? `• Banco de dados: Configurar e integrar com ${data.database}.\n` : ''}${!/não|none/i.test(data.deploy) ? `• Deploy: Seguir procedimentos de deploy e configuração para ${data.deploy}.\n` : ''}• Totalmente responsivo: mobile, tablet e desktop
• Performance otimizada: imagens com lazy loading, CSS e JS otimizados/minificados
• SEO básico: meta tags, Open Graph, schema.org para negócio local
• Acessibilidade: contraste adequado, aria-labels, navegação por teclado
• Animações com APIs nativas ou integradas de scroll reveal

ESTRUTURA DE ARQUIVOS SUGERIDA:
${getFileStructure(data.frontend, data.backend)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OBSERVAÇÕES ADICIONAIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.observations || "Nenhuma observação adicional"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DIRETRIZES DE ENTREGA DO CÓDIGO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Entregue o código completo, funcional e pronto para deploy.
• Evite comentários explicativos ou instruções de personalização excessivas/redundantes.
• IMPORTANTE: NUNCA insira qualquer tipo de comentário explicativo ou instrução no início do arquivo \`index.html\` (antes da tag \`<!DOCTYPE html>\`), pois isso quebra a renderização correta do HTML no navegador e causa problemas em alguns servidores. Mantenha os comentários limpos, focados e contidos apenas onde for extremamente necessário.`;
  },

  en: (data) => {
    const isReact = /react|next/i.test(data.frontend);
    return `Create a complete professional website for ${data.brandName}, a ${data.businessType} located in ${data.location}.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Name: ${data.brandName}
• Tagline: ${data.slogan || "Not specified"}
• Credentials & differentials: ${data.credentials || "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNOLOGY STACK & ARCHITECTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Main Frontend: ${data.frontend}
• Main Backend: ${data.backend}
• Database: ${data.database}
• Deploy configuration/instructions: ${data.deploy}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGES TO CREATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.pages.join(", ")} — each with relevant content, well-structured sections, and clear calls to action.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERVICES / PRODUCTS OFFERED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.services || "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OPERATIONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Business hours: ${data.hours || "Not specified"}
• Contact: ${data.contact || "Not specified"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN & VISUAL IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Main color palette: ${data.colorPalette}
• Visual style: ${data.visualStyle}
• The site must be modern, responsive (mobile-first), with smooth scroll reveal animations.
• Use the defined color palette as visual identity in buttons, highlights, gradients and alternating sections.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IMAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Hero/carousel photos: ${data.heroDir || "Use Unsplash placeholders related to the business niche"}
• General images: ${data.imagesDir || "Use Unsplash placeholders related to the business niche"}
• Image source: ${data.imageSource}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUIRED FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.features.map(f => `• ${f}`).join("\n")}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Frontend development: Use ${data.frontend} conforming to modern framework best practices.
${isReact ? `• CSS Modules required: All CSS must be structured using CSS Modules (files ending in \`.module.css\`) and imported locally inside components. Do not use global CSS for page/section specific components to prevent class scope conflicts that could break the website layout.\n` : ''}${!/no|none/i.test(data.backend) ? `• Backend development: Implement API/logic using ${data.backend}.\n` : ''}${!/none/i.test(data.database) ? `• Database: Integrate and query with ${data.database}.\n` : ''}${!/no|none/i.test(data.deploy) ? `• Deployment: Follow deployment and environment configurations for ${data.deploy}.\n` : ''}• Fully responsive: mobile, tablet and desktop
• Optimized performance: lazy loading, optimized/minified CSS and JS code
• Basic SEO: meta tags, Open Graph, local business schema.org
• Accessibility: adequate contrast, aria-labels, keyboard navigation
• Animations using scroll reveal libraries or native Intersection Observer API

SUGGESTED FILE STRUCTURE:
${getFileStructure(data.frontend, data.backend)}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.observations || "No additional observations"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CODE DELIVERY GUIDELINES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Deliver complete, functional, and ready-to-deploy code.
• Avoid excessive or redundant explanatory comments or instructions.
• IMPORTANT: NEVER insert any type of explanatory comment or instruction at the very beginning of the \`index.html\` file (before the \`<!DOCTYPE html>\` tag), as this breaks proper HTML rendering in the browser and causes parse errors in some deployment pipelines. Keep code comments clean, focused, and present only where absolutely necessary.`;
  }
};
