import { useState, useEffect } from 'react'
import axios from 'axios'
import './Adopt.css'

function Adopt() {
    const [pets, setPets] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [filter, setFilter] = useState('All')
    const [form, setForm] = useState({
        name: '', breed: '', age: '', city: '',
        description: '', tags: '', emoji: '🐕'
    })
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetchPets()
    }, [])

    const fetchPets = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/pets')
            setPets(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/api/pets', form)
            setMessage('Pet listed successfully!')
            setShowForm(false)
            fetchPets()
        } catch (err) {
            setMessage('Something went wrong!')
        }
    }

    const cities = ['All', 'Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Chennai']

    const filteredPets = filter === 'All'
        ? pets
        : pets.filter(p => p.city === filter)

    return (
        <div className="adopt-page">

            {/* NAVBAR */}
            <nav className="adopt-nav">
                <div className="adopt-logo" onClick={() => window.location.href = '/'}>🐾 PawConnect</div>
                <div className="adopt-nav-links">
                    <a href="/dashboard">Home</a>
                    <a href="#" className="active">Adopt</a>
                    <a href="/vettips">Vet Tips</a>
                </div>
                <button className="list-pet-btn" onClick={() => setShowForm(!showForm)}>
                    + List a Pet
                </button>
            </nav>

            <div className="adopt-body">

                {/* HEADER */}
                <div className="adopt-header">
                    <div className="section-label">Open for Adoption</div>
                    <h1>Find Your Forever Friend</h1>
                    <p>Browse pets looking for a loving home across India</p>
                </div>

                {/* FILTER */}
                <div className="city-filters">
                    {cities.map(city => (
                        <button
                            key={city}
                            className={`city-btn ${filter === city ? 'active' : ''}`}
                            onClick={() => setFilter(city)}
                        >
                            {city}
                        </button>
                    ))}
                </div>

                {/* LIST PET FORM */}
                {showForm && (
                    <div className="list-form">
                        <h3>List a Pet for Adoption</h3>
                        {message && <div className="form-message">{message}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Pet Name</label>
                                    <input name="name" placeholder="e.g. Bruno" onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Breed</label>
                                    <input name="breed" placeholder="e.g. Golden Retriever" onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input name="age" placeholder="e.g. 2 years" onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input name="city" placeholder="e.g. Bangalore" onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description" placeholder="Tell us about this pet..." onChange={handleChange} required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Tags (comma separated)</label>
                                    <input name="tags" placeholder="e.g. Vaccinated, Friendly" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Pet Emoji</label>
                                    <select name="emoji" onChange={handleChange}>
                                        <option value="🐕">🐕 Dog</option>
                                        <option value="🐈">🐈 Cat</option>
                                        <option value="🐇">🐇 Rabbit</option>
                                        <option value="🐦">🐦 Bird</option>
                                        <option value="🐹">🐹 Hamster</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="submit-btn">List This Pet</button>
                        </form>
                    </div>
                )}

                {/* PETS GRID */}
                {filteredPets.length === 0 ? (
                    <div className="no-pets">
                        <div className="no-pets-emoji">🐾</div>
                        <h3>No pets listed yet!</h3>
                        <p>Be the first to list a pet for adoption</p>
                        <button className="list-pet-btn" onClick={() => setShowForm(true)}>+ List a Pet</button>
                    </div>
                ) : (
                    <div className="pets-grid">
                        {filteredPets.map(pet => (
                            <div key={pet._id} className="pet-card">
                                <div className="pet-emoji-box">{pet.emoji}</div>
                                <div className="pet-info">
                                    <h3>{pet.name}, {pet.age}</h3>
                                    <p className="pet-breed">{pet.breed} · {pet.city}</p>
                                    <p className="pet-desc">{pet.description}</p>
                                    <div className="pet-tags">
                                        {pet.tags && pet.tags.split(',').map((tag, i) => (
                                            <span key={i} className="ptag">{tag.trim()}</span>
                                        ))}
                                    </div>
                                    <button className="adopt-btn">Apply to Adopt</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Adopt