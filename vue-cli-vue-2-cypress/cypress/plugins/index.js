const { startDevServer } = require('@cypress/webpack-dev-server')
const webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = (on, config) => {
  on('dev-server:start', (options) => {
    const modifiedWebpackConfig = {
      ...webpackConfig,
      plugins: (webpackConfig.plugins || []).filter((x) => {
        return x.constructor.name !== 'HtmlPwaPlugin'
      }),
    }

    return startDevServer({
      options,
      webpackConfig: modifiedWebpackConfig,
    })
  })

  return config
}
