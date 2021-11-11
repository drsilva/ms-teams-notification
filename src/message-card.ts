export function createMessageCard(
  notificationSummary: string,
  notificationColor: string,
  author: any,
  authorName: string,
  message: string,
  prTitle: string,
  prUrl: string,
  timestamp: string
): any {
  let avatar_url =
    'https://www.gravatar.com/avatar/05b6d8cc7c662bf81e01b39254f88a48?d=identicon'
  if (author) {
    if (author.avatar_url) {
      avatar_url = author.avatar_url
    }
  }
  const messageCard = {
    '@type': 'MessageCard',
    '@context': 'https://schema.org/extensions',
    summary: notificationSummary,
    themeColor: notificationColor,
    title: notificationSummary,
    sections: [
      {
        activityTitle: `${prTitle}`,
        activityImage: avatar_url,
        text:
          `${message}` +
          `<br>` +
          `Autor: <b>${authorName}</b> [(@${author.login})](${author.html_url}) em ${timestamp}`,
          
        "facts": [
          {
            "name": "Board:",
            "value": "Name of board"
          },
          {
            "name": "List:",
            "value": "Name of list"
          },
          {
            "name": "Assigned to:",
            "value": "(none)"
          },
          {
            "name": "Due date:",
            "value": "(none)"
          }
        ],

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

  const teste = 
  {
    "@type": "MessageCard",
    "@context": "https://schema.org/extensions",
    "summary": "Card \"Test card\"",
    "themeColor": "0078D7",
    "title": "Card created: \"Name of card\"",
    "sections": [
      {
        "activityTitle": "Miguel Garcia",
        "activitySubtitle": "9/13/2016, 3:34pm",
        "activityImage": "https://connectorsdemo.azurewebsites.net/images/MSC12_Oscar_002.jpg",
        "facts": [
          {
            "name": "Board:",
            "value": "Name of board"
          },
          {
            "name": "List:",
            "value": "Name of list"
          },
          {
            "name": "Assigned to:",
            "value": "(none)"
          },
          {
            "name": "Due date:",
            "value": "(none)"
          }
        ],
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ],
    "potentialAction": [
      {
        "@type": "ActionCard",
        "name": "Set due date",
        "inputs": [
          {
            "@type": "DateInput",
            "id": "dueDate",
            "title": "Select a date"
          }
        ],
        "actions": [
          {
            "@type": "HttpPOST",
            "name": "OK",
            "target": "http://..."
          }
        ]
      },
      {
        "@type": "ActionCard",
        "name": "Move",
        "inputs": [
          {
            "@type": "MultichoiceInput",
            "id": "move",
            "title": "Pick a list",
            "choices": [
              {
                "display": "List 1",
                "value": "l1"
              },
              {
                "display": "List 2",
                "value": "l2"
              }
            ]
          }
        ],
        "actions": [
          {
            "@type": "HttpPOST",
            "name": "OK",
            "target": "http://..."
          }
        ]
      },
      {
        "@type": "ActionCard",
        "name": "Add a comment",
        "inputs": [
          {
            "@type": "TextInput",
            "id": "comment",
            "isMultiline": true,
            "title": "Enter your comment"
          }
        ],
        "actions": [
          {
            "@type": "HttpPOST",
            "name": "OK",
            "target": "http://..."
          }
        ]
      },
      {
        "@type": "OpenUri",
        "name": "View in Trello",
        "targets": [
          {
            "os": "default",
            "uri": "http://..."
          }
        ]
      }
    ]
  }
  // return messageCard
  return teste
}
