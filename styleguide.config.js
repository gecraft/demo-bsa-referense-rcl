const path = require('path');
const { name, version, url } = require('./package.json');

let sections = [
  {
    name: 'README',
    content: 'README.md',
  },
  {
    name: 'BookList collection',

    components: [
      'src/components/Book/Book.js',
      'src/components/BookList/BookList.js',
      'src/components/BibleBookList/BibleBookList.js',
    ],
  },
  {
    name: 'ChapterList collection',

    components: [
      'src/components/Chapter/Chapter.js',
      'src/components/ChapterList/ChapterList.js',
      'src/components/BibleChapterList/BibleChapterList.js',
    ],
  },
];

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  ribbon: {
    url,
    text: 'Open on GitHub',
  },
  title: `${name} v${version}`,
  template: {
    head: {
      meta: [
        {
          name: 'description',
          content: 'React component library for bible reference',
        },
      ],
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,600',
        },
      ],
    },
  },
  moduleAliases: { [name]: path.resolve(__dirname, 'src') },
  skipComponentsWithoutExample: true,
  sections,
  styles: {
    ComponentsList: {
      isSelected: {
        fontWeight: 'normal',
        '&>a': {
          fontWeight: 'bold !important',
        },
      },
    },
  },
  theme: {
    color: {
      link: '#4B4E6A',
      linkHover: '#2B3847',
      baseBackground: '#fff',
      border: '#D0DAE4',
      sidebarBackground: '#fff',
    },
    fontFamily: {
      base: '"Fira Sans", sans-serif',
    },
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  pagePerSection: true,
  getComponentPathLine(componentPath) {
    const componentName = path.basename(componentPath, '.js');
    return `import { ${componentName} } from '${name}';`;
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};
