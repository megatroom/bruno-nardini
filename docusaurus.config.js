module.exports = {
  title: "Bruno Nardini",
  tagline: "",
  url: "https://brunonardini.com.br",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "megatroom",
  projectName: "bruno-nardini",
  themeConfig: {
    navbar: {
      title: "Bruno Nardini",
      items: [
        { to: "blog", label: "Nardini's Blog", position: "left" },
        {
          to: "medium/",
          activeBasePath: "medium",
          label: "Publicações no Medium",
          position: "left",
        },
        {
          href: "https://github.com/megatroom/bruno-nardini",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Redes Sociais",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/megatroom",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/brunonardini/",
            },
            {
              label: "GitHub",
              href: "https://github.com/megatroom",
            },
          ],
        },
        {
          title: "Categorias",
          items: [
            {
              label: "Front-end",
              to: "/blog/tags/front-end",
            },
            {
              label: "Back-end",
              to: "/blog/tags/back-end",
            },
            {
              label: "Mobile",
              to: "/blog/tags/mobile",
            },
            {
              label: "Carreira",
              to: "/blog/tags/carreira",
            },
            {
              label: "Processos Ágeis",
              to: "/blog/tags/processos-ageis",
            },
          ],
        },
        {
          title: "Mais",
          items: [
            {
              label: "Nardini's Blog",
              to: "blog",
            },
            {
              label: "Publicações no Medium",
              to: "medium",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bruno Nardini.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/megatroom/bruno-nardini/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/megatroom/bruno-nardini/edit/master/website/blog/",
          feedOptions: {
            type: "rss",
            copyright: `Copyright © ${new Date().getFullYear()} Bruno Nardini.`,
          },
          postsPerPage: 9,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
