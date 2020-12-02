import React from "react";

let generatorId = 0;
function lazyId() {
  generatorId += 1;
  return generatorId;
}

export const featurePosts = [
  {
    id: lazyId(),
    title: "Padrão de projetos para Rotas",
    imageUrl: "img/routes.jpg",
    link: "/blog/padrao-de-projetos-para-rotas",
    summary: (
      <>
        Criar rotas é uma tarefa bem simples, a maioria dos frameworks já dão
        suporte nativo, mas com o crescimento do projeto algumas decisões podem
        dificultar a manutenção. Neste artigo vou dar uma sugestão de como
        organizar as rotas para facilitar o desenvolvimento de projetos
        complexos.
      </>
    ),
  },
  {
    id: lazyId(),
    title: "Tudo que você queria saber sobre Trabalho Remoto",
    imageUrl: "img/trabalho_remoto.jpg",
    link: "/blog/tudo-que-voce-queria-saber-sobre-trabalho-remoto",
    summary: <>Minha palestra no Rio Sul Valley Dev Summit 2017.</>,
  },
  {
    id: lazyId(),
    title: "Notificações, Toast, React e Redux",
    imageUrl: "img/blue_bg_react.png",
    link: "/blog/notificacoes-toast-react-e-redux",
    summary: (
      <>
        A missão era simples: enviar uma mensagem não bloqueante de sucesso ou
        erro em resposta a uma requisição assíncrona. Seria simples se não
        fosse...
      </>
    ),
  },
  {
    id: lazyId(),
    title: "Meu VS Code snippets",
    imageUrl: "img/shortcut.jpg",
    link: "/blog/meu-vs-code-snippets",
    summary: (
      <>
        Code snippets são blocos de códigos dinâmicos e reutilizáveis. Você pode
        usar extensões que já possuem vários snippets prontos e você pode criar
        para aqueles seus códigos que você digita repetitivamente.
      </>
    ),
  },
  {
    id: lazyId(),
    title: "Dominando o VS Code",
    imageUrl: "img/vscode-bg.png",
    link: "/blog/dominando-o-vs-code",
    summary: (
      <>
        Já tem alguns anos que adotei o Visual Studio Code como minha IDE
        principal para desenvolvimento web. Neste artigo vou mostrar como eu o
        turbinei com plugins e configurações para ser muito mais produtivo.
      </>
    ),
  },
  {
    id: lazyId(),
    title:
      "Como fazer o Daily Scrum (Stand Up Meetings) de forma mais produtiva",
    imageUrl: "img/daily-scrum.jpg",
    link:
      "/blog/como-fazer-o-daily-scrum-stand-up-meetings-de-forma-mais-produtiva",
    summary: (
      <>
        Sugestões de como trazer os benefícios prometidos, deixando o Daily mais
        produtivo.
      </>
    ),
  },
  //   {
  //     id: lazyId(),
  //     title: "Como escrever uma user story matadora",
  //     imageUrl: "img/scrum_board.jpg",
  //     link: "/blog/como-escrever-uma-user-story-matadora",
  //     summary: (
  //       <>
  //         Escrever uma user story é muito mais do que descrever uma tarefa usando
  //         uma receita, ela é a base para construção e evolução de um produto
  //         usando metodologia ágil (Scrum, Kanban, etc), então saber criá-la da
  //         maneira certa é fundamental para a criação de valor na sua entrega.
  //       </>
  //     ),
  //   },
];

export const mostPopularPosts = [
  {
    id: lazyId(),
    title: "Como escrever uma user story matadora",
    link: "/blog/como-escrever-uma-user-story-matadora",
  },
  {
    id: lazyId(),
    title: "A diferença entre o foco no problema e o foco na solução",
    link: "/blog/a-diferenca-entre-o-foco-no-problema-e-o-foco-na-solucao",
  },
  {
    id: lazyId(),
    title: "Notificações, Toast, React e Redux",
    link: "/blog/notificacoes-toast-react-e-redux",
  },
  {
    id: lazyId(),
    title: "Dominando o VS Code",
    link: "/blog/dominando-o-vs-code",
  },
];

