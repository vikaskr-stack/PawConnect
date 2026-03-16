import { useState } from 'react'
import './VetTips.css'

const tipsData = [
    {
        id: 1,
        category: 'Nutrition',
        title: 'Best Foods for Your Dog in Indian Summer',
        content: 'Keep your dog hydrated with fresh water every 2 hours. Add cucumber and watermelon to their diet. Avoid heavy meals during peak heat hours. Coconut water is great for electrolytes!',
        author: 'Dr. Priya Sharma',
        likes: 142,
        city: 'Bangalore'
    },
    {
        id: 2,
        category: 'Grooming',
        title: 'How Often Should You Bathe Your Cat?',
        content: 'Cats are self-cleaners but need help sometimes. Bathe them once every 4-6 weeks. Use cat-specific shampoo only. Make sure to dry them completely after bathing.',
        author: 'Dr. Arjun Mehta',
        likes: 98,
        city: 'Mumbai'
    },
    {
        id: 3,
        category: 'Health',
        title: 'Monsoon Vaccinations Every Pet Owner Must Know',
        content: 'Rainy season brings leptospirosis and parvovirus risks. Make sure your dog is vaccinated before monsoon. Keep paws dry and clean after walks. Watch for signs of infection.',
        author: 'Dr. Kavya Nair',
        likes: 211,
        city: 'Chennai'
    },
    {
        id: 4,
        category: 'Training',
        title: 'Teaching Basic Commands to Your Puppy',
        content: 'Start with sit, stay and come. Use positive reinforcement with treats. Keep sessions short — 10 minutes max. Be consistent and patient. Never punish during training.',
        author: 'Dr. Rohit Gupta',
        likes: 176,
        city: 'Delhi'
    },
    {
        id: 5,
        category: 'Health',
        title: 'Signs Your Cat Needs to Visit the Vet',
        content: 'Watch for loss of appetite, excessive thirst, lethargy, vomiting, and changes in litter box habits. Early detection saves lives! Schedule checkups every 6 months.',
        author: 'Dr. Meena Iyer',
        likes: 134,
        city: 'Pune'
    },
    {
        id: 6,
        category: 'Nutrition',
        title: 'Homemade Dog Food Recipes for Indian Kitchens',
        content: 'Rice and chicken is a great base. Add carrots, peas and sweet potato. Avoid onion, garlic, grapes and chocolate. Consult your vet before switching to homemade food.',
        author: 'Dr. Priya Sharma',
        likes: 89,
        city: 'Bangalore'
    }
]

function VetTips() {
    const [filter, setFilter] = useState('All')
    const [likes, setLikes] = useState({})
    const [showForm, setShowForm] = useState(false)
    const [form, setForm] = useState({ title: '', category: 'Health', content: '', author: '' })
    const [tips, setTips] = useState(tipsData)

    const categories = ['All', 'Health', 'Nutrition', 'Grooming', 'Training']

    const filteredTips = filter === 'All'
        ? tips
        : tips.filter(t => t.category === filter)

    const handleLike = (id) => {
        setLikes({ ...likes, [id]: !likes[id] })
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTip = {
            id: tips.length + 1,
            ...form,
            likes: 0,
            city: 'India'
        }
        setTips([newTip, ...tips])
        setShowForm(false)
        setForm({ title: '', category: 'Health', content: '', author: '' })
    }

    return (
        <div className="vettips-page">

            {/* NAVBAR */}
            <nav className="vt-nav">
                <div className="vt-logo" onClick={() => window.location.href = '/'}>🐾 PawConnect</div>
                <div className="vt-nav-links">
                    <a href="/dashboard">Home</a>
                    <a href="/adopt">Adopt</a>
                    <a href="#" className="active">Vet Tips</a>
                </div>
                <button className="vt-post-btn" onClick={() => setShowForm(!showForm)}>
                    + Share a Tip
                </button>
            </nav>

            <div className="vt-body">

                {/* HEADER */}
                <div className="vt-header">
                    <div className="section-label">Expert Advice</div>
                    <h1>Vet Tips & Care Guides</h1>
                    <p>Real advice from verified vets and experienced pet owners across India</p>
                </div>

                {/* FILTERS */}
                <div className="vt-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`vt-filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* SHARE TIP FORM */}
                {showForm && (
                    <div className="vt-form">
                        <h3>Share a Vet Tip</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input name="title" placeholder="e.g. Best foods for dogs in summer" value={form.title} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <select name="category" value={form.category} onChange={handleChange}>
                                        <option>Health</option>
                                        <option>Nutrition</option>
                                        <option>Grooming</option>
                                        <option>Training</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Your Tip</label>
                                <textarea name="content" placeholder="Share your knowledge..." value={form.content} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input name="author" placeholder="e.g. Dr. Your Name" value={form.author} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="vt-submit-btn">Share Tip</button>
                        </form>
                    </div>
                )}

                {/* TIPS GRID */}
                <div className="vt-grid">
                    {filteredTips.map(tip => (
                        <div key={tip.id} className="tip-card">
                            <div className="tip-top">
                                <span className={`tip-tag ${tip.category.toLowerCase()}`}>{tip.category}</span>
                                <span className="tip-city">{tip.city}</span>
                            </div>
                            <h3>{tip.title}</h3>
                            <p>{tip.content}</p>
                            <div className="tip-bottom">
                                <span className="tip-author">👨‍⚕️ {tip.author}</span>
                                <button
                                    className={`like-btn ${likes[tip.id] ? 'liked' : ''}`}
                                    onClick={() => handleLike(tip.id)}
                                >
                                    {likes[tip.id] ? '♥' : '♡'} {tip.likes + (likes[tip.id] ? 1 : 0)}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default VetTips