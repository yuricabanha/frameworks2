const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Página Inicial GET')
})

app.put('/', (req, res) => {
    res.send('Pagina Incial PUT')
})

app.post('/', (req, res) => {
    res.send('Pagina Incial POST')
})

app.delete('/', (req, res) => {
    res.send('Pagina Incial DELETE')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})