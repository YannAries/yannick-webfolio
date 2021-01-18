// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
},
  siteName: 'Yannick G-F webfolio',
  siteDescription: 'Le webfolio de Yannick G-F - développeur web front-end',
  siteUrl: '',
  titleTemplate: `%s - Yannick G-F Webfolio`,
  transformers: {
    remark: {
     externalLinksTarget: '_blank',
     externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
     anchorClassName: 'icon icon-link',
     plugins: [
     ]
   }
  },

  // Debugging sourceMaps
  chainWebpack: config => {
    config.mode('development')
  },
  
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/projects/*.md',
        typeName: 'Project',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-purgecss',
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.html',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.pug',
          './src/**/*.css',
          './src/**/*.scss',
          './src/**/*.md'
        ],
        whitelist: [
          'body',
          'html',
          'img',
          'a',
          'g-image',
          'g-image--lazy',
          'g-image--loaded',
        ],
        defaultExtractor: content => content.match(/[A-z0-9-:\\/]+/g),
        extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
      }
    }
  ]
}
