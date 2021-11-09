//teste
import * as core from '@actions/core'
import {Octokit} from '@octokit/rest'
import axios from 'axios'
import moment from 'moment-timezone'
import {createMessageCard} from './message-card'

const escapeMarkdownTokens = (text: string) =>
  text
    .replace(/\n\ {1,}/g, '\n ')
    .replace(/\_/g, '\\_')
    .replace(/\*/g, '\\*')
    .replace(/\|/g, '\\|')
    .replace(/#/g, '\\#')
    .replace(/-/g, '\\-')
    .replace(/>/g, '\\>')

async function run(): Promise<void> {
  try {
    const githubToken = core.getInput('github-token', {required: true})
    const msTeamsWebhookUri: string = core.getInput('ms-teams-webhook-uri', {
      required: true
    })

    const notificationSummary =
      core.getInput('notification-summary') || 'GitHub Action Notification'
    const notificationColor = core.getInput('notification-color') || '0b93ff'
    const timezone = core.getInput('timezone') || 'UTC'
    const prNum = core.getInput('pull-request-number', {required: true})
    const prTitle = core.getInput('pull-request-title', {required: true})
    const prUrl = core.getInput('pull-request-url', {required: true})

    const timestamp = moment()
      .tz(timezone)
      .format('dddd, MMMM Do YYYY, h:mm:ss a z')

    const repoName = process.env.GITHUB_REPOSITORY

    const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/')
    const octokit = new Octokit({auth: `token ${githubToken}`})
    const sha = process.env.GITHUB_SHA || ''
    const params = {owner, repo, ref: sha}
    const commit = await octokit.repos.getCommit(params)
    const author = commit.data.author

    const message =
      'PR #' +
      prNum +
      ' em ' +
      repoName +
      '<br>' +
      'Da branch ${{github.head_ref}} ' +
      'Para ${{github.base_ref}}'

    const messageCard = await createMessageCard(
      notificationSummary,
      notificationColor,
      author,
      message,
      prTitle,
      prUrl,
      timestamp
    )

    axios
      .post(msTeamsWebhookUri, messageCard)
      .then(function(response) {
        console.log(response)
        core.debug(response.data)
      })
      .catch(function(error) {
        core.debug(error)
      })
  } catch (error) {
    console.log(error)
    core.setFailed(error.message)
  }
}

run()
