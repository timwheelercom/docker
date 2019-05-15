const express = require("express")
const redis = require("redis")

const app = express()

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})
client.set('visits', 0)

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send(`Total Visits: ${visits}`)
        client.set('visits', parseInt(visits) + 1)
    })
})

const PORT = 8081
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
})