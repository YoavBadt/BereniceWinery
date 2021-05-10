// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Berenice Winery',
    
    transformers: {
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          anchorClassName: 'icon icon-link',
          plugins: [
            // ...global plugins
          ]
        }
      },
    
    siteUrl: '',
    siteDescription: 'Berenice Winery',
    templates: {
      Post: '/blog/:title'
    },
    plugins: [
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'content/posts/**/*.md',
          typeName: 'Post',
          remark : {
              
          }
        }
      },
      {
        use: 'gridsome-plugin-tailwindcss',
      },
      {
        use: `gridsome-plugin-netlify-cms`,
        options: {
          publicPath: `/admin`,
          modulePath: `src/admin/index.js`
        }
      }
    ],
  }
  