const chalk = require('chalk')
const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const debug = require('debug')('app')
const PORT = process.env.PORT || 3000
const htmlEngine = require('./src/utils/htmlEngine')

app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'src/views'))
htmlEngine(app)


// NEW LINE IN FIX/1
// I also add a line in fix/2
// add 1
// add 2
app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(PORT, () => {
  debug(`Server is running on ${chalk.blue(PORT)}`)
})

// This line add in fix/3 will not be conflict
