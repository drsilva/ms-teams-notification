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
        type: 'TextBlock',
        text: 'Teste'
      },
      {
        type: 'Container',
        items: [
          {
            type: 'TextBlock',
            text: 'prTitle',
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

  const teste = {
    $schema: 'https://adaptivecards.io/schemas/adaptive-card.json',
    type: 'AdaptiveCard',
    version: '1.0',
    body: [
      {
        type: 'TextBlock',
        text: 'Teste'
      },
      {
        type: 'Container',
        items: [
          {
            type: 'TextBlock',
            text: 'Publish Adaptive Card schema',
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
                    url:
                      'https://connectorsdemo.azurewebsites.net/images/MSC12_Oscar_002.jpg',
                    size: 'small',
                    style: 'person',
                    altText: "Migeul Garcia's Profile Picture"
                  }
                ]
              },
              {
                type: 'Column',
                width: 'stretch',
                items: [
                  {
                    type: 'TextBlock',
                    text: 'Miguel Garcia',
                    weight: 'bolder',
                    wrap: true
                  },
                  {
                    type: 'TextBlock',
                    spacing: 'none',
                    text: 'Created {{DATE(2017-02-14T06:08:39Z, SHORT)}}',
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
            text:
              'Now that we have defined the main rules and features of the format, we need to produce a schema and publish it to GitHub. The schema will be the starting point of our reference documentation.',
            wrap: true
          },
          {
            type: 'FactSet',
            facts: [
              {
                title: 'Board:',
                value: 'Adaptive Card'
              },
              {
                title: 'List:',
                value: 'Backlog'
              },
              {
                title: 'Assigned to:',
                value: 'Matt Hidinger'
              },
              {
                title: 'Due date:',
                value: 'Not set'
              }
            ]
          }
        ]
      }
    ],
    actions: [
      {
        type: 'Action.ShowCard',
        title: 'Set due date',
        card: {
          type: 'AdaptiveCard',
          body: [
            {
              type: 'Input.Date',
              id: 'dueDate',
              isRequired: true,
              placeholder: 'Enter due date'
            }
          ],
          actions: [
            {
              type: 'Action.Http',
              method: 'POST',
              body: '{{dueDate.value}}',
              title: 'OK',
              url: 'https://messagecardplaygroundfn.azurewebsites.net/'
            }
          ]
        }
      },
      {
        type: 'Action.ShowCard',
        title: 'Comment',
        card: {
          type: 'AdaptiveCard',
          body: [
            {
              type: 'Input.Text',
              id: 'comment',
              isRequired: true,
              isMultiline: true,
              placeholder: 'Enter your comment'
            }
          ],
          actions: [
            {
              type: 'Action.Http',
              method: 'POST',
              body: '{{comment.value}}',
              title: 'OK',
              url: 'https://messagecardplaygroundfn.azurewebsites.net/'
            }
          ]
        }
      }
    ]
  }

  // return adaptiveCard
  return teste
}
