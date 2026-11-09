/* ---------------------------------------------------------------------- */
/* Dados do site                                                          */
/* Edite os valores abaixo para atualizar o conteúdo de todas as páginas. */
/*                                                                        */
/* Idiomas: todo texto que muda com o idioma fica no formato              */
/*   { pt: "Português", en: "English", es: "Español" }                    */
/* Se algum idioma faltar, o site mostra a versão em português.           */
/* Textos que não mudam (nomes, links, anos) podem ser uma string comum.  */
/* ---------------------------------------------------------------------- */

const SITE_DATA = {
  profile: {
    nome: "Cauê Gontijo",
    cargo: {
      pt: "Estudante de Análise e Desenvolvimento de Sistemas (ADS)",
      en: "Systems Analysis and Development Student",
      es: "Estudiante de Análisis y Desarrollo de Sistemas",
    },
    foto: "img/foto-perfil.jpg",
    sobre: {
      pt:
        "Olá, me chamo Cauê, tenho 20 anos e estou no 4º período de Análise e Desenvolvimento " +
        "de Sistemas na PUC Goiás. Atuo como desenvolvedor Full Stack com foco em automação, " +
        "criando dashboards e sistemas internos que facilitam a rotina de quem trabalha comigo.",
      en:
        "Hi, I'm Cauê, I'm 20 years old and in my 4th semester of Systems Analysis and " +
        "Development at PUC Goiás. I work as a Full Stack developer focused on automation, " +
        "building dashboards and internal systems that make my coworkers' daily routine easier.",
      es:
        "Hola, me llamo Cauê, tengo 20 años y estoy en el 4º semestre de Análisis y Desarrollo " +
        "de Sistemas en la PUC Goiás. Trabajo como desarrollador Full Stack enfocado en " +
        "automatización, creando dashboards y sistemas internos que facilitan el día a día de " +
        "quienes trabajan conmigo.",
    },
  },

  formacoes: [
    {
      curso: {
        pt: "Análise e Desenvolvimento de Sistemas (ADS)",
        en: "Systems Analysis and Development",
        es: "Análisis y Desarrollo de Sistemas",
      },
      instituicao: {
        pt: "PUC-GO — Noturno",
        en: "PUC-GO — Evening classes",
        es: "PUC-GO — Turno nocturno",
      },
      periodo: {
        pt: "Início: jan 2025 · Previsão de conclusão: dez 2027",
        en: "Started: Jan 2025 · Expected graduation: Dec 2027",
        es: "Inicio: ene 2025 · Finalización prevista: dic 2027",
      },
      descricao: {
        pt: "Cursando o 4º período.",
        en: "Currently in the 4th semester.",
        es: "Cursando el 4º semestre.",
      },
    },
    {
      curso: { pt: "Ensino Médio", en: "High School", es: "Educación Secundaria" },
      instituicao: "Colégio Santa Clara",
      periodo: { pt: "Concluído", en: "Completed", es: "Finalizado" },
      descricao: "",
    },
  ],

  cursos: [
    {
      curso: { pt: "Inglês", en: "English", es: "Inglés" },
      instituicao: "CCBEU",
      periodo: { pt: "Avançado", en: "Advanced", es: "Avanzado" },
      descricao: {
        pt: "Formação em inglês.",
        en: "English language course.",
        es: "Formación en inglés.",
      },
    },
    {
      curso: { pt: "Inglês", en: "English", es: "Inglés" },
      instituicao: "Cultura Inglesa",
      periodo: { pt: "Avançado", en: "Advanced", es: "Avanzado" },
      descricao: {
        pt: "Formação em inglês.",
        en: "English language course.",
        es: "Formación en inglés.",
      },
    },
  ],

  /* atual: true marca a experiência com o selo "Atual" */
  experiencias: [
    {
      cargo: { pt: "Estagiário de TI", en: "IT Intern", es: "Pasante de TI" },
      empresa: {
        pt: "Ingoh — Instituto Goiano de Oncologia e Hematologia (Goiânia/GO)",
        en: "Ingoh — Goiás Institute of Oncology and Hematology (Goiânia, Brazil)",
        es: "Ingoh — Instituto Goiano de Oncología y Hematología (Goiânia, Brasil)",
      },
      periodo: {
        pt: "01/06/2026 - Presente",
        en: "Jun 2026 - Present",
        es: "01/06/2026 - Presente",
      },
      atual: true,
      descricao: {
        pt: "Desenvolvedor Web, Full Stack, suporte.",
        en: "Web development, Full Stack, IT support.",
        es: "Desarrollo web, Full Stack, soporte técnico.",
      },
    },
    {
      cargo: { pt: "Estagiário de TI", en: "IT Intern", es: "Pasante de TI" },
      empresa: {
        pt: "AGEHAB — Agência Goiana de Habitação (Goiânia/GO)",
        en: "AGEHAB — Goiás Housing Agency (Goiânia, Brazil)",
        es: "AGEHAB — Agencia Goiana de Vivienda (Goiânia, Brasil)",
      },
      periodo: {
        pt: "09/02/2026 - 07/05/2026",
        en: "Feb 2026 - May 2026",
        es: "09/02/2026 - 07/05/2026",
      },
      descricao: { pt: "Suporte técnico.", en: "Technical support.", es: "Soporte técnico." },
    },
  ],

  objetivo: {
    texto: {
      pt:
        "Busco uma vaga como Desenvolvedor Júnior para aplicar o que já faço no dia a dia: " +
        "interfaces com React, back-end em Java, Python e Node.js, bancos relacionais e " +
        "ferramentas como Git, Docker e Kafka, agregando valor técnico e prático à equipe.",
      en:
        "I'm looking for a Junior Developer position where I can apply what I already do every " +
        "day: React interfaces, back-end with Java, Python and Node.js, relational databases and " +
        "tools like Git, Docker and Kafka, adding technical and practical value to the team.",
      es:
        "Busco un puesto como Desarrollador Junior para aplicar lo que ya hago en el día a día: " +
        "interfaces con React, back-end en Java, Python y Node.js, bases de datos relacionales y " +
        "herramientas como Git, Docker y Kafka, aportando valor técnico y práctico al equipo.",
    },
    /* "Nome — Nível" vira habilidade técnica; sem " — " vira competência pessoal */
    habilidades: [
      { pt: "Python — Avançado", en: "Python — Advanced", es: "Python — Avanzado" },
      { pt: "Java — Avançado", en: "Java — Advanced", es: "Java — Avanzado" },
      { pt: "JavaScript — Avançado", en: "JavaScript — Advanced", es: "JavaScript — Avanzado" },
      { pt: "HTML, CSS e React — Avançado", en: "HTML, CSS and React — Advanced", es: "HTML, CSS y React — Avanzado" },
      { pt: "Full Stack — Avançado", en: "Full Stack — Advanced", es: "Full Stack — Avanzado" },
      { pt: "Kotlin (Android) — Conhecimento sólido", en: "Kotlin (Android) — Solid knowledge", es: "Kotlin (Android) — Conocimiento sólido" },
      { pt: "MySQL — Avançado", en: "MySQL — Advanced", es: "MySQL — Avanzado" },
      { pt: "PostgreSQL — Avançado", en: "PostgreSQL — Advanced", es: "PostgreSQL — Avanzado" },
      { pt: "Oracle — Intermediário", en: "Oracle — Intermediate", es: "Oracle — Intermedio" },
      { pt: "Pacote Office — Avançado", en: "Microsoft Office — Advanced", es: "Paquete Office — Avanzado" },
      { pt: "Hardware — Avançado", en: "Hardware — Advanced", es: "Hardware — Avanzado" },
      { pt: "Empatia", en: "Empathy", es: "Empatía" },
      { pt: "Trabalho em equipe", en: "Teamwork", es: "Trabajo en equipo" },
      { pt: "Paciente", en: "Patient", es: "Paciente" },
      { pt: "Organizado", en: "Organized", es: "Organizado" },
      { pt: "Prático", en: "Practical", es: "Práctico" },
    ],
  },

  /* -------------------------------------------------------------------- */
  /* Projetos                                                             */
  /* Coloque as fotos em img/projetos/<pasta-do-projeto>/ e liste aqui.   */
  /* - capa: foto que aparece no card (se vazio, usa a primeira foto).    */
  /* - capaPosicao (opcional): parte da capa que aparece se for cortada,  */
  /*   ex.: "left center". O padrão é o centro.                           */
  /* - fotos: cada item pode ser só o caminho ("img/...jpg") ou um objeto */
  /*   { src: "img/...jpg", legenda: { pt: "...", en: "...", es: "..." } }*/
  /* - Enquanto o src estiver vazio, aparece um espaço reservado.         */
  /* -------------------------------------------------------------------- */
  projetos: [
    {
      titulo: "Flappy Fish",
      categoria: { pt: "Jogo · Java Swing", en: "Game · Java Swing", es: "Juego · Java Swing" },
      ano: "2025",
      descricao: {
        pt:
          "Meu primeiro projeto na faculdade: uma releitura do Flappy Bird no fundo do mar, feita " +
          "em Java com Swing. Tem modo para 1 jogador e para 2 jogadores em tela dividida, " +
          "pontuação e um ranking dos 5 melhores salvo localmente, que continua lá depois que o " +
          "jogo é fechado.",
        en:
          "My first college project: an underwater take on Flappy Bird, built in Java with Swing. " +
          "It has a 1-player mode and a 2-player split-screen mode, scoring and a top-5 " +
          "leaderboard saved locally, so it's still there after the game is closed.",
        es:
          "Mi primer proyecto en la facultad: una versión de Flappy Bird en el fondo del mar, " +
          "hecha en Java con Swing. Tiene modo de 1 jugador y de 2 jugadores con pantalla " +
          "dividida, puntuación y un ranking de los 5 mejores guardado localmente, que sigue ahí " +
          "después de cerrar el juego.",
      },
      capa: "img/projetos/flappy-fish/capa.jpg",
      fotos: [
        { src: "img/projetos/flappy-fish/menu-principal.jpg", legenda: { pt: "Menu principal", en: "Main menu", es: "Menú principal" } },
        { src: "img/projetos/flappy-fish/jogo-1-jogador.png", legenda: { pt: "Partida no modo 1 jogador", en: "1-player match", es: "Partida en modo 1 jugador" } },
        { src: "img/projetos/flappy-fish/jogo-2-jogadores.png", legenda: { pt: "Modo 2 jogadores com tela dividida", en: "2-player split-screen mode", es: "Modo 2 jugadores con pantalla dividida" } },
        { src: "img/projetos/flappy-fish/game-over.jpg", legenda: { pt: "Tela de game over", en: "Game over screen", es: "Pantalla de game over" } },
        { src: "img/projetos/flappy-fish/ranking.png", legenda: { pt: "Ranking dos 5 melhores, salvo localmente", en: "Top-5 leaderboard, saved locally", es: "Ranking de los 5 mejores, guardado localmente" } },
      ],
    },
    {
      titulo: "Estoque TI",
      categoria: { pt: "Sistema web · Full Stack", en: "Web app · Full Stack", es: "Sistema web · Full Stack" },
      ano: "2026",
      descricao: {
        pt:
          "Sistema web que desenvolvi no INGOH para substituir o controle manual do estoque da TI. " +
          "Registra entradas, saídas, devoluções e perdas com histórico, mostra o que cada " +
          "colaborador recebeu e monta a lista de compras sozinho quando um item chega ao mínimo, " +
          "gerando o formulário de compras em Word com um clique. Tem perfis de acesso, auditoria " +
          "e foco em segurança. Feito com Python (FastAPI), PostgreSQL, React e Docker.",
        en:
          "A web app I built at INGOH to replace the IT department's manual inventory control. " +
          "It records stock in, stock out, returns and losses with full history, shows what each " +
          "employee has received and builds the shopping list on its own when an item hits its " +
          "minimum, generating the purchase form in Word with one click. It has access roles, " +
          "auditing and a strong focus on security. Built with Python (FastAPI), PostgreSQL, " +
          "React and Docker.",
        es:
          "Sistema web que desarrollé en el INGOH para reemplazar el control manual del inventario " +
          "de TI. Registra entradas, salidas, devoluciones y pérdidas con historial, muestra lo " +
          "que recibió cada colaborador y arma la lista de compras automáticamente cuando un " +
          "artículo llega al mínimo, generando el formulario de compras en Word con un clic. Tiene " +
          "perfiles de acceso, auditoría y foco en seguridad. Hecho con Python (FastAPI), " +
          "PostgreSQL, React y Docker.",
      },
      capa: "img/projetos/estoque-ti/capa.png",
      fotos: [
        { src: "img/projetos/estoque-ti/painel.jpg", legenda: { pt: "Painel com a visão geral do estoque", en: "Dashboard with an inventory overview", es: "Panel con la visión general del inventario" } },
        { src: "img/projetos/estoque-ti/painel-escuro.jpg", legenda: { pt: "O mesmo painel no modo escuro", en: "The same dashboard in dark mode", es: "El mismo panel en modo oscuro" } },
        { src: "img/projetos/estoque-ti/itens.jpg", legenda: { pt: "Itens em estoque, com busca e alerta de reposição", en: "Items in stock, with search and restock alerts", es: "Artículos en inventario, con búsqueda y alerta de reposición" } },
        { src: "img/projetos/estoque-ti/detalhe-item.jpg", legenda: { pt: "Detalhe do item: movimentações e histórico com estorno", en: "Item detail: movements and history with reversals", es: "Detalle del artículo: movimientos e historial con reversión" } },
        { src: "img/projetos/estoque-ti/lista-de-compras.jpg", legenda: { pt: "Lista de compras automática pelo estoque mínimo", en: "Automatic shopping list based on minimum stock", es: "Lista de compras automática según el stock mínimo" } },
      ],
    },
    {
      titulo: { pt: "Material Esterilizável", en: "Sterilizable Supplies", es: "Material Esterilizable" },
      categoria: { pt: "Sistema web · Full Stack", en: "Web app · Full Stack", es: "Sistema web · Full Stack" },
      ano: "2026",
      descricao: {
        pt:
          "Sistema que fiz para o INGOH controlar o estoque de material esterilizável. Cobre o " +
          "cadastro de insumos, setores e usuários, os lotes com validade e o fluxo completo do " +
          "expurgo, do recebimento do material sujo até a liberação de volta ao setor, registrando " +
          "quem fez cada etapa. Gera relatórios em Excel e o protocolo de entrega em PDF. Feito com " +
          "Python (FastAPI), PostgreSQL, React e Docker.",
        en:
          "A system I built for INGOH to manage its stock of sterilizable supplies. It covers " +
          "supplies, departments and users, batches with expiration dates and the full " +
          "decontamination workflow, from receiving dirty material to releasing it back to the " +
          "department, recording who did each step. It generates Excel reports and the delivery " +
          "receipt as a PDF. Built with Python (FastAPI), PostgreSQL, React and Docker.",
        es:
          "Sistema que hice para el INGOH para controlar el inventario de material esterilizable. " +
          "Cubre el registro de insumos, sectores y usuarios, los lotes con fecha de vencimiento y " +
          "el flujo completo de descontaminación, desde la recepción del material sucio hasta su " +
          "liberación de vuelta al sector, registrando quién hizo cada etapa. Genera informes en " +
          "Excel y el protocolo de entrega en PDF. Hecho con Python (FastAPI), PostgreSQL, React y " +
          "Docker.",
      },
      capa: "img/projetos/material-esterilizavel/capa.png",
      fotos: [
        { src: "img/projetos/material-esterilizavel/login.jpg", legenda: { pt: "Tela de login", en: "Login screen", es: "Pantalla de inicio de sesión" } },
        { src: "img/projetos/material-esterilizavel/painel.jpg", legenda: { pt: "Painel com lotes, expurgo e não conformidades", en: "Dashboard with batches, decontamination and non-conformities", es: "Panel con lotes, descontaminación y no conformidades" } },
        { src: "img/projetos/material-esterilizavel/relatorios.jpg", legenda: { pt: "Relatório gerencial em Excel e protocolo em PDF", en: "Management report in Excel and receipt in PDF", es: "Informe gerencial en Excel y protocolo en PDF" } },
      ],
    },
    {
      titulo: "FinPilot",
      categoria: { pt: "Sistema web · Finanças pessoais", en: "Web app · Personal finance", es: "Sistema web · Finanzas personales" },
      ano: "2026",
      descricao: {
        pt:
          "Plataforma de finanças pessoais que construí do zero em Python. Nasceu de um incômodo: " +
          "apps e planilhas contam a compra no cartão duas vezes e tratam transferência como " +
          "receita. No FinPilot, cada número diz se já aconteceu, se é do mês ou se ainda vai " +
          "vencer. Tem contas, cartões com parcelas e faturas, orçamentos, metas, recorrências, " +
          "importação de CSV, relatórios em PDF e previsão de saldo para 90 dias. Feito com " +
          "FastAPI, PostgreSQL, HTMX, Tailwind, Redis e Docker.",
        en:
          "A personal finance platform I built from scratch in Python. It came from a pet peeve: " +
          "apps and spreadsheets count credit card purchases twice and treat transfers as income. " +
          "In FinPilot, every number tells you whether it has already happened, whether it belongs " +
          "to this month or whether it is still coming due. It has accounts, credit cards with " +
          "installments and statements, budgets, goals, recurring entries, CSV import, PDF reports " +
          "and a 90-day balance forecast. Built with FastAPI, PostgreSQL, HTMX, Tailwind, Redis " +
          "and Docker.",
        es:
          "Plataforma de finanzas personales que construí desde cero en Python. Nació de una " +
          "molestia: las apps y hojas de cálculo cuentan dos veces las compras con tarjeta y tratan " +
          "las transferencias como ingresos. En FinPilot, cada número indica si ya ocurrió, si es " +
          "del mes o si todavía va a vencer. Tiene cuentas, tarjetas con cuotas y resúmenes, " +
          "presupuestos, metas, recurrencias, importación de CSV, informes en PDF y previsión de " +
          "saldo a 90 días. Hecho con FastAPI, PostgreSQL, HTMX, Tailwind, Redis y Docker.",
      },
      capa: "img/projetos/finpilot/capa.png",
      capaPosicao: "left center",
      fotos: [
        { src: "img/projetos/finpilot/01-pagina-inicial.png", legenda: { pt: "Página inicial", en: "Landing page", es: "Página de inicio" } },
        { src: "img/projetos/finpilot/02-login.png", legenda: { pt: "Login", en: "Login", es: "Inicio de sesión" } },
        { src: "img/projetos/finpilot/03-dashboard.png", legenda: { pt: "Dashboard com indicadores e gráficos do mês", en: "Dashboard with the month's indicators and charts", es: "Dashboard con indicadores y gráficos del mes" } },
        { src: "img/projetos/finpilot/04-transacoes.png", legenda: { pt: "Transações com filtros e resumo do mês", en: "Transactions with filters and monthly summary", es: "Transacciones con filtros y resumen del mes" } },
        { src: "img/projetos/finpilot/04b-novo-lancamento.png", legenda: { pt: "Novo lançamento de receita ou despesa", en: "New income or expense entry", es: "Nuevo registro de ingreso o gasto" } },
        { src: "img/projetos/finpilot/05-contas.png", legenda: { pt: "Contas e saldo total disponível", en: "Accounts and total available balance", es: "Cuentas y saldo total disponible" } },
        { src: "img/projetos/finpilot/06-cartoes.png", legenda: { pt: "Cartões de crédito com limite e fatura atual", en: "Credit cards with limit and current statement", es: "Tarjetas de crédito con límite y resumen actual" } },
        { src: "img/projetos/finpilot/07-cartao-faturas-e-compras.png", legenda: { pt: "Faturas e compras de um cartão", en: "A card's statements and purchases", es: "Resúmenes y compras de una tarjeta" } },
        { src: "img/projetos/finpilot/08-detalhe-da-fatura.png", legenda: { pt: "Detalhe da fatura com as parcelas", en: "Statement detail with installments", es: "Detalle del resumen con las cuotas" } },
        { src: "img/projetos/finpilot/09-orcamentos.png", legenda: { pt: "Orçamentos por categoria com alertas de limite", en: "Budgets by category with limit alerts", es: "Presupuestos por categoría con alertas de límite" } },
        { src: "img/projetos/finpilot/10-metas.png", legenda: { pt: "Metas financeiras", en: "Financial goals", es: "Metas financieras" } },
        { src: "img/projetos/finpilot/11-detalhe-da-meta.png", legenda: { pt: "Detalhe da meta com estimativa de conclusão", en: "Goal detail with estimated completion", es: "Detalle de la meta con estimación de cumplimiento" } },
        { src: "img/projetos/finpilot/12-recorrencias.png", legenda: { pt: "Lançamentos recorrentes", en: "Recurring entries", es: "Registros recurrentes" } },
        { src: "img/projetos/finpilot/13-previsao-de-caixa.png", legenda: { pt: "Previsão de saldo para os próximos 90 dias", en: "Balance forecast for the next 90 days", es: "Previsión de saldo para los próximos 90 días" } },
        { src: "img/projetos/finpilot/14-relatorios.png", legenda: { pt: "Relatórios disponíveis", en: "Available reports", es: "Informes disponibles" } },
        { src: "img/projetos/finpilot/15-relatorio-categorias.png", legenda: { pt: "Relatório de gastos por categoria", en: "Spending by category report", es: "Informe de gastos por categoría" } },
        { src: "img/projetos/finpilot/16-importacao-csv.png", legenda: { pt: "Importação de extrato em CSV", en: "CSV bank statement import", es: "Importación de extracto en CSV" } },
        { src: "img/projetos/finpilot/17-categorias.png", legenda: { pt: "Categorias de despesas e receitas", en: "Expense and income categories", es: "Categorías de gastos e ingresos" } },
        { src: "img/projetos/finpilot/18-transferencias.png", legenda: { pt: "Transferências entre contas próprias", en: "Transfers between own accounts", es: "Transferencias entre cuentas propias" } },
        { src: "img/projetos/finpilot/19-auditoria.png", legenda: { pt: "Registro de auditoria da conta", en: "Account audit log", es: "Registro de auditoría de la cuenta" } },
        { src: "img/projetos/finpilot/20-configuracoes.png", legenda: { pt: "Configurações de perfil, senha e sessões", en: "Profile, password and session settings", es: "Configuración de perfil, contraseña y sesiones" } },
        { src: "img/projetos/finpilot/21-dashboard-escuro.png", legenda: { pt: "Dashboard no modo escuro", en: "Dashboard in dark mode", es: "Dashboard en modo oscuro" } },
        { src: "img/projetos/finpilot/22-transacoes-escuro.png", legenda: { pt: "Transações no modo escuro", en: "Transactions in dark mode", es: "Transacciones en modo oscuro" } },
        { src: "img/projetos/finpilot/23-cartoes-escuro.png", legenda: { pt: "Cartões no modo escuro", en: "Cards in dark mode", es: "Tarjetas en modo oscuro" } },
        { src: "img/projetos/finpilot/24-celular-dashboard.png", legenda: { pt: "Dashboard no celular", en: "Dashboard on mobile", es: "Dashboard en el celular" } },
        { src: "img/projetos/finpilot/25-celular-transacoes.png", legenda: { pt: "Transações no celular", en: "Transactions on mobile", es: "Transacciones en el celular" } },
        { src: "img/projetos/finpilot/26-celular-cartoes.png", legenda: { pt: "Cartões no celular", en: "Cards on mobile", es: "Tarjetas en el celular" } },
      ],
    },
  ],

  contato: {
    email: "cauegontijo@gmail.com",
    telefone: "+55 (62) 9 9692-9240",
    localizacao: { pt: "Goiânia/GO", en: "Goiânia, Brazil", es: "Goiânia, Brasil" },
    whatsapp: "https://wa.me/5562996929240",
    linkedin: "https://www.linkedin.com/in/cau%C3%AA-gontijo-b39938355",
    linkedinLabel: "linkedin.com/in/cauê-gontijo",
    github: "https://github.com/cauegontijo-cpu",
  },
};
