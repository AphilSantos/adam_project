import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupSuccess from '../components/SignupSuccess';

const CreatorSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    bio: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    twitter: '',
    instagramFollowers: '',
    tiktokFollowers: '',
    youtubeFollowers: '',
    twitterFollowers: '',
    portfolioLinks: [''],
    categories: []
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [creatorId, setCreatorId] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Generate Creator ID when component mounts
  React.useEffect(() => {
    const generateCreatorId = () => {
      const prefix = 'CR';
      const timestamp = Date.now().toString().slice(-6);
      const random = Math.random().toString(36).substring(2, 5).toUpperCase();
      return `${prefix}${timestamp}${random}`;
    };
    setCreatorId(generateCreatorId());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (category) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handlePortfolioChange = (index, value) => {
    const newLinks = [...formData.portfolioLinks];
    newLinks[index] = value;
    setFormData(prev => ({
      ...prev,
      portfolioLinks: newLinks
    }));
  };

  const addPortfolioLink = () => {
    setFormData(prev => ({
      ...prev,
      portfolioLinks: [...prev.portfolioLinks, '']
    }));
  };

  const removePortfolioLink = (index) => {
    setFormData(prev => ({
      ...prev,
      portfolioLinks: prev.portfolioLinks.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement creator signup logic
    console.log('Creator signup data:', { ...formData, creatorId });
    // Show success animation
    setShowSuccess(true);
  };

  const handleSuccessComplete = () => {
    // Redirect to creator dashboard
    window.location.href = '/dashboard/creator';
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const categories = [
    'Fashion & Style', 'Beauty & Skincare', 'Fitness & Health',
    'Food & Cooking', 'Gaming & Tech', 'Travel & Lifestyle',
    'Music & Entertainment', 'Sports & Athletics', 'Education',
    'Comedy & Humor', 'Art & Design', 'Business & Finance'
  ];

  return (
    <>
      {showSuccess && (
        <SignupSuccess 
          onComplete={handleSuccessComplete} 
          userType="creator" 
        />
      )}
      <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-header">
          <Link to="/creators" className="back-link">← Back to Creators</Link>
          <h1>Join as a Creator</h1>
          <p>Start submitting tryouts and win amazing rewards</p>
        </div>

        <div className="progress-bar">
          <div className="progress-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <span>1</span>
              <label>Basic Info</label>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <span>2</span>
              <label>Social Profiles</label>
            </div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <span>3</span>
              <label>Portfolio</label>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          {currentStep === 1 && (
            <div className="form-step">
              <h2>Basic Information</h2>
              <div className="creator-id-display">
                <label>Your Creator ID</label>
                <div className="creator-id">
                  <span>{creatorId}</span>
                  <small>This ID will be auto-generated for you</small>
                </div>
              </div>
              <div className="form-group">
                <label>Username *</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="@yourusername"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell brands about yourself and your content style..."
                  rows="4"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="form-step">
              <h2>Social Media Profiles</h2>
              <p className="step-description">Add your social handles and follower counts</p>
              
              <div className="social-group">
                <div className="social-platform">
                  <div className="platform-header">
                    <span className="platform-icon">📷</span>
                    <label>Instagram</label>
                  </div>
                  <div className="social-inputs">
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      placeholder="@username"
                    />
                    <input
                      type="number"
                      name="instagramFollowers"
                      value={formData.instagramFollowers}
                      onChange={handleInputChange}
                      placeholder="Followers"
                    />
                  </div>
                </div>

                <div className="social-platform">
                  <div className="platform-header">
                    <span className="platform-icon">🎵</span>
                    <label>TikTok</label>
                  </div>
                  <div className="social-inputs">
                    <input
                      type="text"
                      name="tiktok"
                      value={formData.tiktok}
                      onChange={handleInputChange}
                      placeholder="@username"
                    />
                    <input
                      type="number"
                      name="tiktokFollowers"
                      value={formData.tiktokFollowers}
                      onChange={handleInputChange}
                      placeholder="Followers"
                    />
                  </div>
                </div>

                <div className="social-platform">
                  <div className="platform-header">
                    <span className="platform-icon">📺</span>
                    <label>YouTube</label>
                  </div>
                  <div className="social-inputs">
                    <input
                      type="text"
                      name="youtube"
                      value={formData.youtube}
                      onChange={handleInputChange}
                      placeholder="Channel name"
                    />
                    <input
                      type="number"
                      name="youtubeFollowers"
                      value={formData.youtubeFollowers}
                      onChange={handleInputChange}
                      placeholder="Subscribers"
                    />
                  </div>
                </div>

                <div className="social-platform">
                  <div className="platform-header">
                    <span className="platform-icon">🐦</span>
                    <label>Twitter</label>
                  </div>
                  <div className="social-inputs">
                    <input
                      type="text"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                      placeholder="@username"
                    />
                    <input
                      type="number"
                      name="twitterFollowers"
                      value={formData.twitterFollowers}
                      onChange={handleInputChange}
                      placeholder="Followers"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="form-step">
              <h2>Portfolio & Categories</h2>
              
              <div className="form-group">
                <label>Content Categories</label>
                <div className="categories-grid">
                  {categories.map(category => (
                    <div
                      key={category}
                      className={`category-tag ${formData.categories.includes(category) ? 'selected' : ''}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Portfolio Links</label>
                <small>Add links to your best content</small>
                {formData.portfolioLinks.map((link, index) => (
                  <div key={index} className="portfolio-input">
                    <input
                      type="url"
                      value={link}
                      onChange={(e) => handlePortfolioChange(index, e.target.value)}
                      placeholder="https://your-content-link.com"
                    />
                    {formData.portfolioLinks.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePortfolioLink(index)}
                        className="remove-link"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addPortfolioLink}
                  className="add-portfolio-link"
                >
                  + Add Another Link
                </button>
              </div>

              <div className="signup-benefits">
                <h3>What you'll get:</h3>
                <ul>
                  <li>✓ Access to exclusive briefs</li>
                  <li>✓ Win cash, products & experiences</li>
                  <li>✓ Real-time submission tracking</li>
                  <li>✓ Direct brand connections</li>
                  <li>✓ Portfolio showcase</li>
                </ul>
              </div>
            </div>
          )}

          <div className="form-actions">
            {currentStep > 1 && (
              <button type="button" onClick={prevStep} className="btn-secondary">
                Previous
              </button>
            )}
            {currentStep < 3 ? (
              <button type="button" onClick={nextStep} className="btn-primary">
                Next Step
              </button>
            ) : (
              <button type="submit" className="btn-primary">
                Create Creator Account
              </button>
            )}
          </div>
        </form>

        <div className="signup-footer">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
      </div>
    </>
  );
};

export default CreatorSignup;