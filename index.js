const routes = require('./routes')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', routes)

const uri = 'mongodb+srv://ellaburnas:BeansBackend2024@cluster0.kkn9bnj.mongodb.net/'

async function connect(){
    try {
        await mongoose.connect(uri)
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}

connect()

app.listen(8000, () => {
    console.log('server started')
})