/* eslint-disable no-undef */
log.info('The test worker handler file was successfully loaded')
log.info('A worker will start, then shut down shortly...')

module.exports = {
  tasks: {
    'get-some-yo': job => {
      log.info('Worker handler called...')
      job.complete()
    }
  }
}
