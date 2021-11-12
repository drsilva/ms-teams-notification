export function createMessageCard(
  notificationSummary: string,
  notificationColor: string,
  author: any,
  authorName: string,
  prTitle: string,
  prDescription: string,
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
  const messageCard = {
    '@type': 'MessageCard',
    '@context': 'https://schema.org/extensions',
    summary: notificationSummary,
    themeColor: notificationColor,
    title: notificationSummary,
    sections: [
      {
        activityTitle: `${authorName} [(@${author.login})](${author.html_url})`,
        activityImage: avatar_url,
        activitySubtitle: 'Qyon - Time Gestão Fácil (ERP)',
        // text: [prTitle, prDescription].filter(Boolean).join('<br>'),
        text: prTitle + '---' + prDescription,
        facts: [
          {
            name: 'PR #:',
            value: prNum
          },
          {
            name: 'Repositório:',
            value: repoName
          },
          {
            name: 'Branch Origem:',
            value: branchTarget
          },
          {
            name: 'Branch Destino:',
            value: branchDest
          },
          {
            name: 'Data:',
            value: timestamp
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

  return messageCard
}
