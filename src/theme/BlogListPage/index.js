import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { MDXProvider } from "@mdx-js/react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import MDXComponents from "@theme/MDXComponents";
import BlogPostItem from "@theme/BlogPostItem";
import BlogListPaginator from "@theme/BlogListPaginator";

import Post from "../../components/Post/Post";

import styles from "./styles.module.css";

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

export default function BlogListPage({ metadata, items, sidebar }) {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <Layout
      title={title}
      description={blogDescription}
      wrapperClassName="blog-wrapper"
    >
      <div className="container margin-vert--lg">
        <main>
          <div className="row">
            {items.map(({ content: BlogPostContent }) => {
              const { title, image } = BlogPostContent.frontMatter;
              const { date, readingTime } = BlogPostContent.metadata;
              const match = date.substring(0, 10).split("-");
              const year = match[0];
              const month = MONTHS[parseInt(match[1], 10) - 1];
              const day = parseInt(match[2], 10);

              return (
                <div className="col col--4">
                  <Post
                    link={permalink}
                    title={title}
                    date={`${day} de ${month}, ${year}`}
                    readingTime={<> · {Math.ceil(readingTime)} min</>}
                    imageUrl={image}
                    summary={
                      <section className="markdown">
                        <MDXProvider components={MDXComponents}>
                          <BlogPostContent />
                        </MDXProvider>
                      </section>
                    }
                  />
                </div>
              );

              //   return (
              //     <div className="col col--4">
              //       <div class="card">
              //         {image && (
              //           <div class="card__image">
              //             <img
              //               src={image}
              //               alt="Image alt text"
              //               title="Logo Title Text 1"
              //             />
              //           </div>
              //         )}
              //         <div class="card__body">
              //           <h4>{title}</h4>
              //           <div className="margin-vert--md">
              //             <time dateTime={date} className={styles.blogPostDate}>
              //               {month} {day}, {year}{" "}
              //               {readingTime && (
              //                 <> · {Math.ceil(readingTime)} min read</>
              //               )}
              //             </time>
              //           </div>
              //           <small>
              //             The Quaco Head Lighthouse is a well maintained
              //             lighthouse close to St. Martins. It is a short,
              //             beautiful walk to the lighthouse along the seashore.
              //           </small>
              //         </div>
              //         <div class="card__footer">
              //           <button class="button button--primary button--block">
              //             Visit
              //           </button>
              //         </div>
              //       </div>
              //     </div>
              //   );

              // return (
              //   <BlogPostItem
              //     key={BlogPostContent.metadata.permalink}
              //     frontMatter={BlogPostContent.frontMatter}
              //     metadata={BlogPostContent.metadata}
              //     truncated={BlogPostContent.metadata.truncated}
              //   >
              //     <BlogPostContent />
              //   </BlogPostItem>
              // );
            })}
          </div>
          <BlogListPaginator metadata={metadata} />
        </main>
      </div>
    </Layout>
  );
}
