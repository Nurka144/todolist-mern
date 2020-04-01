const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const bodyParser = require('body-parser')

// Create express server
const app = express()

//Express configuration
app.set('port', config.get('port'))
app.set('mongodb', config.get('MongoUrl'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Main routing Api
app.use(require('./routes/route'))

//Routing Not Found
app.use((req, res) => {
    res.type('text/plain')
        .status(404)
        .send('404 - Page Not Found')
})

//Run server
const runServer = async () => {
    try {
        await mongoose.connect(app.get('mongodb'), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('MongoDB connected'))
        app.listen(app.get('port'), () => {
            console.log('App is running at http://localhost:%d', app.get('port'))
            console.log('Press CTRL-C to stop\n')
        })
    } catch (e) {
        console.log('MongoDB connection error. Please make sure MongoDB is running => %d', e)
        process.exit(1)
    }
}

runServer()
