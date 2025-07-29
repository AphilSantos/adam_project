import React, { useState } from 'react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I post a brief?",
      answer: "Create your brand account, then post briefs with title, description, reward type, deadline, and any assets. Choose from cash, product, promo, or affiliate rewards."
    },
    {
      question: "What types of rewards can I offer?",
      answer: "You can offer cash payments via Stripe, products (handled offline), promotional features on your socials, affiliate links/codes, or exclusive experiences."
    },
    {
      question: "How do I review submissions?",
      answer: "Your brand dashboard shows a gallery of submissions per brief with creator info, thumbnails, and submission links. Mark them as New, Shortlisted, or Winner."
    },
    {
      question: "How does payment work?",
      answer: "Brands pay a subscription ($600/month) or per brief. Cash rewards to winners are processed instantly via Stripe Connect payouts when you select them."
    },
    {
      question: "Do I get notified of new submissions?",
      answer: "Yes! You'll receive email notifications when creators submit tryouts to your briefs, and winners are automatically notified when selected."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>From Fans to <span>Content Collaborators</span></h1>
            <p>Post briefs and discover talented creators through our tryout marketplace. Get submissions from creators worldwide and reward the best with cash, products, promo, or experiences.</p>
            <button className="cta-primary">Post Your First Brief</button>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="profile-section">
                <div className="profile-image"></div>
                <div className="profile-info">
                  <h4>TechFlow Inc</h4>
                  <p>Brand Manager</p>
                  <span className="success-badge">Brief Success</span>
                </div>
              </div>
              <div className="metric">
                <span className="number">127</span>
                <span className="label">Submissions</span>
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
              <h2>Why Brands Choose Us</h2>
            </div>
          </ScrollAnimatedSection>
          <div className="benefits-grid">
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={100}>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Flexible Reward Options</h3>
                <p>Reward creators with cash via Stripe, products, promotional features, affiliate links, or exclusive experiences. Choose what works for your brand.</p>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={200}>
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h3>Quality Creator Submissions</h3>
                <p>Receive high-quality tryouts from creators worldwide. Review submissions in an organized gallery with creator profiles and easy filtering.</p>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationType="scroll-animate-scale" delay={300}>
              <div className="benefit-card">
                <div className="benefit-icon">📈</div>
                <h3>Brand Dashboard & Analytics</h3>
                <p>Manage all your briefs, review submissions, track performance metrics, and handle payments seamlessly from one dashboard.</p>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works for Brands</h2>
            <p>Simple steps to post briefs, discover talent, and reward amazing creators for their work.</p>
          </div>

          <div className="process-steps">
            <ScrollAnimatedSection animationType="scroll-animate-left">
              <div className="step">
                <div className="step-content">
                  <div className="step-number">01</div>
                  <h3>Post Your Brief</h3>
                  <p>Create detailed briefs with title, description, deadline, and reward type. Set your budget and requirements to attract the right creators.</p>
                  <button className="step-cta">Create Brief</button>
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
                  <h3>Review Submissions</h3>
                  <p>Get notifications when creators submit tryouts. Review submissions in a clean gallery with creator profiles, thumbnails, and submission links.</p>
                  <button className="step-cta">View Dashboard</button>
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
                  <h3>Select Winners & Reward</h3>
                  <p>Mark submissions as New, Shortlisted, or Winner. Pay cash rewards instantly via Stripe or handle other rewards directly.</p>
                  <button className="step-cta">Manage Rewards</button>
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
            <h2>Creators Across Every Niche</h2>
            <p>Access talented creators across all content categories and platforms. Post briefs and get submissions from the perfect creators for your brand.</p>
            <button className="cta-secondary">Browse Creator Network</button>
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
            <h2>Brand Success Stories</h2>
            <p>See how brands are discovering amazing talent and getting incredible content through our tryout marketplace</p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"We posted one brief and got 89 submissions in 3 days. Found 3 amazing creators we now work with regularly. The quality is incredible."</p>
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
                <p>"The dashboard makes it so easy to review submissions and manage payments. We've discovered creators we never would have found otherwise."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Marcus Rodriguez</h4>
                  <span>Brand Manager, SportsTech</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Stripe integration makes paying winners instant and seamless. The whole process from brief to payment takes minutes, not weeks."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <h4>Emma Thompson</h4>
                  <span>Talent Director, StreamLeague</span>
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
            <h2>Ready to find your next <span>star creator?</span></h2>
            <div className="cta-stats">
              <div className="cta-stat">
                <span className="cta-number">25K+</span>
                <span className="cta-label">Talented Creators</span>
              </div>
              <div className="cta-stat">
                <span className="cta-number">1.2K+</span>
                <span className="cta-label">Successful Brands</span>
              </div>
            </div>
            <button className="cta-primary large">Post Your First Brief</button>
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