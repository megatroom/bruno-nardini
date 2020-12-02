import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./Post.module.css";

const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function formatDate(date) {
  const match = date.substring(0, 10).split("-");
  const year = match[0];
  const month = MONTHS[parseInt(match[1], 10) - 1];
  const day = parseInt(match[2], 10);
  return `${day} de ${month}, ${year}`;
}

export default function Post({
  link,
  title,
  imageUrl,
  date,
  readingTime,
  summary,
}) {
  const formattedDate = date && formatDate(date);

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
        {formattedDate} {readingTime}
      </div>
      <div>{summary}</div>
    </div>
  );
}
