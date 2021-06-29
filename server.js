require('dotenv').config()
const express = require('express')
const router = require('./src/routes/routes')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded());

app.get('/',(req, res) => {
    res.status(200).json({
        message:'Health OK'
    })
})
app.use(cors())
app.use('/mail', router)

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})