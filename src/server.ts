require('dotenv').config()
import * as express from 'express'

const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Le serveur est démarré à l'adresse http://localhost:${PORT}.`))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.use(express.static(__dirname))
