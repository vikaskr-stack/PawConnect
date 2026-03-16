import './Dashboard.css'

function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.href = '/'
    }

    return (
        <div className="dashboard">

            {/* NAVBAR */}
            <nav className="dash-nav">
                <div className="dash-logo">🐾 PawConnect</div>
                <div className="dash-nav-links">
                    <a href="/dashboard" className="active">Home</a>
                    <a href="/adopt">Adopt</a>
                    <a href="/vettips">Vet Tips</a>
                </div>
                <div className="dash-nav-right">
                    <div className="dash-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            <div className="dash-body">

                {/* LEFT SIDEBAR */}
                <div className="dash-sidebar">
                    <div className="profile-card">
                        <div className="profile-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
                        <h3>{user?.name}</h3>
                        <p>{user?.email}</p>
                        <button className="edit-profile-btn">Edit Profile</button>
                    </div>

                    <div className="sidebar-menu">
                        <div className="menu-item active">🏠 Home Feed</div>
                        <div className="menu-item" onClick={() => window.location.href = '/adopt'}>🏠 Adoptions</div>
                        <div className="menu-item" onClick={() => window.location.href = '/vettips'}>🩺 Vet Tips</div>
                        <div className="menu-item">🗺️ Rescue Map</div>
                        <div className="menu-item">🔔 Notifications</div>
                    </div>
                </div>

                {/* MAIN FEED */}
                <div className="dash-main">

                    {/* CREATE POST */}
                    <div className="create-post">
                        <div className="create-post-top">
                            <div className="post-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
                            <input type="text" placeholder="Share something about your pet..." />
                        </div>
                        <div className="create-post-bottom">
                            <button className="post-action-btn">📷 Photo</button>
                            <button className="post-action-btn">🐾 Tag Pet</button>
                            <button className="post-btn">Post</button>
                        </div>
                    </div>

                    {/* FEED POSTS */}
                    <div className="feed-post">
                        <div className="post-header">
                            <div className="post-user-avatar">R</div>
                            <div>
                                <h4>Rahul Sharma</h4>
                                <p>2 hours ago · Bangalore</p>
                            </div>
                        </div>
                        <p className="post-text">My golden retriever Bruno just learned how to shake hands! So proud of him 🐕❤️</p>
                        <div className="post-img-placeholder">🐕</div>
                        <div className="post-actions">
                            <button className="action-btn">♥ Like (24)</button>
                            <button className="action-btn">💬 Comment (5)</button>
                            <button className="action-btn">↗ Share</button>
                        </div>
                    </div>

                    <div className="feed-post">
                        <div className="post-header">
                            <div className="post-user-avatar" style={{ background: '#FAEEDA', color: '#633806' }}>P</div>
                            <div>
                                <h4>Priya Nair</h4>
                                <p>5 hours ago · Mumbai</p>
                            </div>
                        </div>
                        <p className="post-text">Mochi is officially 1 year old today! 🎂🐈 She loves playing with her feather toy and sleeping on my laptop keyboard 😂</p>
                        <div className="post-img-placeholder" style={{ background: '#FAEEDA' }}>🐈</div>
                        <div className="post-actions">
                            <button className="action-btn">♥ Like (56)</button>
                            <button className="action-btn">💬 Comment (12)</button>
                            <button className="action-btn">↗ Share</button>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDEBAR */}
                <div className="dash-right">

                    <div className="widget">
                        <h4>🐾 Pets Near You</h4>
                        <div className="nearby-pet">
                            <div className="nearby-emoji">🐕</div>
                            <div>
                                <p className="nearby-name">Bruno, 2 yrs</p>
                                <p className="nearby-loc">Bangalore · 2km</p>
                            </div>
                            <button className="adopt-small-btn">Adopt</button>
                        </div>
                        <div className="nearby-pet">
                            <div className="nearby-emoji">🐈</div>
                            <div>
                                <p className="nearby-name">Mochi, 1 yr</p>
                                <p className="nearby-loc">Bangalore · 5km</p>
                            </div>
                            <button className="adopt-small-btn">Adopt</button>
                        </div>
                    </div>

                    <div className="widget">
                        <h4>🩺 Latest Vet Tips</h4>
                        <div className="vet-tip-item">
                            <span className="tip-dot">●</span>
                            <p>Summer hydration tips for dogs</p>
                        </div>
                        <div className="vet-tip-item">
                            <span className="tip-dot">●</span>
                            <p>Monsoon vaccinations guide</p>
                        </div>
                        <div className="vet-tip-item">
                            <span className="tip-dot">●</span>
                            <p>Best diet for Persian cats</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard