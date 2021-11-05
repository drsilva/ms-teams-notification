export function createMessageCard(
  notificationSummary: string,
  notificationColor: string,
  commit: any,
  author: any,
  runNum: string,
  runId: string,
  prId: string,
  prTitle: string,
  repoName: string,
  sha: string,
  repoUrl: string,
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
        activitySubtitle: `por ${commit.data.commit.author.name} [(@${author.login})](${author.html_url}) em ${timestamp}`
      }
    ],
    potentialAction: [
      {
        '@context': 'http://schema.org',
        target: [`${repoUrl}/pull/${prId}`],
        '@type': 'ViewAction',
        name: 'Visualizar Pull Request'
      }
    ]
  }
  return messageCard
}
