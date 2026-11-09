document.addEventListener("DOMContentLoaded", () => {
  // Ano atual no rodapé
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nome (usado no header, hero e rodapé)
  document.querySelectorAll("[data-nome]").forEach((el) => {
    el.textContent = SITE_DATA.profile.nome;
  });

  // Marca o link de navegação ativo com base em data-page no <body>
  const currentPage = document.body.dataset.page;
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  criaSeletorIdioma();
  renderTudo();
  setupMenu();
  iniciaProjetos();

  // Troca de idioma: redesenha os textos sem recarregar a página
  document.addEventListener("idioma-alterado", renderTudo);
});

function renderTudo() {
  aplicaTextosFixos();
  renderFooter();
  renderSobre();
  renderFormacao();
  renderExperiencia();
  renderProjetos();
  renderObjetivo();
  renderContato();
}

// No celular o menu rola para o lado; centraliza a aba atual
function setupMenu() {
  const nav = document.querySelector(".nav-bar");
  const ativo = nav && nav.querySelector("a.active");
  if (!ativo || nav.scrollWidth <= nav.clientWidth) return;

  const a = ativo.getBoundingClientRect();
  const n = nav.getBoundingClientRect();
  nav.scrollLeft += a.left - n.left - (n.width - a.width) / 2;
}

function renderFooter() {
  const linksEl = document.getElementById("footer-links");
  if (!linksEl) return;

  const c = SITE_DATA.contato;
  linksEl.innerHTML = `
    <li><a href="mailto:${c.email}">${ui("contato.email")}</a></li>
    <li><a href="${c.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
    <li><a href="${c.github}" target="_blank" rel="noopener">GitHub</a></li>
    <li><a href="${c.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
  `;
}

function renderSobre() {
  const cargoEl = document.getElementById("hero-cargo");
  const sobreEl = document.getElementById("sobre-texto");
  const fotoEl = document.getElementById("foto-frame");
  if (!sobreEl) return;

  if (cargoEl) cargoEl.textContent = t(SITE_DATA.profile.cargo).trim();
  sobreEl.textContent = t(SITE_DATA.profile.sobre);

  if (fotoEl && SITE_DATA.profile.foto && !fotoEl.querySelector("img")) {
    fotoEl.innerHTML = `<img src="${SITE_DATA.profile.foto}" alt="${SITE_DATA.profile.nome}">`;
  }

  const localEl = document.getElementById("hero-local");
  if (localEl) localEl.textContent = t(SITE_DATA.contato.localizacao);

  // Resumo: experiência atual e formação em andamento
  const atual = SITE_DATA.experiencias[0];
  const atualEl = document.getElementById("resumo-atual");
  if (atualEl && atual) {
    atualEl.innerHTML = `
      <div class="fact-label">${ui("home.atualmente")}</div>
      <div class="fact-title">${t(atual.cargo)}</div>
      <div class="fact-sub">${t(atual.empresa)}</div>`;
  }

  const formacao = SITE_DATA.formacoes[0];
  const formacaoEl = document.getElementById("resumo-formacao");
  if (formacaoEl && formacao) {
    formacaoEl.innerHTML = `
      <div class="fact-label">${ui("home.formacao")}</div>
      <div class="fact-title">${t(formacao.curso)}</div>
      <div class="fact-sub">${t(formacao.instituicao)} &middot; ${t(formacao.descricao)}</div>`;
  }
}

function renderFormacao() {
  const formacaoEl = document.getElementById("lista-formacao");
  const cursosEl = document.getElementById("lista-cursos");

  if (formacaoEl) {
    formacaoEl.innerHTML = SITE_DATA.formacoes
      .map((item) => timelineHTML(t(item.periodo), t(item.curso), t(item.instituicao), t(item.descricao)))
      .join("");
  }
  if (cursosEl) {
    cursosEl.innerHTML = SITE_DATA.cursos
      .map((item) => timelineHTML(t(item.periodo), t(item.curso), t(item.instituicao), t(item.descricao)))
      .join("");
  }
}

function renderExperiencia() {
  const listaEl = document.getElementById("lista-experiencia");
  if (!listaEl) return;

  listaEl.innerHTML = SITE_DATA.experiencias
    .map((item) => {
      const atual = item.atual ?? /presente/i.test(t(item.periodo));
      return timelineHTML(t(item.periodo), t(item.cargo), t(item.empresa), t(item.descricao), atual);
    })
    .join("");
}

function timelineHTML(data, titulo, local, descricao, atual) {
  return `
    <li class="timeline-item">
      <div class="timeline-date">
        ${data}
        ${atual ? `<br><span class="badge">${ui("experiencia.atual")}</span>` : ""}
      </div>
      <div>
        <h3 class="timeline-title">${titulo}</h3>
        <div class="timeline-place">${local}</div>
        ${descricao ? `<p class="timeline-desc">${descricao}</p>` : ""}
      </div>
    </li>`;
}

