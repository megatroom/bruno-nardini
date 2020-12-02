import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./Post.module.css";

export default function Post({
  link,
  title,
  imageUrl,
  date,
  readingTime,
  summary,
}) {
  return (
    <div className={styles.postCard}>
      {imageUrl && (
        <Link className={styles.postImageLink} to={useBaseUrl(link)}>
          <img
            width="1024"
            height="538"
            loading="lazy"
            className={styles.postImage}
            src={imageUrl}
            alt={title}
          />
        </Link>
      )}
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
      <div className={styles.postDate}>
        {date} {readingTime}
      </div>
      <div>{summary}</div>
    </div>
  );
}
