/* ---------------------------------------------------------------------- */
/* Dados do site                                                          */
/* Edite os valores abaixo para atualizar o conteúdo de todas as páginas. */
/* ---------------------------------------------------------------------- */

const SITE_DATA = {
  profile: {
    nome: "Cauê Gontijo",
    cargo: "Estudante de Análise e Desenvolvimento de Sistemas (ADS) ",
    foto: "img/foto-perfil.jpg",
    sobre:
      "Olá, me chamo Cauê, tenho 20 anos e estou no 4º período de Análise e Desenvolvimento " +
      "de Sistemas na PUC Goiás. Atuo como desenvolvedor Full Stack com foco em automação, " +
      "criando dashboards e sistemas internos que facilitam a rotina de quem trabalha comigo.",
  },

  formacoes: [
    {
      curso: "Análise e Desenvolvimento de Sistemas (ADS)",
      instituicao: "PUC-GO — Noturno",
      periodo: "Início: jan 2025 · Previsão de conclusão: dez 2027",
      descricao: "Cursando o 4º período.",
    },
    {
      curso: "Ensino Médio",
      instituicao: "Colégio Santa Clara",
      periodo: "Concluído",
      descricao: "",
    },
  ],

  cursos: [
    {
      curso: "Inglês",
      instituicao: "CCBEU",
      periodo: "Avançado",
      descricao: "Formação em inglês.",
    },
    {
      curso: "Inglês",
      instituicao: "Cultura Inglesa",
      periodo: "Avançado",
      descricao: "Formação em inglês.",
    },
  ],

  experiencias: [
    {
      cargo: "Estagiário de TI",
      empresa: "Ingoh — Instituto Goiano de Oncologia e Hematologia (Goiânia/GO)",
      periodo: "01/06/2026 - Presente",
      descricao: "Desenvolvedor Web, Full Stack, suporte.",
    },
    {
      cargo: "Estagiário de TI",
      empresa: "AGEHAB — Agência Goiana de Habitação (Goiânia/GO)",
      periodo: "09/02/2026 - 07/05/2026",
      descricao: "Suporte técnico.",
    },
  ],

  objetivo: {
    texto:
      "Busco uma vaga como Desenvolvedor Júnior para aplicar o que já faço no dia a dia: " +
      "interfaces com React, back-end em Java, Python e Node.js, bancos relacionais e " +
      "ferramentas como Git, Docker e Kafka, agregando valor técnico e prático à equipe.",
    habilidades: [
      "Python — Avançado",
      "Java — Avançado",
      "JavaScript — Avançado",
      "HTML, CSS e React — Avançado",
      "Full Stack — Avançado",
      "Kotlin (Android) — Conhecimento sólido",
      "MySQL — Avançado",
      "PostgreSQL — Avançado",
      "Oracle — Intermediário",
      "Pacote Office — Avançado",
      "Hardware — Avançado",
      "Empatia",
      "Trabalho em equipe",
      "Paciente",
      "Organizado",
      "Prático",
    ],
  },

  /* -------------------------------------------------------------------- */
  /* Projetos                                                             */
  /* Coloque as fotos em img/projetos/<pasta-do-projeto>/ e liste aqui.   */
  /* - capa: foto que aparece no card (se vazio, usa a primeira foto).    */
/* - capaPosicao (opcional): parte da capa que aparece se for cortada,  */
/*   ex.: "left center". O padrão é o centro.                           */
  /* - fotos: cada item pode ser só o caminho ("img/...jpg") ou um objeto */
  /*   { src: "img/...jpg", legenda: "Texto abaixo da foto" }.            */
  /* - Enquanto o src estiver vazio, aparece um espaço reservado.         */
  /* -------------------------------------------------------------------- */
  projetos: [
    {
      titulo: "Flappy Fish",
      categoria: "Jogo · Java Swing",
      ano: "2025",
      descricao:
        "Meu primeiro projeto na faculdade: uma releitura do Flappy Bird no fundo do mar, feita " +
        "em Java com Swing. Tem modo para 1 jogador e para 2 jogadores em tela dividida, " +
        "pontuação e um ranking dos 5 melhores salvo localmente, que continua lá depois que o " +
        "jogo é fechado.",
      capa: "img/projetos/flappy-fish/capa.jpg",
      fotos: [
        { src: "img/projetos/flappy-fish/menu-principal.jpg", legenda: "Menu principal" },
        { src: "img/projetos/flappy-fish/jogo-1-jogador.png", legenda: "Partida no modo 1 jogador" },
        { src: "img/projetos/flappy-fish/jogo-2-jogadores.png", legenda: "Modo 2 jogadores com tela dividida" },
        { src: "img/projetos/flappy-fish/game-over.jpg", legenda: "Tela de game over" },
        { src: "img/projetos/flappy-fish/ranking.png", legenda: "Ranking dos 5 melhores, salvo localmente" },
      ],
    },
    {
      titulo: "Estoque TI",
      categoria: "Sistema web · Full Stack",
      ano: "2026",
      descricao:
        "Sistema web que desenvolvi no INGOH para substituir o controle manual do estoque da TI. " +
        "Registra entradas, saídas, devoluções e perdas com histórico, mostra o que cada " +
        "colaborador recebeu e monta a lista de compras sozinho quando um item chega ao mínimo, " +
        "gerando o formulário de compras em Word com um clique. Tem perfis de acesso, auditoria " +
        "e foco em segurança. Feito com Python (FastAPI), PostgreSQL, React e Docker.",
      capa: "img/projetos/estoque-ti/capa.png",
      fotos: [
        { src: "img/projetos/estoque-ti/painel.jpg", legenda: "Painel com a visão geral do estoque" },
        { src: "img/projetos/estoque-ti/painel-escuro.jpg", legenda: "O mesmo painel no modo escuro" },
        { src: "img/projetos/estoque-ti/itens.jpg", legenda: "Itens em estoque, com busca e alerta de reposição" },
        { src: "img/projetos/estoque-ti/detalhe-item.jpg", legenda: "Detalhe do item: movimentações e histórico com estorno" },
        { src: "img/projetos/estoque-ti/lista-de-compras.jpg", legenda: "Lista de compras automática pelo estoque mínimo" },
      ],
    },
    {
      titulo: "Material Esterilizável",
      categoria: "Sistema web · Full Stack",
      ano: "2026",
      descricao:
        "Sistema que fiz para o INGOH controlar o estoque de material esterilizável. Cobre o " +
        "cadastro de insumos, setores e usuários, os lotes com validade e o fluxo completo do " +
        "expurgo, do recebimento do material sujo até a liberação de volta ao setor, registrando " +
        "quem fez cada etapa. Gera relatórios em Excel e o protocolo de entrega em PDF. Feito com " +
        "Python (FastAPI), PostgreSQL, React e Docker.",
      capa: "img/projetos/material-esterilizavel/capa.png",
      fotos: [
        { src: "img/projetos/material-esterilizavel/login.jpg", legenda: "Tela de login" },
        { src: "img/projetos/material-esterilizavel/painel.jpg", legenda: "Painel com lotes, expurgo e não conformidades" },
        { src: "img/projetos/material-esterilizavel/relatorios.jpg", legenda: "Relatório gerencial em Excel e protocolo em PDF" },
      ],
    },
    {
      titulo: "FinPilot",
      categoria: "Sistema web · Finanças pessoais",
      ano: "2026",
      descricao:
        "Plataforma de finanças pessoais que construí do zero em Python. Nasceu de um incômodo: " +
        "apps e planilhas contam a compra no cartão duas vezes e tratam transferência como " +
        "receita. No FinPilot, cada número diz se já aconteceu, se é do mês ou se ainda vai " +
        "vencer. Tem contas, cartões com parcelas e faturas, orçamentos, metas, recorrências, " +
        "importação de CSV, relatórios em PDF e previsão de saldo para 90 dias. Feito com " +
        "FastAPI, PostgreSQL, HTMX, Tailwind, Redis e Docker.",
      capa: "img/projetos/finpilot/capa.png",
      capaPosicao: "left center",
      fotos: [
        { src: "img/projetos/finpilot/01-pagina-inicial.png", legenda: "Página inicial" },
        { src: "img/projetos/finpilot/02-login.png", legenda: "Login" },
        { src: "img/projetos/finpilot/03-dashboard.png", legenda: "Dashboard com indicadores e gráficos do mês" },
        { src: "img/projetos/finpilot/04-transacoes.png", legenda: "Transações com filtros e resumo do mês" },
        { src: "img/projetos/finpilot/04b-novo-lancamento.png", legenda: "Novo lançamento de receita ou despesa" },
        { src: "img/projetos/finpilot/05-contas.png", legenda: "Contas e saldo total disponível" },
        { src: "img/projetos/finpilot/06-cartoes.png", legenda: "Cartões de crédito com limite e fatura atual" },
        { src: "img/projetos/finpilot/07-cartao-faturas-e-compras.png", legenda: "Faturas e compras de um cartão" },
        { src: "img/projetos/finpilot/08-detalhe-da-fatura.png", legenda: "Detalhe da fatura com as parcelas" },
        { src: "img/projetos/finpilot/09-orcamentos.png", legenda: "Orçamentos por categoria com alertas de limite" },
        { src: "img/projetos/finpilot/10-metas.png", legenda: "Metas financeiras" },
        { src: "img/projetos/finpilot/11-detalhe-da-meta.png", legenda: "Detalhe da meta com estimativa de conclusão" },
        { src: "img/projetos/finpilot/12-recorrencias.png", legenda: "Lançamentos recorrentes" },
        { src: "img/projetos/finpilot/13-previsao-de-caixa.png", legenda: "Previsão de saldo para os próximos 90 dias" },
        { src: "img/projetos/finpilot/14-relatorios.png", legenda: "Relatórios disponíveis" },
        { src: "img/projetos/finpilot/15-relatorio-categorias.png", legenda: "Relatório de gastos por categoria" },
        { src: "img/projetos/finpilot/16-importacao-csv.png", legenda: "Importação de extrato em CSV" },
        { src: "img/projetos/finpilot/17-categorias.png", legenda: "Categorias de despesas e receitas" },
        { src: "img/projetos/finpilot/18-transferencias.png", legenda: "Transferências entre contas próprias" },
        { src: "img/projetos/finpilot/19-auditoria.png", legenda: "Registro de auditoria da conta" },
        { src: "img/projetos/finpilot/20-configuracoes.png", legenda: "Configurações de perfil, senha e sessões" },
        { src: "img/projetos/finpilot/21-dashboard-escuro.png", legenda: "Dashboard no modo escuro" },
        { src: "img/projetos/finpilot/22-transacoes-escuro.png", legenda: "Transações no modo escuro" },
        { src: "img/projetos/finpilot/23-cartoes-escuro.png", legenda: "Cartões no modo escuro" },
        { src: "img/projetos/finpilot/24-celular-dashboard.png", legenda: "Dashboard no celular" },
        { src: "img/projetos/finpilot/25-celular-transacoes.png", legenda: "Transações no celular" },
        { src: "img/projetos/finpilot/26-celular-cartoes.png", legenda: "Cartões no celular" },
      ],
    },
  ],

  contato: {
    email: "cauegontijo@gmail.com",
    telefone: "+55 (62) 9 9692-9240",
    localizacao: "Goiânia/GO",
    whatsapp: "https://wa.me/5562996929240",
    linkedin: "https://www.linkedin.com/in/cau%C3%AA-gontijo-b39938355",
    linkedinLabel: "linkedin.com/in/cauê-gontijo",
    github: "https://github.com/cauegontijo-cpu",
  },
};
