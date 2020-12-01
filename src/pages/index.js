import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useGlobalData from "@docusaurus/useGlobalData";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    id: 1,
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
    id: 2,
    title: "Tudo que você queria saber sobre Trabalho Remoto",
    imageUrl: "img/trabalho_remoto.jpg",
    link: "/blog/tudo-que-voce-queria-saber-sobre-trabalho-remoto",
    summary: <>Minha palestra no Rio Sul Valley Dev Summit 2017.</>,
  },
  {
    id: 3,
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
];

function Post({ id, main, link, title, imageUrl, summary }) {
  return (
    <div
      key={`post-${id}`}
      className={clsx("col", main ? "col--6" : "col--3", styles.postCard)}
    >
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
        <Link to={useBaseUrl(link)} title={title} rel="bookmark">
          {title}
        </Link>
      </h2>
      <div>{summary}</div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const globalData = useGlobalData();
  const { siteConfig = {} } = context;

  // console.log(globalData);

  return (
    <>
      <Layout title={siteConfig.title} description="Bruno Nardini Blog">
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              {features.map((feat) => (
                <Post {...feat} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
