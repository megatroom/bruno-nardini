import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

let generatorId = 0;
function lazyId() {
  generatorId += 1;
  return generatorId;
}

const features = [
  {
    id: lazyId(),
    main: true,
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
  {
    id: lazyId(),
    title: "Como escrever uma user story matadora",
    imageUrl: "img/scrum_board.jpg",
    link: "/blog/como-escrever-uma-user-story-matadora",
    summary: (
      <>
        Escrever uma user story é muito mais do que descrever uma tarefa usando
        uma receita, ela é a base para construção e evolução de um produto
        usando metodologia ágil (Scrum, Kanban, etc), então saber criá-la da
        maneira certa é fundamental para a criação de valor na sua entrega.
      </>
    ),
  },
];

function Post({ main, link, title, imageUrl, summary }) {
  return (
    <div className={clsx("col", main ? "col--6" : "col--3", styles.postCard)}>
      <Link className={styles.postImageLink} to={useBaseUrl(link)}>
        <img
          width="1024"
          height="538"
          loading="lazy"
          src={imageUrl}
          className={styles.postImage}
          alt=""
        />
      </Link>
      <h2 className={styles.postTitle}>
        <Link
          className={styles.postTitleLink}
          to={useBaseUrl(link)}
          title={title}
          rel="bookmark"
        >
          {title}
        </Link>
      </h2>
      <div>{summary}</div>
    </div>
  );
}

function IconRss(props) {
  return (
    <svg
      aria-hidden="true"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        d="M1 3c0-1.1.9-2 2-2h12a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm14.5 12C15.5 8.1 9.9 2.5 3 2.5V5a10 10 0 0110 10h2.5zm-5 0A7.5 7.5 0 003 7.5V10a5 5 0 015 5h2.5zm-5 0A2.5 2.5 0 003 12.5V15h2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <>
      <Layout title={siteConfig.title} description="Bruno Nardini Blog">
        <section className={styles.section}>
          <div className="container">
            <header className={styles.topic}>
              <h1>Nardini's Blog</h1>
              <p>
                A mudança é inerente a esta carreira que escolhemos, a única
                opção que temos é de abraçá-la, é uma área de inovações. Isso
                significa que nós vamos passar a maior parte do tempo
                aprendendo, nos sentindo como um newbie em uma situação pouco
                familiar. Este blog é uma das formas que encontrei para trocar
                experiências e conhecimento para acompanhar essas mudanças.
              </p>
              <div className={styles.topicFooter}>
                <a
                  className="button button--outline button--secondary"
                  href="/blog/rss.xml"
                >
                  <IconRss className={styles.topicButtonIcon} />
                  RSS Feed
                </a>
              </div>
            </header>
            <div className="row">
              {features.map((feat) => (
                <Post key={`post-${feat.id}`} {...feat} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
