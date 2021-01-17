export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6003af9459b42b1edf1bc1ef',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-97fdfihf',
                  apiId: '4d663c33-6af6-43f8-911b-c8648c7f3469'
                },
                {
                  buildHookId: '6003af94a9166e2fd26325ad',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pxsij88x',
                  apiId: '0f2b634d-b6ed-4214-8fad-1ab2c4124b89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wavinginspace/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pxsij88x.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
