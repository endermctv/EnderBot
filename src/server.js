require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Le serveur est démarré sur le port ${PORT}.`))
app.get('/', (req, res) => {
    res.sendFile('./views/index.html')
})

// let server
// module.exports = server