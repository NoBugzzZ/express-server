const express = require('express')
const app = express()
const port = 7777

app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.end(JSON.stringify({ hello: "123", name: '333' }))
})


app.use('/vite-vue2', express.static('./dist'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