function renderObjetivo() {
  const textoEl = document.getElementById("objetivo-texto");
  if (!textoEl) return;

  textoEl.textContent = t(SITE_DATA.objetivo.texto);

  // "Python — Avançado" vira técnica com nível; sem nível vira competência pessoal
  const tecnicas = [];
  const pessoais = [];
  SITE_DATA.objetivo.habilidades.forEach((h) => {
    const [nome, nivel] = t(h).split(/\s+—\s+/);
    if (nivel) tecnicas.push({ nome, nivel });
    else pessoais.push(nome);
  });

  const tecnicasEl = document.getElementById("objetivo-tecnicas");
  if (tecnicasEl) {
    tecnicasEl.innerHTML = tecnicas
      .map((t) => `<li>${t.nome}<span class="leader"></span><span class="level">${t.nivel}</span></li>`)
      .join("");
  }

  const pessoaisEl = document.getElementById("objetivo-tags");
  if (pessoaisEl) {
    pessoaisEl.innerHTML = pessoais.map((p) => `<span class="tag">${p}</span>`).join("");
  }
}

function renderContato() {
  const listEl = document.getElementById("contato-info");
  if (!listEl) return;

  const c = SITE_DATA.contato;

  const mailEl = document.getElementById("contato-email");
  if (mailEl) {
    mailEl.href = `mailto:${c.email}`;
    mailEl.textContent = c.email;
  }

  listEl.innerHTML = `
    <li><span class="label">${ui("contato.telefone")}</span><a href="${c.whatsapp}" target="_blank" rel="noopener">${c.telefone}</a></li>
    <li><span class="label">${ui("contato.localizacao")}</span><span>${t(c.localizacao)}</span></li>
    <li><span class="label">LinkedIn</span><a href="${c.linkedin}" target="_blank" rel="noopener">${c.linkedinLabel || c.linkedin}</a></li>
    <li><span class="label">GitHub</span><a href="${c.github}" target="_blank" rel="noopener">${c.github.replace(/^https?:\/\//, "")}</a></li>
  `;
}

/* ---------------------------------------------------------------------- */
/* Projetos + book de fotos                                               */
/* ---------------------------------------------------------------------- */

// Aceita foto como string ("img/a.jpg") ou objeto ({ src, legenda })
function normalizaFoto(foto) {
  return typeof foto === "string" ? { src: foto, legenda: "" } : foto;
}

function slugify(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function renderProjetos() {
  const gridEl = document.getElementById("lista-projetos");
  if (!gridEl) return;

  const projetos = SITE_DATA.projetos || [];
  const totalEl = document.getElementById("projetos-total");
  if (totalEl) {
    totalEl.textContent = `${projetos.length} ${ui(projetos.length === 1 ? "projetos.um" : "projetos.varios")}`;
  }

  if (!projetos.length) {
    gridEl.innerHTML = `<p class="empty-note">${ui("projetos.vazio")}</p>`;
    return;
  }

  gridEl.innerHTML = projetos
    .map((p, i) => {
      const fotos = p.fotos.map(normalizaFoto);
      const capa = p.capa || (fotos.find((f) => f.src) || {}).src;
      const qtd = fotos.length;
      const meta = [t(p.categoria), p.ano].filter(Boolean).join(" · ");
      return `
      <button type="button" class="project-card" data-index="${i}" aria-label="${ui("projetos.abrir")} ${t(p.titulo)}">
        <div class="project-cover">
          ${capa ? `<img src="${capa}" alt="" loading="lazy"${p.capaPosicao ? ` style="object-position: ${p.capaPosicao}"` : ""}>` : '<div class="placeholder">${ui("projetos.capa")}</div>'}
          <span class="open-hint">${ui("projetos.verBook")} &middot; ${qtd} ${ui(qtd === 1 ? "projetos.foto" : "projetos.fotos")}</span>
        </div>
        <div class="project-info">
          <span class="project-num">${pad(i + 1)}</span>
          <h3 class="project-title">${t(p.titulo)}</h3>
          <span class="project-meta">${meta}</span>
        </div>
      </button>`;
    })
    .join("");
}

// Liga os cliques e o book uma única vez (o grid é redesenhado ao trocar idioma)
function iniciaProjetos() {
  const gridEl = document.getElementById("lista-projetos");
  const projetos = SITE_DATA.projetos || [];
  if (!gridEl || !projetos.length) return;

  const book = criaBook(projetos);
  gridEl.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (card) book.abrir(Number(card.dataset.index), card);
  });

  // Permite abrir um projeto direto pelo link (ex.: projetos.html#finpilot)
  const hash = decodeURIComponent(location.hash.slice(1));
  const inicial = projetos.findIndex((p) => slugProjeto(p) === hash);
  if (inicial >= 0) book.abrir(inicial);
}

