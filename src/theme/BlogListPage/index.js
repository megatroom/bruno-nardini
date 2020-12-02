import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import BlogListPaginator from "@theme/BlogListPaginator";

import Post from "../../components/Post/Post";

export default function BlogListPage({ metadata, items }) {
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle } = metadata;

  return (
    <Layout
      title={blogTitle || siteTitle}
      description={blogDescription}
      wrapperClassName="blog-wrapper"
    >
      <div className="container margin-vert--lg">
        <main>
          <div className="row">
            {items.map(({ content: BlogPostContent }) => {
              const { title, image } = BlogPostContent.frontMatter;
              const { date, readingTime, permalink } = BlogPostContent.metadata;

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
