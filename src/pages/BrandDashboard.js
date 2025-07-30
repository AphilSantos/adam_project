import React, { useState } from 'react';

const BrandDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSubmissions, setSelectedSubmissions] = useState({});

  // Mock data
  const stats = {
    activeBriefs: 3,
    submissionsThisWeek: 42,
    winnersSelected: 5,
    totalSubmissions: 152
  };

  const recentSubmissions = [
    {
      id: 1,
      creatorName: 'Alex R.',
      creatorHandle: '@alexcreates',
      thumbnail: '/api/placeholder/120/120',
      submissionLink: 'https://tiktok.com/@alexcreates/video1',
      briefTitle: 'Summer Campaign',
      status: 'new'
    },
    {
      id: 2,
      creatorName: 'J. Thompson',
      creatorHandle: '@jthompson',
      thumbnail: '/api/placeholder/120/120',
      submissionLink: 'https://instagram.com/p/abc123',
      briefTitle: 'Product Launch',
      status: 'shortlisted'
    },
    {
      id: 3,
      creatorName: 'Sam B.',
      creatorHandle: '@sambcreator',
      thumbnail: '/api/placeholder/120/120',
      submissionLink: 'https://youtube.com/watch?v=xyz789',
      briefTitle: 'Brand Story',
      status: 'new'
    }
  ];

  const upcomingDeadlines = [
    { title: 'Jordan Giveaway', daysLeft: 3 },
    { title: 'Outdoor Campaign', daysLeft: 5 }
  ];

  const handleStatusChange = (submissionId, newStatus) => {
    setSelectedSubmissions(prev => ({
      ...prev,
      [submissionId]: newStatus
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return '#94a3b8';
      case 'shortlisted': return '#f59e0b';
      case 'winner': return '#10b981';
      default: return '#94a3b8';
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="brand-logo">
            <div className="logo-icon">📋</div>
            <h3>DraftBoard</h3>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <button 
              className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <span className="nav-icon">📊</span>
              Overview
            </button>
            <button 
              className={`nav-item ${activeTab === 'briefs' ? 'active' : ''}`}
              onClick={() => setActiveTab('briefs')}
            >
              <span className="nav-icon">📝</span>
              My Briefs
            </button>
            <button 
              className={`nav-item ${activeTab === 'submissions' ? 'active' : ''}`}
              onClick={() => setActiveTab('submissions')}
            >
              <span className="nav-icon">📥</span>
              Submissions
            </button>
            <button 
              className={`nav-item ${activeTab === 'create' ? 'active' : ''}`}
              onClick={() => setActiveTab('create')}
            >
              <span className="nav-icon">➕</span>
              Create a Brief
            </button>
            <button 
              className={`nav-item ${activeTab === 'creators' ? 'active' : ''}`}
              onClick={() => setActiveTab('creators')}
            >
              <span className="nav-icon">👥</span>
              Creators
            </button>
            <button 
              className={`nav-item ${activeTab === 'rewards' ? 'active' : ''}`}
              onClick={() => setActiveTab('rewards')}
            >
              <span className="nav-icon">🎁</span>
              Rewards
            </button>
            <button 
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <span className="nav-icon">⚙️</span>
              Settings
            </button>
          </div>

          <div className="nav-section">
            <div className="section-title">Account</div>
            <button className="nav-item">
              <span className="nav-icon">🎁</span>
              Rewards
            </button>
            <button className="nav-item">
              <span className="nav-icon">⚙️</span>
              Settings
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-content">
            <h1>Welcome, Nike Basketball</h1>
            <div className="user-menu">
              <button className="user-avatar">
                <span>👤</span>
              </button>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          {activeTab === 'overview' && (
            <>
              {/* Stats Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-label">Active Briefs</div>
                  <div className="stat-value">{stats.activeBriefs}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Submissions This Week</div>
                  <div className="stat-value">{stats.submissionsThisWeek}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Winners Selected</div>
                  <div className="stat-value">{stats.winnersSelected}</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <div className="action-card" onClick={() => setActiveTab('create')}>
                  <div className="action-icon">📝</div>
                  <div className="action-content">
                    <h3>Post a Brief</h3>
                    <p>Create a campaign or brief to invite creators to submit content.</p>
                  </div>
                </div>
                <div className="action-card" onClick={() => setActiveTab('briefs')}>
                  <div className="action-icon">📋</div>
                  <div className="action-content">
                    <h3>View My Briefs</h3>
                    <p>See all active and past briefs in one place.</p>
                  </div>
                </div>
                <div className="action-card" onClick={() => setActiveTab('creators')}>
                  <div className="action-icon">👥</div>
                  <div className="action-content">
                    <h3>Discover Creators</h3>
                    <p>Browse creator profiles and invite them to your briefs.</p>
                  </div>
                </div>
              </div>

              {/* Recent Submissions */}
              <div className="section">
                <h2>Recent Submissions</h2>
                <div className="submissions-grid">
                  {recentSubmissions.map(submission => (
                    <div key={submission.id} className="submission-card">
                      <div className="submission-thumbnail">
                        <div className="thumbnail-placeholder">📹</div>
                      </div>
                      <div className="submission-info">
                        <h4>{submission.creatorName}</h4>
                        <p>{submission.creatorHandle}</p>
                        <div className="submission-meta">
                          <span className="brief-title">{submission.briefTitle}</span>
                          <div className="status-controls">
                            <select 
                              value={selectedSubmissions[submission.id] || submission.status}
                              onChange={(e) => handleStatusChange(submission.id, e.target.value)}
                              className="status-select"
                            >
                              <option value="new">New</option>
                              <option value="shortlisted">Shortlisted</option>
                              <option value="winner">Winner</option>
                            </select>
                          </div>
                        </div>
                        <div className="submission-actions">
                          <button className="btn-view">View</button>
                          <button className="btn-contact">Contact</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row */}
              <div className="bottom-row">
                <div className="upcoming-deadlines">
                  <h3>Upcoming Deadlines</h3>
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="deadline-item">
                      <span className="deadline-title">{deadline.title}</span>
                      <span className="deadline-days">{deadline.daysLeft} days</span>
                    </div>
                  ))}
                </div>

                <div className="engagement-overview">
                  <h3>Engagement Overview</h3>
                  <div className="engagement-stat">
                    <div className="engagement-number">{stats.totalSubmissions}</div>
                    <div className="engagement-label">Total Submissions This Month</div>
                  </div>
                  <div className="engagement-average">
                    <span className="average-number">38</span>
                    <span className="average-label">Avg. Submissions This Month</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'create' && (
            <div className="create-brief-form">
              <h2>Create New Brief</h2>
              <form className="brief-form">
                <div className="form-group">
                  <label>Brief Title</label>
                  <input type="text" placeholder="Enter brief title" />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea rows="4" placeholder="Describe what you're looking for..."></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Reward Type</label>
                    <select>
                      <option value="cash">Cash</option>
                      <option value="product">Product</option>
                      <option value="promo">Promo</option>
                      <option value="affiliate">Affiliate</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Deadline</label>
                    <input type="date" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Assets</label>
                  <div className="file-upload-area">
                    <p>Drag and drop files here or click to browse</p>
                  </div>
                </div>
                <button type="submit" className="btn-primary">Post Brief</button>
              </form>
            </div>
          )}

          {/* Other tab content would go here */}
        </div>
      </div>
    </div>
  );
};

export default BrandDashboard;