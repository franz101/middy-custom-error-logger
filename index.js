module.exports = (opts) => {
  const defaults = {
    logger: console.error
  }

  const options = Object.assign({}, defaults, opts)

  return ({
    onError: (handler, next) => {
      if (typeof options.logger === 'function') {
        const context = handler.context
          const awsRequestId = handler.context.awsRequestId
          const invocationEvent = JSON.stringify(handler.event)
               options.logger(["exception", { awsRequestId, invocationEvent,context, error:handler.error }])
 }

      // does not handle the error (keeps propagating it)
      return next(handler.error)
    }
  })
}
