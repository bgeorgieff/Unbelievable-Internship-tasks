const express = require('express')
const path = require('path')

const app = express()
const PORT = 9000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './pages/index.html'))
})

app.use(express.static(path.join(__dirname, '../public')))
app.use('/styles/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/styles/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})