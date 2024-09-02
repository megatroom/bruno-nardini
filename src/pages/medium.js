import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Post from '../components/Post/Post';
import { mediumPublications } from '../data';

export default function Medium() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={siteConfig.title}
      description="Publicações no Medium de Bruno Nardini"
      wrapperClassName="blog-wrapper"
    >
      <div className="container margin-vert--lg">
        <main>
          <h1>Publicações no Medium</h1>
          <p>
            Os posts que faço no Medium são publicações por empresas da qual
            trabalhei ou trabalho.
          </p>
          <br />
          <div className="row">
            {mediumPublications.map((pub) => (
              <div key={`publication-${pub.id}`} className="col col--4">
                <Post {...pub} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
