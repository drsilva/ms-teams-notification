export function createAdaptiveCard(
  author: any,
  authorName: string,
  message: string,
  prTitle: string,
  prUrl: string,
  prNum: string,
  repoName: string,
  branchTarget: string,
  branchDest: string,
  timestamp: string
): any {
  let avatar_url =
    'https://www.gravatar.com/avatar/05b6d8cc7c662bf81e01b39254f88a48?d=identicon'
  if (author) {
    if (author.avatar_url) {
      avatar_url = author.avatar_url
    }
  }
  const adaptiveCard = {
    $schema: 'https://adaptivecards.io/schemas/adaptive-card.json',
    type: 'AdaptiveCard',
    version: '1.0',
    body: [
      {
        type: 'Container',
        items: [
          {
            type: 'TextBlock',
            text: "prTitle",
            weight: 'bolder',
            size: 'medium'
          },
          {
            type: 'ColumnSet',
            columns: [
              {
                type: 'Column',
                width: 'auto',
                items: [
                  {
                    type: 'Image',
                    url: avatar_url,
                    size: 'small',
                    style: 'person'
                  }
                ]
              },
              {
                type: 'Column',
                width: 'stretch',
                items: [
                  {
                    type: 'TextBlock',
                    text: authorName,
                    weight: 'bolder',
                    wrap: true
                  },
                  {
                    type: 'TextBlock',
                    spacing: 'none',
                    text: 'Qyon - Time Gestão Fácil',
                    isSubtle: true,
                    wrap: true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'Container',
        items: [
          {
            type: 'TextBlock',
            text: message,
            wrap: true
          },
          {
            type: 'FactSet',
            facts: [
              {
                title: 'PR #:',
                value: prNum
              },
              {
                title: 'Repositório:',
                value: repoName
              },
              {
                title: 'Branch Origem:',
                value: branchTarget
              },
              {
                title: 'Branch Destino:',
                value: branchDest
              },
              {
                title: 'Data:',
                value: timestamp
              }
            ]
          }
        ]
      }
    ],
    potentialAction: [
      {
        '@context': 'http://schema.org',
        target: [`${prUrl}`],
        '@type': 'ViewAction',
        name: 'Visualizar Pull Request'
      }
    ]
  }

  return adaptiveCard
}
