import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Creators = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I submit a tryout?",
      answer: "Browse available briefs in our marketplace, select one that matches your skills, then submit your tryout via video link or file upload along with any additional notes to make your submission stand out."
    },
    {
      question: "What types of rewards can I win?",
      answer: "You can win cash payments processed via Stripe, products sent directly to you, promotional features on brand social media, affiliate links/codes, or exclusive experiences like VIP event access."
    },
    {
      question: "How do I track my submission status?",
      answer: "Your creator dashboard shows all your active briefs, past submissions, and real-time status updates. You'll see if your submission is New, Shortlisted, or Winner, plus get instant notifications."
    },
    {
      question: "Do I need a large following to win?",
      answer: "No! Quality content and creativity matter more than follower count. Many of our winning creators started with small audiences and built their following through the platform."
    },
    {
      question: "How quickly do I get rewarded if I win?",
      answer: "Cash rewards are processed instantly via Stripe Connect payouts. Product rewards are shipped directly by brands, and promotional features go live immediately on their social channels."
    },
    {
      question: "Is there a cost to join as a creator?",
      answer: "The platform is completely free for creators. There's an optional Pro plan for $29.99/month with additional features, but you can win rewards without any subscription."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero creators-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Create for the Brands <span>You Believe In</span></h1>
            <p>Join the ultimate creator tryout marketplace. Submit your best content to brands, leagues, streamers, and athletes. Win cash, products, promo features, and exclusive experiences.</p>
                                     <div className="dual-cta-buttons">
              <Link to="/dash" className="cta-primary">Join As Creator</Link>
              <Link to="/brand" className="cta-secondary">Join As Brand</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="creator-earnings-card">
              <div className="earnings-header">
                <span className="earnings-label">This Month</span>
              </div>
              <div className="earnings-amount">
                <span className="currency">$</span>
                <span className="amount">2,847</span>
              </div>
              <div className="earnings-growth">
                <span className="growth-indicator">↗</span>
                <span className="growth-text">+23% from last month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works creators-process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">HOW IT WORKS</span>
            <h2>Your Creator Tryout Journey</h2>
            <p>Connect with brands, leagues, streamers, and athletes through our tryout marketplace. Here's how to start winning rewards.</p>
          </div>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-content">
                <div className="step-number">01</div>
                <h3>Build Your Creator Profile</h3>
                <p>Create your profile with username, social handles, portfolio, and follower counts. Showcase your content style and build your Creator ID.</p>
                                 <Link to="/dash" className="step-cta">Create Profile</Link>
              </div>
              <div className="step-visual">
                <div className="profile-mockup">
                  <div className="profile-header">
                    <div className="profile-avatar"></div>
                    <div className="profile-info">
                      <div className="profile-name"></div>
                      <div className="profile-stats">
                        <div className="stat-item">
                          <span className="stat-number">12</span>
                          <span className="stat-label">Campaigns</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-number">4.9</span>
                          <span className="stat-label">Rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-portfolio">
                    <div className="portfolio-item"></div>
                    <div className="portfolio-item"></div>
                    <div className="portfolio-item"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step reverse">
              <div className="step-content">
                <div className="step-number">02</div>
                <h3>Browse Brief Marketplace</h3>
                <p>Explore briefs from brands, leagues, streamers, and athletes. Find opportunities that match your skills and interests.</p>
                                 <Link to="/dash" className="step-cta">Browse Briefs</Link>
              </div>
              <div className="step-visual">
                <div className="opportunities-grid">
                  <div className="opportunity-card">
                    <div className="opportunity-brand">TechFlow</div>
                    <div className="opportunity-title">Product Launch Challenge</div>
                    <div className="opportunity-reward">$500 Prize Pool</div>
                    <div className="opportunity-deadline">3 days left</div>
                  </div>
                  <div className="opportunity-card">
                    <div className="opportunity-brand">StyleHub</div>
                    <div className="opportunity-title">Fashion Haul Partnership</div>
                    <div className="opportunity-reward">$200 Fixed</div>
                    <div className="opportunity-deadline">Direct Deal</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-content">
                <div className="step-number">03</div>
                <h3>Submit Your Tryout</h3>
                <p>Create compelling content and submit via video links or uploads. Add notes to make your tryout stand out from the competition.</p>
                                 <Link to="/dash" className="step-cta">Submit Tryout</Link>
              </div>
              <div className="step-visual">
                <div className="content-creation-mockup">
                  <div className="creation-header">Content Submission</div>
                  <div className="video-preview"></div>
                  <div className="submission-details">
                    <div className="detail-row">
                      <span className="detail-label">Campaign:</span>
                      <span className="detail-value">Product Launch</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Deadline:</span>
                      <span className="detail-value">2 days left</span>
                    </div>
                  </div>
                  <div className="submit-button">Submit Content</div>
                </div>
              </div>
            </div>

            <div className="step reverse">
              <div className="step-content">
                <div className="step-number">04</div>
                <h3>Win Amazing Rewards</h3>
                <p>Get selected and receive cash via Stripe, products, promotional features, affiliate links, or exclusive experiences.</p>
                                 <Link to="/dash" className="step-cta">View Rewards</Link>
              </div>
              <div className="step-visual">
                <div className="earnings-dashboard">
                  <div className="dashboard-title">Your Earnings</div>
                  <div className="earnings-summary">
                    <div className="earning-item">
                      <span className="earning-amount">$1,250</span>
                      <span className="earning-label">This Month</span>
                    </div>
                    <div className="earning-item">
                      <span className="earning-amount">$4,890</span>
                      <span className="earning-label">Total Earned</span>
                    </div>
                  </div>
                  <div className="recent-payments">
                    <div className="payment-item">
                      <span className="payment-brand">TechFlow</span>
                      <span className="payment-amount">+$500</span>
                    </div>
                    <div className="payment-item">
                      <span className="payment-brand">StyleHub</span>
                      <span className="payment-amount">+$200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits creators-benefits">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHY CREATORS CHOOSE US</span>
            <h2>The Ultimate Tryout Platform</h2>
            <p>We've built the perfect marketplace for creators to showcase their talent and win amazing rewards from top brands.</p>
          </div>
          <div className="benefits-grid three-items">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Multiple Reward Types</h3>
              <p>Win cash payments, products, promotional features, affiliate opportunities, or exclusive experiences based on your tryout quality.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Real-Time Status Tracking</h3>
              <p>Monitor your submissions with live status updates: New, Shortlisted, or Winner. Stay informed throughout the selection process.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Instant Notifications</h3>
              <p>Get notified immediately when your status changes or when new briefs match your interests. Never miss an opportunity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Types */}
      <section className="opportunity-types">
        <div className="container">
          <div className="section-header">
            <h2>Types of Opportunities</h2>
            <p>Discover diverse briefs from brands, leagues, streamers, and athletes across all content categories</p>
          </div>
          
          <div className="opportunity-cards">
            <ScrollAnimatedSection animationType="scroll-animate-left">
              <div className="opportunity-type-card">
                <div className="card-header">
                  <div className="card-icon">🏆</div>
                  <h3>Brand Briefs</h3>
                </div>
                <div className="card-content">
                  <p>Submit tryouts for brand campaigns and win cash, products, or promotional features.</p>
                  <ul className="feature-list">
                    <li>Cash rewards via Stripe payouts</li>
                    <li>Product rewards sent directly</li>
                    <li>Social media promotional features</li>
                    <li>Build your creator portfolio</li>
                  </ul>
                  <div className="card-example">
                    <span className="example-label">Recent Brief:</span>
                    <span className="example-text">"Tech Product Review" - $1,500 cash reward</span>
                  </div>
                </div>
                                 <Link to="/dash" className="card-cta">Browse Brand Briefs</Link>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animationType="scroll-animate-right" delay={200}>
              <div className="opportunity-type-card featured">
                <div className="featured-badge">Most Popular</div>
                <div className="card-header">
                  <div className="card-icon">🤝</div>
                  <h3>Sports & Entertainment</h3>
                </div>
                <div className="card-content">
                  <p>Submit tryouts for leagues, streamers, and athletes looking for fresh content creators.</p>
                  <ul className="feature-list">
                    <li>Affiliate link opportunities</li>
                    <li>Exclusive event experiences</li>
                    <li>Long-term creator partnerships</li>
                    <li>Access to exclusive content</li>
                  </ul>
                  <div className="card-example">
                    <span className="example-label">Recent Brief:</span>
                    <span className="example-text">"Gaming Tournament Highlights" - VIP event access</span>
                  </div>
                </div>
                                 <Link to="/dash" className="card-cta">View Sports Briefs</Link>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Creator Success Stories */}
      <section className="creator-stories">
        <div className="container">
          <div className="section-header">
            <h2>Creator Success Stories</h2>
            <p>See how creators are winning amazing rewards and building their careers through our tryout marketplace</p>
          </div>
          
          <div className="stories-grid">
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={100}>
              <div className="story-card">
                <div className="story-creator">
                  <div className="creator-avatar-story"></div>
                  <div className="creator-info">
                    <h4>@sarah_creates</h4>
                    <span>Fashion & Lifestyle</span>
                  </div>
                </div>
                <div className="story-content">
                  <p>"I've won 8 tryouts in 3 months and earned over $4,000 in cash rewards. Plus I got featured on 3 major brand social accounts!"</p>
                </div>
                <div className="story-stats">
                  <div className="story-stat">
                    <span className="stat-number">$3,500</span>
                    <span className="stat-label">Monthly Earnings</span>
                  </div>
                  <div className="story-stat">
                    <span className="stat-number">28</span>
                    <span className="stat-label">Campaigns Completed</span>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={200}>
              <div className="story-card">
                <div className="story-creator">
                  <div className="creator-avatar-story"></div>
                  <div className="creator-info">
                    <h4>@tech_mike</h4>
                    <span>Tech Reviews</span>
                  </div>
                </div>
                <div className="story-content">
                  <p>"My first tryout win was $800 cash! Now I consistently get shortlisted and have built amazing relationships with brands."</p>
                </div>
                <div className="story-stats">
                  <div className="story-stat">
                    <span className="stat-number">$2,100</span>
                    <span className="stat-label">Monthly Earnings</span>
                  </div>
                  <div className="story-stat">
                    <span className="stat-number">15</span>
                    <span className="stat-label">Brand Partners</span>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={300}>
              <div className="story-card">
                <div className="story-creator">
                  <div className="creator-avatar-story"></div>
                  <div className="creator-info">
                    <h4>@fitness_emma</h4>
                    <span>Health & Fitness</span>
                  </div>
                </div>
                <div className="story-content">
                  <p>"I've won products worth $2,000, got affiliate deals, and even attended exclusive events. This platform opened so many doors!"</p>
                </div>
                <div className="story-stats">
                  <div className="story-stat">
                    <span className="stat-number">$4,200</span>
                    <span className="stat-label">Monthly Earnings</span>
                  </div>
                  <div className="story-stat">
                    <span className="stat-number">42</span>
                    <span className="stat-label">Successful Campaigns</span>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2>Everything you need to know</h2>
          </div>
          
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <div className="faq-toggle">{openFaq === index ? '−' : '+'}</div>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta creators-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start <span>winning rewards?</span></h2>
            <div className="cta-stats">
              <div className="cta-stat">
                <span className="cta-number">$2.5M+</span>
                <span className="cta-label">Rewards Distributed</span>
              </div>
              <div className="cta-stat">
                <span className="cta-number">25K+</span>
                <span className="cta-label">Active Creators</span>
              </div>
            </div>
                                     <div className="dual-cta-buttons">
              <Link to="/dash" className="cta-primary large">Join As Creator</Link>
              <Link to="/brand" className="cta-secondary large">Join As Brand</Link>
            </div>
            <p className="cta-subtext">Free to join • Submit tryouts • Win amazing rewards</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creators;