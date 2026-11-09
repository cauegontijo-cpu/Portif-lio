/* ---------------------------------------------------------------------- */
/* Idiomas do site (pt, en, es)                                           */
/* - Textos fixos das páginas: ficam em UI abaixo e são ligados ao HTML   */
/*   pelo atributo data-i18n="chave".                                    */
/* - Textos do conteúdo (projetos, experiências...): ficam em data.js no  */
/*   formato { pt: "...", en: "...", es: "..." }.                         */
/* ---------------------------------------------------------------------- */

const IDIOMAS = [
  { code: "pt", label: "PT", nome: "Português", html: "pt-BR" },
  { code: "en", label: "EN", nome: "English", html: "en" },
  { code: "es", label: "ES", nome: "Español", html: "es" },
];

const UI = {
  pt: {
    "title.sobre": "Cauê Gontijo — Portfólio",
    "title.formacao": "Formação e Cursos — Cauê Gontijo",
    "title.experiencia": "Experiência Profissional — Cauê Gontijo",
    "title.projetos": "Projetos — Cauê Gontijo",
    "title.objetivo": "Objetivo Profissional — Cauê Gontijo",
    "title.contato": "Contato — Cauê Gontijo",
    "meta.description":
      "Portfólio de Cauê Gontijo, estudante de Análise e Desenvolvimento de Sistemas em Goiânia/GO.",

    "nav.aria": "Principal",
    "nav.sobre": "Sobre",
    "nav.formacao": "Formação",
    "nav.experiencia": "Experiência",
    "nav.projetos": "Projetos",
    "nav.objetivo": "Objetivo",
    "nav.contato": "Contato",
    "lang.aria": "Idioma do site",

    "home.eyebrow": "Portfólio",
    "home.base": "Base",
    "home.status": "Status",
    "home.statusValor": "Aberto a oportunidades",
    "home.verProjetos": "Ver projetos",
    "home.faleComigo": "Fale comigo",
    "home.foto": "Sua foto aqui",
    "home.sobreTitulo": "Sobre mim",
    "home.continue": "Continue por aqui",
    "home.idx.formacao": "Formação e Cursos",
    "home.idx.formacaoHint": "Trajetória acadêmica",
    "home.idx.experiencia": "Experiência Profissional",
    "home.idx.experienciaHint": "Onde já trabalhei",
    "home.idx.projetos": "Projetos",
    "home.idx.projetosHint": "Fotos e detalhes",
    "home.idx.objetivo": "Objetivo Profissional",
    "home.idx.objetivoHint": "Habilidades e foco",
    "home.idx.contato": "Contato",
    "home.idx.contatoHint": "E-mail, LinkedIn, GitHub",
    "home.atualmente": "Atualmente",
    "home.formacao": "Formação",

    "formacao.eyebrow": "02 — Formação",
    "formacao.titulo": "Formação e Cursos",
    "formacao.lead": "Minha trajetória acadêmica e cursos complementares.",
    "formacao.academica": "Formação acadêmica",
    "formacao.cursos": "Cursos e certificações",

    "experiencia.eyebrow": "03 — Experiência",
    "experiencia.titulo": "Experiência Profissional",
    "experiencia.lead": "Minha trajetória no mercado de trabalho.",
    "experiencia.lista": "Experiências",
    "experiencia.atual": "Atual",

    "projetos.eyebrow": "04 — Projetos",
    "projetos.titulo": "Projetos",
    "projetos.lead": "Alguns trabalhos que desenvolvi. Clique em um projeto para vê-lo.",
    "projetos.selecionados": "Trabalhos selecionados",
    "projetos.um": "projeto",
    "projetos.varios": "projetos",
    "projetos.vazio": "Novos projetos em breve.",
    "projetos.abrir": "Abrir fotos de",
    "projetos.capa": "Capa do projeto",
    "projetos.verBook": "Ver book",
    "projetos.foto": "foto",
    "projetos.fotos": "fotos",
    "book.fechar": "Fechar",
    "book.anterior": "Foto anterior",
    "book.proxima": "Próxima foto",
    "book.foto": "Foto",

    "objetivo.eyebrow": "05 — Objetivo",
    "objetivo.titulo": "Objetivo Profissional",
    "objetivo.lead": "O que busco na minha carreira.",
    "objetivo.meu": "Meu objetivo",
    "objetivo.habilidades": "Habilidades",
    "objetivo.tecnicas": "Técnicas",
    "objetivo.pessoais": "Pessoais",

    "contato.eyebrow": "06 — Contato",
    "contato.titulo": "Contato",
    "contato.lead": "Fico à disposição para novas oportunidades e conversas.",
    "contato.chamada": "Tem uma vaga, um projeto ou só quer conversar? Me manda um e-mail.",
    "contato.outros": "Outros canais",
    "contato.telefone": "Telefone",
    "contato.localizacao": "Localização",
    "contato.email": "E-mail",
  },

  en: {
    "title.sobre": "Cauê Gontijo — Portfolio",
    "title.formacao": "Education & Courses — Cauê Gontijo",
    "title.experiencia": "Work Experience — Cauê Gontijo",
    "title.projetos": "Projects — Cauê Gontijo",
    "title.objetivo": "Career Objective — Cauê Gontijo",
    "title.contato": "Contact — Cauê Gontijo",
    "meta.description":
      "Portfolio of Cauê Gontijo, Systems Analysis and Development student based in Goiânia, Brazil.",

    "nav.aria": "Main",
    "nav.sobre": "About",
    "nav.formacao": "Education",
    "nav.experiencia": "Experience",
    "nav.projetos": "Projects",
    "nav.objetivo": "Objective",
    "nav.contato": "Contact",
    "lang.aria": "Site language",

    "home.eyebrow": "Portfolio",
    "home.base": "Based in",
    "home.status": "Status",
    "home.statusValor": "Open to opportunities",
    "home.verProjetos": "See projects",
    "home.faleComigo": "Get in touch",
    "home.foto": "Your photo here",
    "home.sobreTitulo": "About me",
    "home.continue": "Keep exploring",
    "home.idx.formacao": "Education & Courses",
    "home.idx.formacaoHint": "Academic background",
    "home.idx.experiencia": "Work Experience",
    "home.idx.experienciaHint": "Where I've worked",
    "home.idx.projetos": "Projects",
    "home.idx.projetosHint": "Screenshots and details",
    "home.idx.objetivo": "Career Objective",
    "home.idx.objetivoHint": "Skills and focus",
    "home.idx.contato": "Contact",
    "home.idx.contatoHint": "Email, LinkedIn, GitHub",
    "home.atualmente": "Currently",
    "home.formacao": "Education",

    "formacao.eyebrow": "02 — Education",
    "formacao.titulo": "Education & Courses",
    "formacao.lead": "My academic background and complementary courses.",
    "formacao.academica": "Academic education",
    "formacao.cursos": "Courses and certifications",

    "experiencia.eyebrow": "03 — Experience",
    "experiencia.titulo": "Work Experience",
    "experiencia.lead": "My professional journey so far.",
    "experiencia.lista": "Experience",
    "experiencia.atual": "Current",

    "projetos.eyebrow": "04 — Projects",
    "projetos.titulo": "Projects",
    "projetos.lead": "Some of the work I've built. Click a project to see it.",
    "projetos.selecionados": "Selected work",
    "projetos.um": "project",
    "projetos.varios": "projects",
    "projetos.vazio": "New projects coming soon.",
    "projetos.abrir": "Open screenshots of",
    "projetos.capa": "Project cover",
    "projetos.verBook": "View gallery",
    "projetos.foto": "photo",
    "projetos.fotos": "photos",
    "book.fechar": "Close",
    "book.anterior": "Previous photo",
    "book.proxima": "Next photo",
    "book.foto": "Photo",

    "objetivo.eyebrow": "05 — Objective",
    "objetivo.titulo": "Career Objective",
    "objetivo.lead": "What I'm looking for in my career.",
    "objetivo.meu": "My objective",
    "objetivo.habilidades": "Skills",
    "objetivo.tecnicas": "Technical",
    "objetivo.pessoais": "Soft skills",

    "contato.eyebrow": "06 — Contact",
    "contato.titulo": "Contact",
    "contato.lead": "Always open to new opportunities and conversations.",
    "contato.chamada": "Got a job opening, a project or just want to chat? Send me an email.",
    "contato.outros": "Other channels",
    "contato.telefone": "Phone",
    "contato.localizacao": "Location",
    "contato.email": "Email",
  },

  es: {
    "title.sobre": "Cauê Gontijo — Portafolio",
    "title.formacao": "Formación y Cursos — Cauê Gontijo",
    "title.experiencia": "Experiencia Profesional — Cauê Gontijo",
    "title.projetos": "Proyectos — Cauê Gontijo",
    "title.objetivo": "Objetivo Profesional — Cauê Gontijo",
    "title.contato": "Contacto — Cauê Gontijo",
    "meta.description":
      "Portafolio de Cauê Gontijo, estudiante de Análisis y Desarrollo de Sistemas en Goiânia, Brasil.",

    "nav.aria": "Principal",
    "nav.sobre": "Sobre mí",
    "nav.formacao": "Formación",
    "nav.experiencia": "Experiencia",
    "nav.projetos": "Proyectos",
    "nav.objetivo": "Objetivo",
    "nav.contato": "Contacto",
    "lang.aria": "Idioma del sitio",

    "home.eyebrow": "Portafolio",
    "home.base": "Base",
    "home.status": "Estado",
    "home.statusValor": "Abierto a oportunidades",
    "home.verProjetos": "Ver proyectos",
    "home.faleComigo": "Hablemos",
    "home.foto": "Tu foto aquí",
    "home.sobreTitulo": "Sobre mí",
    "home.continue": "Sigue por aquí",
    "home.idx.formacao": "Formación y Cursos",
    "home.idx.formacaoHint": "Trayectoria académica",
    "home.idx.experiencia": "Experiencia Profesional",
    "home.idx.experienciaHint": "Dónde he trabajado",
    "home.idx.projetos": "Proyectos",
    "home.idx.projetosHint": "Capturas y detalles",
    "home.idx.objetivo": "Objetivo Profesional",
    "home.idx.objetivoHint": "Habilidades y enfoque",
    "home.idx.contato": "Contacto",
    "home.idx.contatoHint": "Correo, LinkedIn, GitHub",
    "home.atualmente": "Actualmente",
    "home.formacao": "Formación",

    "formacao.eyebrow": "02 — Formación",
    "formacao.titulo": "Formación y Cursos",
    "formacao.lead": "Mi trayectoria académica y cursos complementarios.",
    "formacao.academica": "Formación académica",
    "formacao.cursos": "Cursos y certificaciones",

    "experiencia.eyebrow": "03 — Experiencia",
    "experiencia.titulo": "Experiencia Profesional",
    "experiencia.lead": "Mi trayectoria en el mercado laboral.",
    "experiencia.lista": "Experiencias",
    "experiencia.atual": "Actual",

    "projetos.eyebrow": "04 — Proyectos",
    "projetos.titulo": "Proyectos",
    "projetos.lead": "Algunos trabajos que he desarrollado. Haz clic en un proyecto para verlo.",
    "projetos.selecionados": "Trabajos seleccionados",
    "projetos.um": "proyecto",
    "projetos.varios": "proyectos",
    "projetos.vazio": "Nuevos proyectos muy pronto.",
    "projetos.abrir": "Abrir fotos de",
    "projetos.capa": "Portada del proyecto",
    "projetos.verBook": "Ver galería",
    "projetos.foto": "foto",
    "projetos.fotos": "fotos",
    "book.fechar": "Cerrar",
    "book.anterior": "Foto anterior",
    "book.proxima": "Foto siguiente",
    "book.foto": "Foto",

    "objetivo.eyebrow": "05 — Objetivo",
    "objetivo.titulo": "Objetivo Profesional",
    "objetivo.lead": "Lo que busco en mi carrera.",
    "objetivo.meu": "Mi objetivo",
    "objetivo.habilidades": "Habilidades",
    "objetivo.tecnicas": "Técnicas",
    "objetivo.pessoais": "Personales",

    "contato.eyebrow": "06 — Contacto",
    "contato.titulo": "Contacto",
    "contato.lead": "Estoy disponible para nuevas oportunidades y conversaciones.",
    "contato.chamada": "¿Tienes una vacante, un proyecto o solo quieres conversar? Envíame un correo.",
    "contato.outros": "Otros canales",
    "contato.telefone": "Teléfono",
    "contato.localizacao": "Ubicación",
    "contato.email": "Correo",
  },
};

