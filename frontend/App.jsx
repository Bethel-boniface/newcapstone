import React, { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('Backend offline'));
  }, []);

  return (
    <div className="landing">
      <nav className="navbar">
        <div className="logo">CapstoneApp</div>
        <a href="#features" className="nav-link">Features</a>
      </nav>

      <section className="hero">
        <h1>Automated Deployment, Zero Downtime</h1>
        <p>Containerized web app deployed to AWS EC2 with CI/CD powered by GitHub Actions and Docker Compose.</p>
        <div className="cta">
          <a href="#features" className="btn-primary">Learn More</a>
          <div className="status-badge">{status}</div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="feature-card">
          <h3>🚀 CI/CD Pipeline</h3>
          <p>Push to main and GitHub Actions builds and deploys to EC2 automatically.</p>
        </div>
        <div className="feature-card">
          <h3>🐳 Dockerized</h3>
          <p>Frontend and backend run in isolated containers orchestrated by Docker Compose.</p>
        </div>
        <div className="feature-card">
          <h3>☁️ AWS EC2</h3>
          <p>Scalable cloud hosting with secure SSH deployment from GitHub.</p>
        </div>
      </section>

      <footer className="footer">
        <p>Built for EC2 + Docker + GitHub Actions</p>
      </footer>
    </div>
  );
}
export default App;