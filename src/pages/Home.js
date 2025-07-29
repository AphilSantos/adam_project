import React, { useState } from 'react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What are Deals?",
      answer: "Deals are direct partnerships where you work one-on-one with vetted creators for custom campaigns with guaranteed deliverables and set pricing."
    },
    {
      question: "What are Contests?",
      answer: "Contests are competition-based campaigns where creators compete for prizes based on performance metrics like views, engagement, and conversions."
    },
    {
      question: "Can I browse and filter creators before launching?",
      answer: "Yes! You can explore our creator network, filter by niche, audience demographics, and past performance before launching any campaign."
    },
    {
      question: "How are the contest payouts / prizes structured?",
      answer: "Contest prizes are distributed based on performance rankings. Typically, top 3 performers receive the largest portions of the prize pool."
    },
    {
      question: "What if my contest gets no views?",
      answer: "With our performance-based model, you only pay for content that delivers results. If nothing performs, you don't pay anything."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Make your product go <span>viral</span> with creator contests</h1>
            <p>Launch performance-based campaigns where creators compete to create your most engaging content. Pay only for results that drive real conversions and measurable growth.</p>
            <button className="cta-primary">Start Free Campaign</button>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="profile-section">
                <div className="profile-image"></div>
                <div className="profile-info">
                  <h4>Sarah Chen</h4>
                  <p>Marketing Director</p>
                  <span className="success-badge">Campaign Success</span>
                </div>
              </div>
              <div className="metric">
                <span className="number">2.5M+</span>
                <span className="label">Views Generated</span>
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
            <p className="trust-text">Trusted by 100's of companies</p>
          </ScrollAnimatedSection>
          <div className="trust-logos">
            <ScrollAnimatedSection animationType="scroll-animate-stagger" delay={100}>
              <div className="logo-placeholder">Brand 1</div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-stagger" delay={200}>
              <div className="logo-placeholder">Brand 2</div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-stagger" delay={300}>
              <div className="logo-placeholder">Brand 3</div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-stagger" delay={400}>
              <div className="logo-placeholder">Brand 4</div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-stagger" delay={500}>
              <div className="logo-placeholder">Brand 5</div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <ScrollAnimatedSection animationType="scroll-animate">
            <div className="section-header">
              <span className="section-tag">ADVANTAGES</span>
              <h2>Why CreatorHub Works</h2>
            </div>
          </ScrollAnimatedSection>
          <div className="benefits-grid">
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={100}>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Performance-Based Pricing</h3>
                <p>Stop gambling on content. Pay only for videos that deliver measurable results and drive real engagement.</p>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={200}>
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h3>Zero Creator Management</h3>
                <p>Skip the endless outreach and negotiations. Creators come to you, ready to compete for your brand.</p>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={300}>
              <div className="benefit-card">
                <div className="benefit-icon">📈</div>
                <h3>Data-Driven Content Strategy</h3>
                <p>Validate your creative concepts with real audience data before scaling your marketing spend.</p>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>Launch Performance Campaigns</h2>
            <p>Let creators compete to create your most engaging content while you focus on growing your business.</p>
          </div>
          
          <div className="process-steps">
            <ScrollAnimatedSection animationType="scroll-animate-left">
              <div className="step">
                <div className="step-content">
                  <div className="step-number">01</div>
                  <h3>Set Your Challenge</h3>
                  <p>Define your campaign goals, target audience, and success metrics. Launch your challenge and watch creators respond.</p>
                  <button className="step-cta">Launch Campaign</button>
                </div>
                <div className="step-visual">
                  <div className="mockup-card">
                    <div className="mockup-header">Campaign Brief</div>
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
                  <h3>Creators Compete & Publish</h3>
                  <p>Watch as creators craft unique content for your brand and publish organically to their audiences, expanding your reach.</p>
                  <button className="step-cta">View Creators</button>
                </div>
                <div className="step-visual">
                  <div className="creator-grid">
                    <div className="creator-card">
                      <div className="creator-avatar"></div>
                      <div className="creator-stats">
                        <span>125K views</span>
                      </div>
                    </div>
                    <div className="creator-card">
                      <div className="creator-avatar"></div>
                      <div className="creator-stats">
                        <span>89K views</span>
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
                  <h3>Own Winning Content</h3>
                  <p>Purchase the top-performing content and scale it across paid campaigns. Full ownership, unlimited usage rights.</p>
                  <button className="step-cta">See Results</button>
                </div>
                <div className="step-visual">
                  <div className="results-card">
                    <div className="results-header">Campaign Results</div>
                    <div className="results-metrics">
                      <div className="metric-item">
                        <span className="metric-value">2.1M</span>
                        <span className="metric-label">Total Views</span>
                      </div>
                      <div className="metric-item">
                        <span className="metric-value">4.2%</span>
                        <span className="metric-label">Engagement</span>
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
            <h2>Connect with creators who deliver</h2>
            <p>Access our curated network of high-performing creators across every niche and platform</p>
            <button className="cta-secondary">Explore Creator Network</button>
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
                <span>Gaming & Tech</span>
              </div>
              <div className="category-card">
                <div className="category-icon">🍕</div>
                <span>Food & Cooking</span>
              </div>
            </div>
          </div>

          <div className="network-stats">
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Active Creators</span>
            </div>
            <div className="stat">
              <span className="stat-number">2.5K+</span>
              <span className="stat-label">Campaigns Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">500M+</span>
              <span className="stat-label">Total Impressions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>See how brands are achieving breakthrough results with creator-driven campaigns</p>
          </div>
          
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The smaller creators often outperformed the big names. It's all about fresh, creative content that resonates—not just follower count."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Sarah Chen</h4>
                  <span>Marketing Director, TechFlow</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Instead of chasing creators, they came to us. The platform made content curation effortless and results-driven."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Marcus Rodriguez</h4>
                  <span>Founder, GreenLife Co</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"We found content that worked organically and scaled it into our highest-performing ad campaigns. Game changer."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Emma Thompson</h4>
                  <span>CMO, StyleHub</span>
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
            <h2>Ready to transform your <span>content strategy?</span></h2>
            <div className="cta-stats">
              <div className="cta-stat">
                <span className="cta-number">50K+</span>
                <span className="cta-label">Ready Creators</span>
              </div>
              <div className="cta-stat">
                <span className="cta-number">2.5K+</span>
                <span className="cta-label">Campaigns</span>
              </div>
            </div>
            <button className="cta-primary large">Start Your First Campaign</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
    </div>
  );
};

export default Home;