// O link do projeto usa sempre o título em português, para não mudar com o idioma
function slugProjeto(p) {
  return slugify(typeof p.titulo === "string" ? p.titulo : p.titulo.pt);
}

function criaBook(projetos) {
  const el = document.getElementById("book");
  const frame = document.getElementById("book-frame");
  const caption = document.getElementById("book-caption");
  const thumbs = document.getElementById("book-thumbs");
  const prev = el.querySelector(".book-nav.prev");
  const next = el.querySelector(".book-nav.next");

  let projeto = null;
  let fotos = [];
  let atual = 0;
  let origem = null;

  function abrir(index, gatilho) {
    projeto = projetos[index];
    fotos = projeto.fotos.map(normalizaFoto);
    origem = gatilho || null;

    document.getElementById("book-cat").textContent =
      [t(projeto.categoria), projeto.ano].filter(Boolean).join(" · ");
    document.getElementById("book-title").textContent = t(projeto.titulo);
    document.getElementById("book-desc").textContent = t(projeto.descricao);
    const linkEl = document.getElementById("book-link");
    linkEl.hidden = !projeto.link;
    if (projeto.link) linkEl.href = projeto.link;
    document.getElementById("book-total").textContent = pad(fotos.length);

    thumbs.innerHTML = fotos
      .map(
        (f, i) => `
        <button type="button" class="book-thumb" data-i="${i}" aria-label="${ui("book.foto")} ${i + 1}">
          ${f.src ? `<img src="${f.src}" alt="" loading="lazy">` : `<span>${pad(i + 1)}</span>`}
        </button>`
      )
      .join("");
    thumbs.hidden = fotos.length < 2;

    el.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(() => el.classList.add("is-open"));
    history.replaceState(null, "", `#${slugProjeto(projeto)}`);

    mostrar(0, true);
    el.querySelector(".book-close").focus();
  }

  function fechar() {
    el.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    history.replaceState(null, "", location.pathname + location.search);
    setTimeout(() => {
      el.hidden = true;
      frame.innerHTML = "";
    }, 250);
    if (origem) origem.focus();
  }

  function mostrar(i, imediato) {
    if (i < 0 || i >= fotos.length) return;
    atual = i;
    const foto = fotos[i];

    const trocar = () => {
      frame.innerHTML = foto.src
        ? `<img src="${foto.src}" alt="${t(foto.legenda) || `${t(projeto.titulo)} — ${ui("book.foto")} ${i + 1}`}">`
        : `<div class="placeholder">${ui("book.foto")} ${pad(i + 1)}</div>`;
      caption.textContent = t(foto.legenda);
      frame.classList.remove("is-changing");
    };

    if (imediato) {
      trocar();
    } else {
      frame.classList.add("is-changing");
      setTimeout(trocar, 180);
    }

    document.getElementById("book-atual").textContent = pad(i + 1);
    prev.disabled = i === 0;
    next.disabled = i === fotos.length - 1;

    thumbs.querySelectorAll(".book-thumb").forEach((t, n) => {
      t.classList.toggle("active", n === i);
      if (n === i) t.scrollIntoView({ block: "nearest", inline: "nearest" });
    });

    // Pré-carrega a próxima foto
    const seguinte = fotos[i + 1];
    if (seguinte && seguinte.src) new Image().src = seguinte.src;
  }

  prev.addEventListener("click", () => mostrar(atual - 1));
  next.addEventListener("click", () => mostrar(atual + 1));
  el.querySelector(".book-close").addEventListener("click", fechar);

  thumbs.addEventListener("click", (e) => {
    const t = e.target.closest(".book-thumb");
    if (t) mostrar(Number(t.dataset.i));
  });

  document.addEventListener("keydown", (e) => {
    if (el.hidden) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") mostrar(atual - 1);
    if (e.key === "ArrowRight") mostrar(atual + 1);
  });

  // Arrastar para os lados no celular
  let toqueX = null;
  frame.addEventListener("touchstart", (e) => (toqueX = e.touches[0].clientX), { passive: true });
  frame.addEventListener("touchend", (e) => {
    if (toqueX === null) return;
    const dx = e.changedTouches[0].clientX - toqueX;
    if (Math.abs(dx) > 50) mostrar(atual + (dx < 0 ? 1 : -1));
    toqueX = null;
  });

  return { abrir };
}
