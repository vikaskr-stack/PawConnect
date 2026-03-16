import { useState } from 'react'
import axios from 'axios'
import './Signup.css'

function Signup() {
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', form)
            setMessage(res.data.message)
        } catch (err) {
            if (err.response) {
                setMessage(err.response.data.message)
            } else {
                setMessage('Cannot connect to server!')
            }
        }
        setLoading(false)
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-logo">🐾 PawConnect</div>
                <h2>Create your account</h2>
                <p className="auth-sub">Join India's favourite pet community!</p>
                {message && <div className="auth-message">{message}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Create a password" value={form.password} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="auth-btn" disabled={loading}>
                        {loading ? 'Creating account...' : 'Sign Up Free'}
                    </button>
                </form>
                <p className="auth-switch">
                    Already have an account? <a href="/login">Log In</a>
                </p>
            </div>
        </div>
    )
}

export default Signup