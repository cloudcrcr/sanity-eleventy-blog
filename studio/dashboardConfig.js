export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613c231af567d9dd3b87d266',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-96o46wuz',
                  apiId: 'ae85ca3c-41a1-412b-9e98-6a76bcc4d595'
                },
                {
                  buildHookId: '613c231abd67abc69d0c6631',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-3ij27bu8',
                  apiId: 'eaaced17-cfba-40d3-95f8-7676755f3fb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cloudcrcr/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-3ij27bu8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
