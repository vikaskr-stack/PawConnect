const express = require('express')
const router = express.Router()
const Pet = require('../models/Pet')

router.get('/', async (req, res) => {
    try {
        const pets = await Pet.find({})
        res.json(pets)
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, breed, age, city, description, tags, emoji } = req.body

        const pet = new Pet({
            name, breed, age, city, description, tags,
            emoji: emoji || '🐾'
        })

        await pet.save()
        res.status(201).json({ message: 'Pet listed successfully!', pet })

    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message })
    }
})

module.exports = router