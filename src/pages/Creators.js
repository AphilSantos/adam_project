import React, { useState } from 'react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Creators = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is CreatorHub and how does it work?",
      answer: "CreatorHub is a platform that connects content creators with brands for paid opportunities. You can participate in challenges or secure direct partnerships to earn money from your content."
    },
    {
      question: "Do I need a certain number of followers to participate?",
      answer: "No! We believe great content matters more than follower count. Many of our top-earning creators started with small audiences and grew through the platform."
    },
    {
      question: "How much money can I make?",
      answer: "Earnings vary based on your activity and content quality. Creators earn anywhere from $100-$5,000+ per month. Top performers make $10,000+ monthly through consistent participation."
    },
    {
      question: "How and when do I get paid?",
      answer: "Payments are processed within 7 days of campaign completion. We support PayPal, bank transfers, and other secure payment methods with no hidden fees."
    },
    {
      question: "What types of content do brands want?",
      answer: "Brands look for authentic content across all niches - fashion, tech, fitness, food, lifestyle, and more. The key is creating engaging content that resonates with your audience."
    },
    {
      question: "Is CreatorHub free to use?",
      answer: "Yes! CreatorHub is completely free for creators. We only succeed when you succeed, so there are no membership fees or hidden costs."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero creators-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Get Paid to <span>Create Content</span></h1>
            <p>Turn your creativity into income. Compete in brand challenges, secure direct partnerships, and get paid for content that performs. No follower requirements, just great content.</p>
            <button className="cta-primary">Start Creating Today</button>
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
            <h2>Your Path to Paid Content Creation</h2>
            <p>CreatorHub connects you with brands looking for authentic content. Here's how you can start earning from your creativity.</p>
          </div>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-content">
                <div className="step-number">01</div>
                <h3>Set Up Your Profile</h3>
                <p>Create your creator profile, showcase your style, and tell brands what makes your content unique. No minimum follower count required.</p>
                <button className="step-cta">Create Profile</button>
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
                <h3>Browse Paid Opportunities</h3>
                <p>Discover brand challenges and direct partnership opportunities. Choose campaigns that match your style and audience.</p>
                <button className="step-cta">View Opportunities</button>
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
                <h3>Create & Submit Content</h3>
                <p>Do what you do best! Create engaging content following brand guidelines and submit directly through our platform.</p>
                <button className="step-cta">Start Creating</button>
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
                <h3>Get Paid for Performance</h3>
                <p>Earn money when your content performs well. Get paid for winning challenges or completing direct partnerships.</p>
                <button className="step-cta">View Earnings</button>
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
            <h2>Built for Creator Success</h2>
            <p>We've designed every feature to help creators like you maximize earnings and build lasting brand relationships.</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>No Follower Requirements</h3>
              <p>Quality content matters more than follower count. Micro-creators often outperform mega-influencers in our challenges.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Multiple Revenue Streams</h3>
              <p>Earn from competitions, direct partnerships, and performance bonuses. Diversify your creator income effortlessly.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Fast & Fair Payments</h3>
              <p>Get paid quickly through secure payment systems. Transparent pricing with no hidden fees or complicated terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Types */}
      <section className="opportunity-types">
        <div className="container">
          <div className="section-header">
            <h2>Two Ways to Earn</h2>
            <p>Choose the earning model that works best for your content style and schedule</p>
          </div>
          
          <div className="opportunity-cards">
            <ScrollAnimatedSection animationType="scroll-animate-left">
              <div className="opportunity-type-card">
                <div className="card-header">
                  <div className="card-icon">🏆</div>
                  <h3>Brand Challenges</h3>
                </div>
                <div className="card-content">
                  <p>Compete with other creators for prize pools. Best performing content wins the rewards.</p>
                  <ul className="feature-list">
                    <li>Prize pools from $100 to $5,000</li>
                    <li>Performance-based rewards</li>
                    <li>Creative freedom within guidelines</li>
                    <li>Build your portfolio</li>
                  </ul>
                  <div className="card-example">
                    <span className="example-label">Recent Challenge:</span>
                    <span className="example-text">"Summer Fashion Haul" - $2,500 prize pool</span>
                  </div>
                </div>
                <button className="card-cta">Browse Challenges</button>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animationType="scroll-animate-right" delay={200}>
              <div className="opportunity-type-card featured">
                <div className="featured-badge">Most Popular</div>
                <div className="card-header">
                  <div className="card-icon">🤝</div>
                  <h3>Direct Partnerships</h3>
                </div>
                <div className="card-content">
                  <p>Work directly with brands on custom content with guaranteed payments.</p>
                  <ul className="feature-list">
                    <li>Fixed payments $50 - $2,000</li>
                    <li>Guaranteed earnings</li>
                    <li>Long-term brand relationships</li>
                    <li>Exclusive opportunities</li>
                  </ul>
                  <div className="card-example">
                    <span className="example-label">Recent Partnership:</span>
                    <span className="example-text">"Tech Review Series" - $800 per video</span>
                  </div>
                </div>
                <button className="card-cta">Find Partnerships</button>
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
            <p>See how creators are building sustainable income streams with CreatorHub</p>
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
                  <p>"I went from $200/month to $3,500/month in just 4 months. The direct partnerships changed everything for my creator business."</p>
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
                  <p>"Started with 2K followers and won my first $1,000 challenge. Now brands reach out to me directly for partnerships."</p>
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
                  <p>"The platform helped me turn my passion into a full-time income. I love the variety of brands and campaigns available."</p>
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
            <h2>Ready to start <span>earning from your creativity?</span></h2>
            <div className="cta-stats">
              <div className="cta-stat">
                <span className="cta-number">$2.5M+</span>
                <span className="cta-label">Paid to Creators</span>
              </div>
              <div className="cta-stat">
                <span className="cta-number">15K+</span>
                <span className="cta-label">Active Creators</span>
              </div>
            </div>
            <button className="cta-primary large">Join CreatorHub Today</button>
            <p className="cta-subtext">Free to join • No follower requirements • Get paid fast</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creators;