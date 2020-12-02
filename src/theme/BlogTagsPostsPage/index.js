import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import BlogListPaginator from "@theme/BlogListPaginator";

import Post from "../../components/Post/Post";

function pluralize(count, word) {
  return count > 1 ? `${word}s` : word;
}

export default function BlogTagsPostPage({ metadata, items }) {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const {
    allTagsPath,
    name: tagName,
    count,
    blogTitle,
    blogDescription,
    permalink,
  } = metadata;
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
          <h1>
            {count} {pluralize(count, "post")} com a tag &quot;{tagName}
            &quot;
          </h1>
          <Link href={allTagsPath}>Veja todas as tags</Link>
          <br />
          <br />
          <div className="row">
            {items.map(({ content: BlogPostContent }) => {
              const { title, image } = BlogPostContent.frontMatter;
              const { date, readingTime } = BlogPostContent.metadata;

              return (
                <div
                  key={BlogPostContent.metadata.permalink}
                  className="col col--4"
                >
                  <Post
                    link={permalink}
                    title={title}
                    date={date}
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
            })}
          </div>
          <BlogListPaginator metadata={metadata} />
        </main>
      </div>
    </Layout>
  );
}
