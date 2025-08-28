import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreatorDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Mock data
  const stats = {
    activeBriefs: 8,
    submissionsThisWeek: 3,
    totalWins: 2,
    totalEarnings: 850
  };

  const availableBriefs = [
    {
      id: 1,
      brand: 'TechFlow',
      title: 'Smartphone Review Challenge',
      category: 'Tech Review',
      reward: '$500',
      deadline: '2025-02-15',
      status: 'open',
      description: 'Create an engaging review video showcasing our latest smartphone features.',
      requirements: ['60-90 second video', 'Show key features', 'Include call-to-action']
    },
    {
      id: 2,
      brand: 'StyleCo',
      title: 'Summer Fashion Lookbook',
      category: 'Fashion',
      reward: '$300 + Products',
      deadline: '2025-02-20',
      status: 'open',
      description: 'Style our summer collection in 3 different looks for your audience.',
      requirements: ['3 outfit posts', 'Instagram Stories', 'Use brand hashtags']
    },
    {
      id: 3,
      brand: 'FitLife',
      title: 'Morning Routine Challenge',
      category: 'Fitness',
      reward: '$400',
      deadline: '2025-02-10',
      status: 'submitted',
      description: 'Show how our supplements fit into your morning wellness routine.',
      requirements: ['Morning routine video', 'Product integration', 'Authentic storytelling']
    }
  ];

  const mySubmissions = [
    {
      id: 1,
      briefTitle: 'Morning Routine Challenge',
      brand: 'FitLife',
      submittedDate: '2025-01-25',
      status: 'under_review',
      submissionLink: 'https://tiktok.com/@creator/video1'
    },
    {
      id: 2,
      briefTitle: 'Holiday Gift Guide',
      brand: 'GiftBox',
      submittedDate: '2025-01-20',
      status: 'winner',
      feedback: 'Amazing creativity! Your content perfectly captured our brand voice.',
      earnings: '$350',
      submissionLink: 'https://instagram.com/p/abc123'
    },
    {
      id: 3,
      briefTitle: 'Skincare Routine',
      brand: 'GlowUp',
      submittedDate: '2025-01-15',
      status: 'not_selected',
      feedback: 'Great content quality, but we went with a different style this time.',
      submissionLink: 'https://youtube.com/watch?v=xyz789'
    }
  ];

  const renderOverview = () => (
    <>
      <div className="dashboard-header">
        <div className="header-left">
          <h1>Welcome back, Creator!</h1>
          <p>Ready to submit some amazing content?</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary" onClick={() => setActiveSection('briefs')}>
            Browse Briefs
          </button>
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>

      <div className="stats-overview">
                 <div className="stat-card">
           <div className="stat-header">
             <div className="stat-title">Available Briefs</div>
             <div className="stat-icon">
               <img src="/Target 1.png" alt="Available Briefs" />
             </div>
           </div>
           <div className="stat-value">{stats.activeBriefs}</div>
           <div className="stat-change">2 new today</div>
         </div>
                 <div className="stat-card">
           <div className="stat-header">
             <div className="stat-title">Submissions This Week</div>
             <div className="stat-icon">
               <img src="/Clipboard 1.png" alt="Submissions" />
             </div>
           </div>
           <div className="stat-value">{stats.submissionsThisWeek}</div>
           <div className="stat-change">+1 from last week</div>
         </div>
                 <div className="stat-card">
           <div className="stat-header">
             <div className="stat-title">Total Wins</div>
             <div className="stat-icon">
               <img src="/Trophy 1.png" alt="Total Wins" />
             </div>
           </div>
           <div className="stat-value">{stats.totalWins}</div>
           <div className="stat-change">Last win: 5 days ago</div>
         </div>
                 <div className="stat-card">
           <div className="stat-header">
             <div className="stat-title">Total Earnings</div>
             <div className="stat-icon">
               <img src="/Dollar.png" alt="Total Earnings" />
             </div>
           </div>
           <div className="stat-value">${stats.totalEarnings}</div>
           <div className="stat-change">This month</div>
         </div>
      </div>

      <div className="dashboard-content">
        <div className="main-content">
          <div className="content-card">
            <div className="card-header">
              <h3 className="card-title">Recent Submissions</h3>
            </div>
            <div className="card-content">
              <div className="submissions-grid">
                {mySubmissions.slice(0, 3).map(submission => (
                  <div key={submission.id} className="submission-item">
                    <div className="submission-header">
                      <div className="submission-info">
                        <h4>{submission.briefTitle}</h4>
                        <p>{submission.brand} • Submitted: {submission.submittedDate}</p>
                        <p style={{ fontSize: '0.85rem', color: '#888' }}>
                          Link: <a href={submission.submissionLink} target="_blank" rel="noopener noreferrer" style={{ color: '#00ff88' }}>
                            {submission.submissionLink}
                          </a>
                        </p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                        <span className={`status-badge status-${submission.status.replace('_', '-')}`}>
                          {submission.status.replace('_', ' ')}
                        </span>
                        {submission.earnings && (
                          <span style={{ color: '#00ff88', fontWeight: '700' }}>+{submission.earnings}</span>
                        )}
                      </div>
                    </div>
                    {submission.feedback && (
                      <div style={{ 
                        background: 'rgba(0,0,0,0.2)', 
                        padding: '1rem', 
                        borderRadius: '8px', 
                        borderLeft: '4px solid #00ff88',
                        marginTop: '1rem'
                      }}>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0' }}>{submission.feedback}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-content">
          <div className="content-card">
            <div className="card-header">
              <h3 className="card-title">Quick Actions</h3>
            </div>
            <div className="card-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                 <button className="btn-primary" onClick={() => setActiveSection('briefs')}>
                   <img src="/Target 1.png" alt="Browse Briefs" className="btn-icon" />
                   Browse Briefs
                 </button>
                                 <button className="btn-secondary" onClick={() => setActiveSection('submissions')}>
                   <img src="/Clipboard 1.png" alt="My Submissions" className="btn-icon" />
                   My Submissions
                 </button>
                                 <button className="btn-secondary" onClick={() => setActiveSection('profile')}>
                   <img src="/User Profile 1.png" alt="Edit Profile" className="btn-icon" />
                   Edit Profile
                 </button>
              </div>
            </div>
          </div>

          <div className="content-card">
            <div className="card-header">
              <h3 className="card-title">Trending Briefs</h3>
            </div>
            <div className="card-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  <div style={{ fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>Tech Reviews</div>
                  <div style={{ color: '#00ff88', fontSize: '0.9rem' }}>$500 average reward</div>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                  <div style={{ fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>Fashion Content</div>
                  <div style={{ color: '#00ff88', fontSize: '0.9rem' }}>$350 average reward</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderBriefs = () => (
    <>
      <div className="dashboard-header">
        <div className="header-left">
          <h1>Browse Briefs</h1>
          <p>Find the perfect opportunities for your content</p>
        </div>
      </div>
      <div className="briefs-marketplace">
        {availableBriefs.map(brief => (
          <div key={brief.id} className="brief-card">
            <div className="brief-header">
              <div className="brief-info">
                <h3>{brief.title}</h3>
                <div className="brief-brand">{brief.brand}</div>
                <div className="brief-category">{brief.category}</div>
              </div>
              <div className="brief-reward">{brief.reward}</div>
            </div>
            <div className="brief-description">{brief.description}</div>
            <div className="brief-details">
              <div className="detail-item">
                <div className="detail-label">Deadline</div>
                <div className="detail-value">{brief.deadline}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Status</div>
                <div className="detail-value">{brief.status}</div>
              </div>
            </div>
            <div className="brief-requirements">
              <h4>Requirements:</h4>
              <ul>
                {brief.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="brief-actions">
              {brief.status === 'open' ? (
                <button className="btn-primary" onClick={() => setActiveSection('submit')}>
                  Submit Tryout
                </button>
              ) : (
                <button className="btn-secondary" disabled>
                  Already Submitted
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const renderSubmissions = () => (
    <>
      <div className="dashboard-header">
        <div className="header-left">
          <h1>My Submissions</h1>
          <p>Track your submissions and status updates</p>
        </div>
      </div>
      <div className="content-card">
        <div className="card-content">
          <div className="submissions-grid">
            {mySubmissions.map(submission => (
              <div key={submission.id} className="submission-item">
                <div className="submission-header">
                  <div className="submission-info">
                    <h4>{submission.briefTitle}</h4>
                    <p>{submission.brand} • Submitted: {submission.submittedDate}</p>
                    <p style={{ fontSize: '0.85rem', color: '#888' }}>
                      Link: <a href={submission.submissionLink} target="_blank" rel="noopener noreferrer" style={{ color: '#00ff88' }}>
                        {submission.submissionLink}
                      </a>
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                    <span className={`status-badge status-${submission.status.replace('_', '-')}`}>
                      {submission.status.replace('_', ' ')}
                    </span>
                    {submission.earnings && (
                      <span style={{ color: '#00ff88', fontWeight: '700' }}>+{submission.earnings}</span>
                    )}
                  </div>
                </div>
                {submission.feedback && (
                  <div style={{ 
                    background: 'rgba(0,0,0,0.2)', 
                    padding: '1rem', 
                    borderRadius: '8px', 
                    borderLeft: '4px solid #00ff88',
                    marginTop: '1rem'
                  }}>
                    <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>Feedback:</h4>
                    <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0' }}>{submission.feedback}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderSubmitForm = () => (
    <>
      <div className="dashboard-header">
        <div className="header-left">
          <h1>Submit Tryout</h1>
          <p>Submit your content for review</p>
        </div>
      </div>
      <div className="content-card">
        <div className="card-content">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '0.5rem' }}>
                Brief Title
              </label>
              <select 
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: '#fff' 
                }}
              >
                <option value="">Select a brief...</option>
                {availableBriefs.filter(b => b.status === 'open').map(brief => (
                  <option key={brief.id} value={brief.id}>{brief.title} - {brief.brand}</option>
                ))}
              </select>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '0.5rem' }}>
                Content Link (Preferred)
              </label>
              <input 
                type="url" 
                placeholder="https://tiktok.com/@yourhandle/video..."
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: '#fff' 
                }}
              />
              <small style={{ color: '#888', fontSize: '0.85rem' }}>
                Link to your TikTok, Instagram, YouTube, or other social media content
              </small>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '0.5rem' }}>
                Or Upload File (Optional)
              </label>
              <input 
                type="file" 
                accept="video/*,image/*"
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: '#fff' 
                }}
              />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '0.5rem' }}>
                Additional Notes
              </label>
              <textarea 
                placeholder="Any additional information about your submission..."
                rows="4"
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  background: 'rgba(255,255,255,0.05)', 
                  color: '#fff',
                  resize: 'vertical'
                }}
              />
            </div>
            <button className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
              Submit Tryout
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return renderOverview();
      case 'briefs':
        return renderBriefs();
      case 'submissions':
        return renderSubmissions();
      case 'submit':
        return renderSubmitForm();
      case 'profile':
        return (
          <>
            <div className="dashboard-header">
              <div className="header-left">
                <h1>Creator Profile</h1>
                <p>Manage your profile and portfolio</p>
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>
              <h3>Profile Settings</h3>
              <p>Update your creator profile and portfolio</p>
              <button className="btn-primary">Edit Profile</button>
            </div>
          </>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div className="brand-dashboard">
      <div className="dashboard-layout">
        <div className="dashboard-sidebar">
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <img src="/logo.svg" alt="DraftBoard Logo" className="dashboard-logo-image" />
            </div>
            <div className="user-info">Creator Dashboard</div>
          </div>
          
          <nav className="sidebar-nav">
            <div className="nav-section">
              <div className="nav-section-title">Main</div>
                             <button className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`} onClick={() => setActiveSection('overview')}>
                 <img src="/Dashboard 1.png" alt="Overview" className="icon" />
                 Overview
               </button>
              <button className={`nav-item ${activeSection === 'briefs' ? 'active' : ''}`} onClick={() => setActiveSection('briefs')}>
                <span className="icon">🎯</span>
                Browse Briefs
              </button>
              <button className={`nav-item ${activeSection === 'submissions' ? 'active' : ''}`} onClick={() => setActiveSection('submissions')}>
                <span className="icon">📤</span>
                My Submissions
              </button>
              <button className={`nav-item ${activeSection === 'submit' ? 'active' : ''}`} onClick={() => setActiveSection('submit')}>
                <span className="icon">➕</span>
                Submit Tryout
              </button>
            </div>
            
            <div className="nav-section">
              <div className="nav-section-title">Account</div>
              <button className={`nav-item ${activeSection === 'profile' ? 'active' : ''}`} onClick={() => setActiveSection('profile')}>
                <span className="icon">👤</span>
                Profile
              </button>
              <button className="nav-item">
                <span className="icon">⚙️</span>
                Settings
              </button>
            </div>
          </nav>
        </div>

        <div className="dashboard-main">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;