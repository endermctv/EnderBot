require('dotenv').config()
import {
    Request,
    Response
} from 'express';

const app = express()
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Le serveur est démarré sur le port ${PORT}.`))

app.get('/', (req: Request, res: Response) => {
    res.type('html')
    res.sendFile(`${__dirname}/views/index.html`)
})

app.use(express.static(__dirname))
