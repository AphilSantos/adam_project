import React, { useState } from 'react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero waitlist-hero">
        <div className="hero-container">
          <div className="hero-content">
            <ScrollAnimatedSection animationType="scroll-animate">
              <h1>Join the <span>Creator Revolution</span></h1>
              <p>Be among the first to experience the ultimate creator tryout marketplace. Connect with brands, leagues, streamers, and athletes. Win cash, products, and exclusive experiences.</p>
              
              {!isSubmitted ? (
                <div className="waitlist-form-container">
                  <form onSubmit={handleSubmit} className="waitlist-form">
                    <div className="email-input-group">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="email-input"
                        disabled={isLoading}
                      />
                      <button 
                        type="submit" 
                        className="waitlist-submit-btn"
                        disabled={isLoading || !email}
                      >
                        {isLoading ? (
                          <div className="loading-spinner">
                            <div className="spinner-ring"></div>
                          </div>
                        ) : (
                          'Join Waitlist'
                        )}
                      </button>
                    </div>
                    <p className="form-subtext">Get early access and exclusive updates</p>
                  </form>
                </div>
              ) : (
                <div className="success-message">
                  <div className="success-icon">
                    <div className="checkmark">
                      <div className="checkmark-circle"></div>
                      <div className="checkmark-stem"></div>
                      <div className="checkmark-kick"></div>
                    </div>
                  </div>
                  <h3>You're on the list! 🎉</h3>
                  <p>We'll notify you as soon as we launch. Get ready to start winning amazing rewards!</p>
                </div>
              )}
            </ScrollAnimatedSection>
          </div>
          <div className="hero-visual">
            <div className="waitlist-stats-card">
              <div className="stats-header">
                <span className="stats-label">Early Access</span>
              </div>
              <div className="stats-content">
                <div className="stat-item">
                  <span className="stat-number">2,847</span>
                  <span className="stat-label">Creators Joined</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">156</span>
                  <span className="stat-label">Brands Ready</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">$2.5M+</span>
                  <span className="stat-label">Rewards Pool</span>
                </div>
              </div>
              <div className="stats-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '75%'}}></div>
                </div>
                <span className="progress-text">75% to launch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="features-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">COMING SOON</span>
            <h2>What You'll Get Access To</h2>
            <p>Join thousands of creators who are already building their careers through our tryout marketplace</p>
          </div>
          
          <div className="features-grid">
            <ScrollAnimatedSection animationType="scroll-animate-left" delay={100}>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Cash Rewards</h3>
                <p>Win instant cash payments via Stripe Connect. No waiting, no fees - just pure earnings for your creativity.</p>
                <div className="feature-example">
                  <span className="example-amount">$500 - $2,000</span>
                  <span className="example-label">per winning tryout</span>
                </div>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={200}>
              <div className="feature-card featured">
                <div className="featured-badge">Most Popular</div>
                <div className="feature-icon">🎯</div>
                <h3>Brand Partnerships</h3>
                <p>Connect directly with brands, leagues, streamers, and athletes. Build lasting relationships and grow your audience.</p>
                <div className="feature-example">
                  <span className="example-amount">25K+</span>
                  <span className="example-label">active creators</span>
                </div>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animationType="scroll-animate-right" delay={300}>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Real-Time Tracking</h3>
                <p>Monitor your submissions with live status updates. Get instant notifications when you're shortlisted or selected.</p>
                <div className="feature-example">
                  <span className="example-amount">Instant</span>
                  <span className="example-label">status updates</span>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="how-it-works-preview">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Your journey from creator to winner in just a few simple steps</p>
          </div>
          
          <div className="steps-preview">
            <div className="step-preview">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Create Your Profile</h3>
                <p>Build your creator profile with social handles, portfolio, and showcase your unique style.</p>
              </div>
            </div>
            
            <div className="step-preview">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Browse Opportunities</h3>
                <p>Explore briefs from brands, leagues, streamers, and athletes that match your skills.</p>
              </div>
            </div>
            
            <div className="step-preview">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Submit Your Tryout</h3>
                <p>Create compelling content and submit via video links or uploads with notes to stand out.</p>
              </div>
            </div>
            
            <div className="step-preview">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Win Rewards</h3>
                <p>Get selected and receive cash, products, promotional features, or exclusive experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <div className="section-header">
            <h2>Join the Community</h2>
            <p>See what creators are saying about the platform</p>
          </div>
          
          <div className="testimonials-grid">
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={100}>
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
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={200}>
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
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={300}>
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
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta waitlist-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start <span>winning rewards?</span></h2>
            <p>Join thousands of creators who are already building their careers through our tryout marketplace</p>
            
            {!isSubmitted ? (
              <div className="waitlist-form-container">
                <form onSubmit={handleSubmit} className="waitlist-form">
                  <div className="email-input-group">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      className="email-input"
                      disabled={isLoading}
                    />
                    <button 
                      type="submit" 
                      className="waitlist-submit-btn"
                      disabled={isLoading || !email}
                    >
                      {isLoading ? (
                        <div className="loading-spinner">
                          <div className="spinner-ring"></div>
                        </div>
                      ) : (
                        'Join Waitlist'
                      )}
                    </button>
                  </div>
                  <p className="form-subtext">Get early access and exclusive updates</p>
                </form>
              </div>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <div className="checkmark">
                    <div className="checkmark-circle"></div>
                    <div className="checkmark-stem"></div>
                    <div className="checkmark-kick"></div>
                  </div>
                </div>
                <h3>You're on the list! 🎉</h3>
                <p>We'll notify you as soon as we launch. Get ready to start winning amazing rewards!</p>
              </div>
            )}
            
            <div className="cta-stats">
              <div className="cta-stat">
                <span className="cta-number">2,847</span>
                <span className="cta-label">Creators Joined</span>
              </div>
              <div className="cta-stat">
                <span className="cta-number">156</span>
                <span className="cta-label">Brands Ready</span>
              </div>
              <div className="cta-stat">
                <span className="cta-number">$2.5M+</span>
                <span className="cta-label">Rewards Pool</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waitlist; 