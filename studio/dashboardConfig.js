export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5de6acb2668a1b1c33882d35',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-h8rybso4',
                  apiId: 'f455faea-7783-4e2c-bc71-b30afcbcda0b'
                },
                {
                  buildHookId: '5de6acb26f0b9e2667d7f988',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3ahbj1yq',
                  apiId: 'b75447f4-4339-46da-ab09-9914e2076d00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lrnco/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3ahbj1yq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
