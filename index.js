module.exports = (robot) => {
  console.log('Yay, the app was loaded!')

  robot.on('push', async (context) => {
    console.log('pushed code')
  })

  robot.on('issues.opened', async (context) => {
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    const params = context.issue({body: 'Hello World!'})

    // Post a comment on the issue
    return context.github.issues.createComment(params)
  })

  robot.on('pull_request_review.submitted', async (context) => {
    console.log('PR Review Submitted', context.payload)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