const LANG_KEY = "portfolio-lang";

function idiomaInicial() {
  const valido = (c) => IDIOMAS.some((i) => i.code === c);
  // 1) ?lang=en na URL  2) escolha salva  3) idioma do navegador  4) português
  const daUrl = new URLSearchParams(location.search).get("lang");
  if (valido(daUrl)) return daUrl;
  try {
    const salvo = localStorage.getItem(LANG_KEY);
    if (valido(salvo)) return salvo;
  } catch (e) {}
  const nav = (navigator.languages || [navigator.language || ""])
    .map((l) => String(l).slice(0, 2).toLowerCase())
    .find(valido);
  return nav || "pt";
}

let LANG = idiomaInicial();

function salvaIdioma() {
  try {
    localStorage.setItem(LANG_KEY, LANG);
  } catch (e) {}
}

// Um link com ?lang=en vale também para as próximas páginas
if (new URLSearchParams(location.search).has("lang")) salvaIdioma();

// Texto fixo da interface
function ui(chave) {
  return (UI[LANG] && UI[LANG][chave]) || UI.pt[chave] || chave;
}

// Texto do conteúdo: aceita string simples ou { pt, en, es }
function t(valor) {
  if (valor == null) return "";
  if (typeof valor === "string") return valor;
  return valor[LANG] || valor.pt || "";
}

