import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './models/dbCards.js'

//App Config
const app = express()
const port = process.env.PORT || 8001
const connectionURl = process.env.DB_URL
//middleware
app.use(express.json())
app.use(Cors())
//DB config
mongoose.connect(connectionURl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//API end point
app.get('/', (req, res) => res.status(200).send('Hello'))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body

    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {

    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
//Listener
app.listen(port, () => console.log(`Listing on localhost: ${port}`))