import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Bruno Nardini',
  tagline: '',
  url: 'https://brunonardini.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'megatroom',
  projectName: 'bruno-nardini',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  themeConfig: {
    navbar: {
      title: 'Bruno Nardini',
      items: [
        { to: 'blog', label: "Nardini's Blog", position: 'left' },
        {
          to: 'medium/',
          activeBasePath: 'medium',
          label: 'Publicações no Medium',
          position: 'left',
        },
        {
          to: 'me',
          label: 'Sobre mim',
          position: 'left',
        },
        {
          href: 'https://github.com/megatroom/bruno-nardini',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Redes Sociais',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/megatroom',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/brunonardini/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/megatroom',
            },
          ],
        },
        {
          title: 'Categorias',
          items: [
            {
              label: 'Front-end',
              to: '/blog/tags/frontend',
            },
            {
              label: 'Back-end',
              to: '/blog/tags/backend',
            },
            {
              label: 'Mobile',
              to: '/blog/tags/mobile',
            },
            {
              label: 'Carreira',
              to: '/blog/tags/career',
            },
            {
              label: 'Processos Ágeis',
              to: '/blog/tags/agile',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: "Nardini's Blog",
              to: 'blog',
            },
            {
              label: 'Publicações no Medium',
              to: 'medium',
            },
            {
              label: 'Sobre mim',
              to: 'me',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bruno Nardini.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/megatroom/bruno-nardini/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/megatroom/bruno-nardini/edit/main/',
          feedOptions: {
            xslt: true,
            type: ['rss', 'atom'],
            copyright: `Copyright © ${new Date().getFullYear()} Bruno Nardini.`,
          },
          postsPerPage: 9,
          onInlineTags: 'throw',
          onInlineAuthors: 'throw',
          onUntruncatedBlogPosts: 'throw',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};

export default config;
