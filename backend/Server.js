const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}))
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/pets', require('./routes/pets'))

app.get('/', (req, res) => {
    res.json({ message: 'PawConnect server is running!' })
})

const PORT = 5000

app.listen(PORT, () => {
    console.log('Server is running on port 5000')
})