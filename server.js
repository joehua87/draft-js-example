const path = require('path')
const webpack = require('webpack')
const config = require('./webpack.config')

const Express = require('express')
const app = new Express() // eslint-disable-line
const port = 3000

if (process.env.NODE_ENV === 'development') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))

} else {
  app.use('/static', Express.static(path.join(__dirname, 'static')))
}

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
