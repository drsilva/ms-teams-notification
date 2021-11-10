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
        activityText:
          `${message}` +
          `<br>` +
          `Autor: <b>${authorName}</b> [(@${author.login})](${author.html_url}) em ${timestamp}`
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
