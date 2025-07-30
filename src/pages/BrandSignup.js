import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupSuccess from '../components/SignupSuccess';

const BrandSignup = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    companySize: '',
    logo: null
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      logo: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement brand signup logic
    console.log('Brand signup data:', formData);
    // Show success animation
    setShowSuccess(true);
  };

  const handleSuccessComplete = () => {
    // Redirect to brand dashboard
    window.location.href = '/dashboard/brand';
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <>
      {showSuccess && (
        <SignupSuccess 
          onComplete={handleSuccessComplete} 
          userType="brand" 
        />
      )}
      <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1>Join as a Brand</h1>
          <p>Start posting briefs and discover amazing creators</p>
        </div>

        <div className="progress-bar">
          <div className="progress-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <span>1</span>
              <label>Company Info</label>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <span>2</span>
              <label>Contact Details</label>
            </div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <span>3</span>
              <label>Brand Assets</label>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          {currentStep === 1 && (
            <div className="form-step">
              <h2>Company Information</h2>
              <div className="form-group">
                <label>Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Industry</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Industry</option>
                    <option value="fashion">Fashion & Beauty</option>
                    <option value="tech">Technology</option>
                    <option value="sports">Sports & Fitness</option>
                    <option value="food">Food & Beverage</option>
                    <option value="gaming">Gaming & Entertainment</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Company Size</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://yourcompany.com"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="form-step">
              <h2>Contact Details</h2>
              <div className="form-group">
                <label>Contact Person Name *</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="Enter contact person name"
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
                  placeholder="contact@yourcompany.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="form-step">
              <h2>Brand Assets</h2>
              <div className="form-group">
                <label>Company Logo</label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="logo"
                    name="logo"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file-input"
                  />
                  <label htmlFor="logo" className="file-label">
                    <div className="upload-icon">📁</div>
                    <span>
                      {formData.logo ? formData.logo.name : 'Choose logo file'}
                    </span>
                    <small>PNG, JPG up to 5MB</small>
                  </label>
                </div>
              </div>
              <div className="signup-benefits">
                <h3>What you'll get:</h3>
                <ul>
                  <li>✓ Post unlimited briefs</li>
                  <li>✓ Access to 25K+ creators</li>
                  <li>✓ Advanced submission filtering</li>
                  <li>✓ Integrated Stripe payments</li>
                  <li>✓ Real-time notifications</li>
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
                Create Brand Account
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

export default BrandSignup;