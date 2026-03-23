const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.log('DB Error:', err))

app.use('/api/auth', require('./routes/auth'))
app.use('/api/pets', require('./routes/pets'))

app.get('/', (req, res) => {
    res.json({ message: 'PawConnect server is running!' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})