const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: String, default: '' },
    emoji: { type: String, default: '🐾' },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Pet', PetSchema)