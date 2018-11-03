var fs = require('fs')

function htmlEngine(app) {
  app.engine('html', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      const rendered = content.toString()
      return callback(null, rendered)
    })
  })
}

module.exports = htmlEngine
