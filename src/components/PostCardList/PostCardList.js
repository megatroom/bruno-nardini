import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./PostCardList.module.css";

export default function PostCardList({ keyPrefix, posts }) {
  return (
    <div className="col col--3">
      <div className={styles.card}>
        <h2 className={styles.title}>Mais popular</h2>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={`${keyPrefix}-${post.id}`} className={styles.item}>
              <h3 className={styles.postTitle}>
                <Link
                  className={styles.postTitleLink}
                  to={useBaseUrl(post.link)}
                  title={post.title}
                  rel="bookmark"
                >
                  {post.title}
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