export const mediumPublications = [
  {
    id: lazyId(),
    title:
      "React Hooks: por que devemos colocar funções no array de dependências do useEffecs?",
    imageUrl: "img/medium/1_r0KEQBZMMEoVmPCVP8IHjw.jpeg",
    link:
      "https://medium.com/rd-shipit/react-hooks-por-que-devemos-colocar-fun%C3%A7%C3%B5es-no-array-de-depend%C3%AAncias-do-useeffecs-6ba483c57ae",
    external: true,
    summary: (
      <>
        Com a introdução dos Hooks na versão 16.8 do React, surgiu uma nova
        forma de utilizar suas funcionalidades usando apenas funções, com
        conceitos e regras diferentes dos que já conhecíamos usando classes.
      </>
    ),
  },
  {
    id: lazyId(),
    title: "O que podemos esperar das novas versões do JavaScript",
    imageUrl: "img/medium/1_U1L62mnxHs2hzDhH3lDoMg.jpeg",
    link:
      "https://medium.com/rd-shipit/o-que-podemos-esperar-das-novas-vers%C3%B5es-do-javascript-2dce4f576b9e",
    external: true,
    summary: (
      <>
        Para você se preparar e ficar atualizado, eu preparei uma lista com as
        novidades do JavaScript que terá um grande impacto na forma em que
        escrevemos o código.
      </>
    ),
  },
  {
    id: lazyId(),
    title: "Como o Open Source mudou minha carreira e me fez entrar na Matrix",
    imageUrl: "img/medium/1_94-Q3eLEBo8gc1WmsEQBjw.jpeg",
    link:
      "https://medium.com/rd-shipit/como-o-open-source-mudou-minha-carreira-e-me-fez-entrar-na-matrix-d3bcd41e797",
    external: true,
    summary: (
      <>
        Recentemente o Open Source teve um impacto enorme na minha mudança de
        emprego, mas agora que eu parei para refletir sobre isso, eu vejo que
        ele vem transformando minha carreira desde o começo.
      </>
    ),
  },
  {
    id: lazyId(),
    title: "Refatorando código legado em projetos React — Parte V",
    imageUrl: "img/medium/1_DH1WAfrSGFbYKoBv8rjnfw.jpeg",
    link:
      "https://medium.com/@megatroom/refatorando-c%C3%B3digo-legado-em-projetos-react-parte-v-15f20243d826",
    external: true,
    summary: (
      <>
        Para fechar com chave de ouro, esta série termina com algumas conclusões
        sobre qualidade de software, com alguns mitos e verdades que precisam
        ser esclarecidos para evitar a criação de novos projetos legados.
      </>
    ),
  },
  {
    id: lazyId(),
    title: "Refatorando código legado em projetos React — Parte IV",
    imageUrl: "img/medium/1_4RGbtG6JigriTDXzrO3IHQ.jpeg",
    link:
      "https://medium.com/m4u-tech/refatorando-c%C3%B3digo-legado-em-projetos-react-parte-iv-2913d1251305",
    external: true,
    summary: (
      <>
        O Redux é um contêiner de estado previsível e ajuda a manter a
        consistência do comportamento de uma aplicação. Sua utilização em
        projetos junto ao React se tornou tão popular que os desenvolvedores
        iniciantes em React passaram a usá-lo por obrigação, ignorando seu custo
        e efeitos colaterais.
      </>
    ),
  },
  {
    id: lazyId(),
    title: "Refatorando código legado em projetos React — Parte III",
    imageUrl: "img/medium/1_KycS0Nf5K2BuZ3xL98RRHg.jpeg",
    link:
      "https://medium.com/m4u-tech/refatorando-c%C3%B3digo-legado-em-projetos-react-parte-iii-9b6bf4a1c98e",
    external: true,
    summary: (
      <>
        No mundo real é bem mais complexo, como diria qualquer desenvolvedor ao
        ler um tutorial na internet. Para adentrar a complexidade de um projeto
        real, este artigo abordará uma alteração com um grande impacto no
        projeto de exemplo.
      </>
    ),
  },
  {
    id: lazyId(),
    title: "Refatorando código legado em projetos React — Parte II",
    imageUrl: "img/medium/1_68N_-STWm95NgsmD3rylbw.jpeg",
    link:
      "https://medium.com/m4u-tech/refatorando-c%C3%B3digo-legado-em-projetos-react-parte-ii-f3c1d898c11e",
    external: true,
    summary: (
      <>
        Neste artigo é introduzido a definição de refatoração, teste de unidade
        e teste de regressão, na prática é feito novos testes e a implementação
        de uma nova funcionalidade em um componente React.
      </>
    ),
  },
  {
    id: lazyId(),
    title: "Refatorando código legado em projetos React — Parte I",
    imageUrl: "img/medium/1_oUx6VMWbOlzjw9YnYmqLHg.jpeg",
    link:
      "https://medium.com/m4u-tech/refatorando-c%C3%B3digo-legado-em-projetos-react-parte-i-2214fd9ee04d",
    external: true,
    summary: (
      <>
        Código legado é uma dor que atinge em cheio o coração de qualquer
        programador. Com a evolução do desenvolvimento WEB, tecnologias
        emergentes trouxeram grande robustez para o que hoje chamamos de
        front-end, com isso vieram novos desafios de como escrever um código
        limpo. Nesta série de artigos mostrarei algumas dicas de como trabalhar
        em um projeto React com código legado.
      </>
    ),
  },
];

export const featureMediumPublications = mediumPublications.slice(0, 7);
