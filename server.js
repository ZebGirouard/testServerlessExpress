const express = require('express')
const serverless = require('serverless-http')

const app = express()

app.use((err, req, res, next) => {
  // if (err) {
  //   if (undefined !== err.passthrough && err.passthrough) {
  //     res.status( err.status || 500)
  //     res.json({ error: err.message })
  //   } else {
      console.error(`uncaught error ${ err.stack }`)
      res.sendStatus(500)
  //   }
  // }
})

const app.get('/', (req, res, err) => {
  res.send(err || 'hi there')
})

app.get('/*', (req, res) => {
  res.send(err || 'default route')
})

module.exports.server = serverless(app)

// const express = require('express')
// const serverless = require('serverless-http')
// const app = express()
// app.get('/', (req, res) => {
//   res.send('Hello Worldo!')
// })
// module.exports.server = serverless(app)
