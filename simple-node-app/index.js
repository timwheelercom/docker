const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, Andrea')
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}...`)
})