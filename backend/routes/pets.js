const express = require('express')
const router = express.Router()
const db = require('../db')

// GET all pets for adoption
router.get('/', async (req, res) => {
    try {
        const pets = await db.pets.find({})
        res.json(pets)
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message })
    }
})

// POST list a new pet for adoption
router.post('/', async (req, res) => {
    try {
        const { name, breed, age, city, description, tags, emoji } = req.body

        const pet = await db.pets.insert({
            name,
            breed,
            age,
            city,
            description,
            tags,
            emoji: emoji || '🐾',
            createdAt: new Date()
        })

        res.status(201).json({ message: 'Pet listed successfully!', pet })
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message })
    }
})

module.exports = router