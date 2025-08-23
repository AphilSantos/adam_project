import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Waitlist = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <ScrollAnimatedSection animationType="scroll-animate">
              <h1>JOIN THE <span>CREATOR REVOLUTION</span></h1>
              <p>Be among the first to experience the ultimate creator tryout marketplace. Connect with brands, leagues, streamers, and athletes. Win cash, products, and exclusive experiences.</p>
              <div className="dual-cta-buttons">
                <Link to="/creator" className="cta-primary">Join As Creator</Link>
                <Link to="/dash" className="cta-secondary">Join As Brand</Link>
              </div>
            </ScrollAnimatedSection>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="profile-section">
                <div className="profile-image"></div>
                <div className="profile-info">
                  <h4>Creator Pro</h4>
                  <p>Content Creator</p>
                  <span className="success-badge">Tryout Winner</span>
                </div>
              </div>
              <div className="metric">
                <span className="number">8</span>
                <span className="label">Wins</span>
              </div>
            </div>
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <ScrollAnimatedSection animationType="scroll-animate-fade">
            <p className="trust-text">Trusted by leading brands, leagues, streamers & athletes</p>
          </ScrollAnimatedSection>
          <div className="trust-logos">
            <div className="trust-logos-track">
              <div className="logo-placeholder">Nike</div>
              <div className="logo-placeholder">Adidas</div>
              <div className="logo-placeholder">ESPN</div>
              <div className="logo-placeholder">Netflix</div>
              <div className="logo-placeholder">Spotify</div>
              <div className="logo-placeholder">TikTok</div>
              <div className="logo-placeholder">YouTube</div>
              <div className="logo-placeholder">Twitch</div>
              <div className="logo-placeholder">Nike</div>
              <div className="logo-placeholder">Adidas</div>
              <div className="logo-placeholder">ESPN</div>
              <div className="logo-placeholder">Netflix</div>
              <div className="logo-placeholder">Spotify</div>
              <div className="logo-placeholder">TikTok</div>
              <div className="logo-placeholder">YouTube</div>
              <div className="logo-placeholder">Twitch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <ScrollAnimatedSection animationType="scroll-animate">
            <div className="section-header">
              <span className="section-tag">ADVANTAGES</span>
              <h2>Why Join the Revolution</h2>
            </div>
          </ScrollAnimatedSection>
          <div className="benefits-grid">
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={100}>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Cash Rewards</h3>
                <p>Win instant cash payments via Stripe Connect. No waiting, no fees - just pure earnings for your creativity. Typical rewards range from $500 to $2,000 per winning tryout.</p>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={200}>
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h3>Brand Partnerships</h3>
                <p>Connect directly with brands, leagues, streamers, and athletes. Build lasting relationships and grow your audience with authentic brand collaborations.</p>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={300}>
              <div className="benefit-card">
                <div className="benefit-icon">📈</div>
                <h3>Real-Time Tracking</h3>
                <p>Monitor your submissions with live status updates. Get instant notifications when you're shortlisted or selected as a winner.</p>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={400}>
              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h3>Community Growth</h3>
                <p>Join thousands of creators who are already building their careers through our tryout marketplace. Be part of the next generation of content creation.</p>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works for Creators</h2>
            <p>Your journey from creator to winner in just a few simple steps</p>
          </div>

          <div className="process-steps">
            <ScrollAnimatedSection animationType="scroll-animate-left">
              <div className="step">
                <div className="step-content">
                  <div className="step-number">01</div>
                  <h3>Create Your Profile</h3>
                  <p>Build your creator profile with social handles, portfolio, and showcase your unique style to attract the right brands.</p>
                  <Link to="/creator" className="step-cta">Create Profile</Link>
                </div>
                <div className="step-visual">
                  <div className="mockup-card">
                    <div className="mockup-header">Creator Profile</div>
                    <div className="mockup-content">
                      <div className="mockup-line"></div>
                      <div className="mockup-line short"></div>
                      <div className="mockup-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animationType="scroll-animate-right">
              <div className="step reverse">
                <div className="step-content">
                  <div className="step-number">02</div>
                  <h3>Browse Opportunities</h3>
                  <p>Explore briefs from brands, leagues, streamers, and athletes that match your skills and interests.</p>
                  <Link to="/creator" className="step-cta">Browse Briefs</Link>
                </div>
                <div className="step-visual">
                  <div className="creator-grid">
                    <div className="creator-card">
                      <div className="creator-avatar"></div>
                      <div className="creator-stats">
                        <span>Fashion Brief</span>
                      </div>
                    </div>
                    <div className="creator-card">
                      <div className="creator-avatar"></div>
                      <div className="creator-stats">
                        <span>Tech Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animationType="scroll-animate-left">
              <div className="step">
                <div className="step-content">
                  <div className="step-number">03</div>
                  <h3>Submit & Win</h3>
                  <p>Create compelling content and submit via video links or uploads. Get selected and receive cash, products, or exclusive experiences.</p>
                  <Link to="/creator" className="step-cta">Start Creating</Link>
                </div>
                <div className="step-visual">
                  <div className="results-card">
                    <div className="results-header">Submission Results</div>
                    <div className="results-metrics">
                      <div className="metric-item">
                        <span className="metric-value">$800</span>
                        <span className="metric-label">Cash Won</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-value">3</span>
                        <span className="metric-label">Brand Deals</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Creator Network */}
      <section className="creator-network">
        <div className="container">
          <div className="section-header">
            <h2>Creators Across Every Niche</h2>
            <p>Join talented creators across all content categories and platforms. Build your network and grow together.</p>
            <Link to="/creator" className="cta-secondary">Join Creator Network</Link>
          </div>

          <div className="creator-categories">
            <div className="category-grid">
              <div className="category-card">
                <div className="category-icon">👗</div>
                <span>Fashion & Style</span>
              </div>
              <div className="category-card">
                <div className="category-icon">💄</div>
                <span>Beauty & Skincare</span>
              </div>
              <div className="category-card">
                <div className="category-icon">🏠</div>
                <span>Home & Lifestyle</span>
              </div>
              <div className="category-card">
                <div className="category-icon">💪</div>
                <span>Fitness & Health</span>
              </div>
              <div className="category-card">
                <div className="category-icon">🎮</div>
                <span>Gaming & Streaming</span>
              </div>
              <div className="category-card">
                <div className="category-icon">⚽</div>
                <span>Sports & Athletics</span>
              </div>
            </div>
          </div>

          <div className="network-stats">
            <div className="stat">
              <span className="stat-number">25K+</span>
              <span className="stat-label">Talented Creators</span>
            </div>
            <div className="stat">
              <span className="stat-number">1.2K+</span>
              <span className="stat-label">Successful Briefs</span>
            </div>
            <div className="stat">
              <span className="stat-number">$2.5M+</span>
              <span className="stat-label">Paid to Creators</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Creator Success Stories</h2>
            <p>See how creators are winning rewards and building amazing careers through our tryout marketplace</p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I've won 8 tryouts in 3 months and earned over $4,000 in cash rewards. Plus I got featured on 3 major brand social accounts!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>@sarah_creates</h4>
                  <span>Fashion & Lifestyle</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"My first tryout win was $800 cash! Now I consistently get shortlisted and have built amazing relationships with brands."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>@tech_mike</h4>
                  <span>Tech Reviews</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I've won products worth $2,000, got affiliate deals, and even attended exclusive events. This platform opened so many doors!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>@fitness_emma</h4>
                  <span>Health & Fitness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start <span>winning rewards?</span></h2>
            <div className="cta-stats">
              <div className="cta-stat">
                <span className="cta-number">25K+</span>
                <span className="cta-label">Talented Creators</span>
              </div>
              <div className="cta-stat">
                <span className="cta-number">1.2K+</span>
                <span className="cta-label">Successful Briefs</span>
              </div>
            </div>
            <div className="dual-cta-buttons">
              <Link to="/creator" className="cta-primary large">Join As Creator</Link>
              <Link to="/dash" className="cta-secondary large">Join As Brand</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waitlist; 