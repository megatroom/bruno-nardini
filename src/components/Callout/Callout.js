import React from "react";
import Link from "@docusaurus/Link";

import styles from "./Callout.module.css";

export default function Callout() {
  return (
    <section>
      <div className={styles.callout}>
        <div className={styles.media}>
          <img
            src="/img/react-rocket-transp600.png"
            alt="React Profissional Logo"
            width="200px"
            height="200px"
          />
        </div>
        <div>
          <div className={styles.brand}>Nardini Academy</div>
          <h2 className={styles.title}>React Profissional</h2>
          <p>
            Aprenda React e todo seu ecossistema com um projeto profissional do
            mundo real.
          </p>
          <div>
            <Link
              className="button button--primary button--outline button--lg"
              to="https://nardiniacademy.com.br"
            >
              Conheça
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
