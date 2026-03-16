import { useState } from 'react'
import axios from 'axios'
import './Login.css'

function Login() {
    const [form, setForm] = useState({ email: '', password: '' })
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', form)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            setMessage('Login successful! Welcome back!')
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 1000)
        } catch (err) {
            if (err.response) {
                setMessage(err.response.data.message)
            } else {
                setMessage('Cannot connect to server. Make sure backend is running!')
            }
        }
        setLoading(false)
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-logo">🐾 PawConnect</div>
                <h2>Welcome back!</h2>
                <p className="auth-sub">Log in to your PawConnect account</p>

                {message && <div className="auth-message">{message}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-btn" disabled={loading}>
                        {loading ? 'Logging in...' : 'Log In'}
                    </button>
                </form>

                <p className="auth-switch">
                    Don't have an account? <a href="/signup">Sign Up Free</a>
                </p>
            </div>
        </div>
    )
}

export default Login