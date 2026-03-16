import '../App.css'

function Home() {
    return (
        <div className="app">

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="logo">🐾 PawConnect</div>
                <div className="nav-links">
                    <a href="#">Community</a>
                    <a href="#">Adopt</a>
                    <a href="#">Vet Tips</a>
                    <a href="#">Rescue Map</a>
                </div>
                <div className="nav-buttons">
                    <button className="btn-ghost" onClick={() => window.location.href = '/login'}>Log In</button>
                    <button className="btn-fill" onClick={() => window.location.href = '/signup'}>Join Free</button>
                </div>
            </nav>

            {/* HERO */}
            <div className="hero">
                <div className="hero-text">
                    <div className="badge">🟢 India's Animal Community</div>
                    <h1>Where Every <span>Pet</span> Finds Their People</h1>
                    <p>Share stories, find forever homes, get expert vet advice — all in one place built for India's animal lovers.</p>
                    <div className="hero-btns">
                        <button className="btn-main" onClick={() => window.location.href = '/signup'}>Join the Community</button>
                        <button className="btn-secondary">Browse Adoptions →</button>
                    </div>
                    <div className="stats">
                        <div className="stat"><h3>12K+</h3><p>Pet Owners</p></div>
                        <div className="stat"><h3>840+</h3><p>Pets Adopted</p></div>
                        <div className="stat"><h3>200+</h3><p>Vet Tips</p></div>
                    </div>
                </div>
                <div className="hero-card">
                    <div className="pet-emoji">🐕</div>
                    <h3>Bruno, 2 years</h3>
                    <p>Golden Retriever · Bangalore</p>
                    <div className="tags">
                        <span className="tag green">Vaccinated</span>
                        <span className="tag amber">Friendly</span>
                        <span className="tag green">Neutered</span>
                    </div>
                    <button className="adopt-btn">Apply to Adopt</button>
                </div>
            </div>

            {/* HOW IT WORKS */}
            <div className="hiw-bg">
                <div className="section">
                    <div className="section-label">Simple & Easy</div>
                    <div className="section-title">How PawConnect Works</div>
                    <div className="section-sub">Join thousands of animal lovers across India in just 3 simple steps.</div>
                    <div className="steps">
                        <div className="step">
                            <div className="step-num">1</div>
                            <div className="step-icon">👤</div>
                            <h3>Create Your Profile</h3>
                            <p>Sign up free and add your pets. Upload photos, add their breed, age and personality.</p>
                        </div>
                        <div className="step">
                            <div className="step-num">2</div>
                            <div className="step-icon">🐾</div>
                            <h3>Connect & Share</h3>
                            <p>Post stories, follow other pet owners, get vet tips and join the community feed.</p>
                        </div>
                        <div className="step">
                            <div className="step-num">3</div>
                            <div className="step-icon">🏠</div>
                            <h3>Adopt or Rescue</h3>
                            <p>Browse pets near you, apply to adopt, or list a rescued animal to find them a home.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURED PETS */}
            <div className="section">
                <div className="section-label">Open for Adoption</div>
                <div className="section-title">Find Your Forever Friend</div>
                <div className="section-sub">These loving animals are waiting for their perfect home. Could it be yours?</div>
                <div className="pets-grid">
                    <div className="pet-card">
                        <div className="pet-img dog">🐕</div>
                        <div className="pet-info">
                            <h3>Bruno, 2 yrs</h3>
                            <p className="breed">Golden Retriever · Bangalore</p>
                            <div className="pet-tags">
                                <span className="ptag g">Vaccinated</span>
                                <span className="ptag a">Friendly</span>
                            </div>
                            <button className="adopt-btn">Apply to Adopt</button>
                        </div>
                    </div>
                    <div className="pet-card">
                        <div className="pet-img cat">🐈</div>
                        <div className="pet-info">
                            <h3>Mochi, 1 yr</h3>
                            <p className="breed">Persian Cat · Mumbai</p>
                            <div className="pet-tags">
                                <span className="ptag g">Neutered</span>
                                <span className="ptag pink">Playful</span>
                            </div>
                            <button className="adopt-btn">Apply to Adopt</button>
                        </div>
                    </div>
                    <div className="pet-card">
                        <div className="pet-img rabbit">🐇</div>
                        <div className="pet-info">
                            <h3>Coco, 8 mo</h3>
                            <p className="breed">Holland Lop · Pune</p>
                            <div className="pet-tags">
                                <span className="ptag g">Healthy</span>
                                <span className="ptag a">Calm</span>
                            </div>
                            <button className="adopt-btn">Apply to Adopt</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* VET TIPS */}
            <div className="tips-bg">
                <div className="section">
                    <div className="section-label">Expert Advice</div>
                    <div className="section-title">Vet Tips & Care Guides</div>
                    <div className="section-sub">Real advice from verified vets and experienced pet owners across India.</div>
                    <div className="tips-grid">
                        <div className="tip-card">
                            <span className="tip-tag">Nutrition</span>
                            <h3>Best Foods for Your Dog in Indian Summer</h3>
                            <p>Keep your dog hydrated and healthy with these vet-approved diet tips for hot weather.</p>
                            <div className="tip-footer">
                                <span className="tip-author">Dr. Priya Sharma</span>
                                <span className="tip-likes">♥ 142</span>
                            </div>
                        </div>
                        <div className="tip-card">
                            <span className="tip-tag">Grooming</span>
                            <h3>How Often Should You Bathe Your Cat?</h3>
                            <p>Cats are self-cleaners but sometimes need help. Here's what vets recommend.</p>
                            <div className="tip-footer">
                                <span className="tip-author">Dr. Arjun Mehta</span>
                                <span className="tip-likes">♥ 98</span>
                            </div>
                        </div>
                        <div className="tip-card">
                            <span className="tip-tag">Health</span>
                            <h3>Monsoon Vaccinations Every Pet Owner Must Know</h3>
                            <p>Rainy season brings hidden risks. Protect your pets with these essential vaccines.</p>
                            <div className="tip-footer">
                                <span className="tip-author">Dr. Kavya Nair</span>
                                <span className="tip-likes">♥ 211</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-inner">
                    <div>
                        <div className="footer-logo">🐾 PawConnect</div>
                        <div className="footer-desc">India's favourite community for pet owners, animal rescuers and wildlife lovers.</div>
                    </div>
                    <div className="footer-col">
                        <h4>Community</h4>
                        <a href="#">Social Feed</a>
                        <a href="#">Pet Profiles</a>
                        <a href="#">Rescue Map</a>
                    </div>
                    <div className="footer-col">
                        <h4>Adopt</h4>
                        <a href="#">Browse Pets</a>
                        <a href="#">List a Pet</a>
                        <a href="#">Success Stories</a>
                    </div>
                    <div className="footer-col">
                        <h4>Support</h4>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2025 PawConnect. Made with ♥ in India</span>
                    <span>All rights reserved</span>
                </div>
            </footer>

        </div>
    )
}

export default Home