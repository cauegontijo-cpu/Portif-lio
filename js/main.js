document.addEventListener("DOMContentLoaded", () => {
  // Ano atual no rodapé
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nome/cargo (usado no header/logo alt e no hero da página inicial)
  document.querySelectorAll("[data-nome]").forEach((el) => {
    el.textContent = SITE_DATA.profile.nome;
  });

  // Marca o link de navegação ativo com base em data-page no <body>
  const currentPage = document.body.dataset.page;
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });

  renderSobre();
  renderFormacao();
  renderExperiencia();
  renderObjetivo();
  renderContato();
});

function renderSobre() {
  const cargoEl = document.getElementById("hero-cargo");
  const sobreEl = document.getElementById("sobre-texto");
  const fotoEl = document.getElementById("foto-frame");
  if (!sobreEl) return;

  if (cargoEl) cargoEl.textContent = SITE_DATA.profile.cargo;
  sobreEl.textContent = SITE_DATA.profile.sobre;

  if (fotoEl && SITE_DATA.profile.foto) {
    fotoEl.innerHTML = `<img src="${SITE_DATA.profile.foto}" alt="${SITE_DATA.profile.nome}">`;
  }
}

function renderFormacao() {
  const formacaoEl = document.getElementById("lista-formacao");
  const cursosEl = document.getElementById("lista-cursos");
  if (!formacaoEl && !cursosEl) return;

  if (formacaoEl) {
    formacaoEl.innerHTML = SITE_DATA.formacoes.map(cardHTML).join("");
  }
  if (cursosEl) {
    cursosEl.innerHTML = SITE_DATA.cursos.map(cardHTML).join("");
  }
}

function cardHTML(item) {
  return `
    <div class="card">
      <div class="card-title">${item.curso}</div>
      <div class="card-meta">${item.instituicao} &middot; ${item.periodo}</div>
      <p class="card-desc">${item.descricao}</p>
    </div>`;
}

function renderExperiencia() {
  const listaEl = document.getElementById("lista-experiencia");
  if (!listaEl) return;

  listaEl.innerHTML = SITE_DATA.experiencias
    .map(
      (item) => `
    <div class="card">
      <div class="card-title">${item.cargo}</div>
      <div class="card-meta">${item.empresa} &middot; ${item.periodo}</div>
      <p class="card-desc">${item.descricao}</p>
    </div>`
    )
    .join("");
}

function renderObjetivo() {
  const textoEl = document.getElementById("objetivo-texto");
  const tagsEl = document.getElementById("objetivo-tags");
  if (!textoEl) return;

  textoEl.textContent = SITE_DATA.objetivo.texto;
  tagsEl.innerHTML = SITE_DATA.objetivo.habilidades
    .map((h) => `<span class="tag">${h}</span>`)
    .join("");
}

function renderContato() {
  const listEl = document.getElementById("contato-info");
  if (!listEl) return;

  const c = SITE_DATA.contato;
  listEl.innerHTML = `
    <li><span class="label">E-mail</span>${c.email}</li>
    <li><span class="label">Telefone</span><a href="${c.whatsapp}" target="_blank" rel="noopener">${c.telefone}</a></li>
    <li><span class="label">Localização</span>${c.localizacao}</li>
    <li><span class="label">LinkedIn</span><a href="${c.linkedin}">${c.linkedin}</a></li>
    <li><span class="label">GitHub</span><a href="${c.github}">${c.github}</a></li>
  `;
}
