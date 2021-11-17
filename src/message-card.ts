import { stringify } from "querystring"

export function createMessageCard(
  qyonTime: string,
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
  reviwers: string,
  timestamp: string
): any {
  let avatar_url =
    'https://www.gravatar.com/avatar/05b6d8cc7c662bf81e01b39254f88a48?d=identicon'
  if (author) {
    if (author.avatar_url) {
      avatar_url = author.avatar_url
    }
  }
  prDescription = prDescription.replace(/\n/g, '<br />')

  let sectionMain: any = {
    activityTitle: `${authorName} [(@${author.login})](${author.html_url})`,
    activityImage: avatar_url,
    activitySubtitle: qyonTime,
    text: [prTitle, prDescription].filter(Boolean).join('<br>'),
    facts: [
      {
        name: 'Repositório:',
        value: repoName
      },
      {
        name: 'Branch Destino:',
        value: branchDest
      },
      {
        name: 'Branch Origem:',
        value: branchTarget
      },
      {
        name: 'PR #:',
        value: prNum
      },
      {
        name: 'Data:',
        value: timestamp
      }
    ]
  }
  
  const messageCard = {
    '@type': 'MessageCard',
    '@context': 'https://schema.org/extensions',
    summary: notificationSummary,
    themeColor: notificationColor,
    title: notificationSummary,
    sections: [
      sectionMain   
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

  //if (reviwers) {
    let sectReviwers: any = {
      activityTitle: 'Revisores',        
      text: String(`${reviwers}`)
    }     
    
    messageCard.sections.push(sectReviwers);
  //}

  return messageCard
}
