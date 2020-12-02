import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ImRss } from "react-icons/im";
import { FaBookReader } from "react-icons/fa";

import styles from "./styles.module.css";
import Post from "../components/Post/Post";
import PostCardList from "../components/PostCardList/PostCardList";
import Callout from "../components/Callout/Callout";

import {
  featurePosts,
  mostPopularPosts,
  featureMediumPublications,
} from "../data";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <>
      <Layout title={siteConfig.title} description="Bruno Nardini Blog">
        <div className="container">
          <section className={styles.section}>
            <header className={styles.topic}>
              <div className="row">
                <div className="col col--8">
                  <h1>Nardini's Blog</h1>
                  <p>
                    A mudança é inerente a esta carreira que escolhemos, a única
                    opção que temos é de abraçá-la, é uma área de inovações.
                    Isso significa que nós vamos passar a maior parte do tempo
                    aprendendo, nos sentindo como um newbie em uma situação
                    pouco familiar. Este blog é uma das formas que encontrei
                    para trocar experiências e conhecimento para acompanhar
                    essas mudanças.
                  </p>
                  <div className={styles.topicFooter}>
                    <Link
                      className={clsx(
                        "button button--outline button--secondary",
                        styles.topicButton
                      )}
                      href={useBaseUrl("blog/rss.xml")}
                    >
                      <ImRss className={styles.topicButtonIcon} />
                      RSS Feed
                    </Link>
                    <Link
                      className={clsx(
                        "button button--outline button--secondary",
                        styles.topicButton
                      )}
                      href={useBaseUrl("blog")}
                    >
                      <FaBookReader className={styles.topicButtonIcon} />
                      Todos os posts
                    </Link>
                  </div>
                </div>
              </div>
            </header>
            <div className="row">
              {featurePosts.map((post, index) => (
                <div
                  key={`post-${post.id}`}
                  className={clsx("col", index == 0 ? "col--6" : "col--3")}
                >
                  <Post {...post} />
                </div>
              ))}
              <PostCardList
                keyPrefix="most-popular-posts"
                posts={mostPopularPosts}
              />
            </div>
          </section>
          <Callout />
          <section>
            <header className={styles.topic}>
              <div className="row">
                <div className="col col--8">
                  <h1>Publicações no Medium</h1>
                  <p>
                    Os posts que faço no Medium são publicações por empresas da
                    qual trabalhei ou trabalho.
                  </p>
                </div>
              </div>
            </header>
            <div className="row">
              {featureMediumPublications.map((publication, index) => (
                <div
                  key={`publication-${publication.id}`}
                  className={clsx("col", index == 0 ? "col--6" : "col--3")}
                >
                  <Post {...publication} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Home;