function setIdioma(code) {
  if (!IDIOMAS.some((i) => i.code === code) || code === LANG) return;
  LANG = code;
  salvaIdioma();
  // Se a página foi aberta com ?lang=, atualiza para o link continuar certo
  const url = new URL(location.href);
  if (url.searchParams.has("lang")) {
    url.searchParams.set("lang", code);
    history.replaceState(null, "", url);
  }
  document.dispatchEvent(new CustomEvent("idioma-alterado"));
}

// Aplica as traduções nos elementos com data-i18n / data-i18n-aria
function aplicaTextosFixos() {
  const info = IDIOMAS.find((i) => i.code === LANG);
  document.documentElement.lang = info.html;

  const pagina = document.body.dataset.page;
  if (pagina) document.title = ui(`title.${pagina}`);
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = ui("meta.description");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = ui(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", ui(el.dataset.i18nAria));
  });

  document.querySelectorAll(".lang-switch button").forEach((b) => {
    const ativo = b.dataset.lang === LANG;
    b.classList.toggle("active", ativo);
    b.setAttribute("aria-pressed", ativo);
  });
}

// Cria o seletor PT · EN · ES no cabeçalho
function criaSeletorIdioma() {
  const header = document.querySelector(".header-inner");
  if (!header || header.querySelector(".lang-switch")) return;

  const wrap = document.createElement("div");
  wrap.className = "lang-switch";
  wrap.setAttribute("role", "group");
  wrap.setAttribute("data-i18n-aria", "lang.aria");
  wrap.innerHTML = IDIOMAS.map(
    (i) =>
      `<button type="button" data-lang="${i.code}" lang="${i.html}" title="${i.nome}" aria-label="${i.nome}">${i.label}</button>`
  ).join("");
  header.appendChild(wrap);

  wrap.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-lang]");
    if (b) setIdioma(b.dataset.lang);
  });
}
