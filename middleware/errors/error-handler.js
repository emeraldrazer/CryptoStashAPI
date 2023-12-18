const {CustomAPIError} = require('../../errors')
const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({status: 'failed', msg: err.message })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({status: 'failed', msg: 'Something went wrong try again later'})
}

module.exports = errorHandlerMiddleware
