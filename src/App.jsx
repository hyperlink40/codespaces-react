import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import PostLandingPage from './PostLandingPage';

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

function App() {
  // Simple hardcoded admin flag
  const [isAdmin] = useState(true);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{' '}
        {isAdmin && <Link to="/post-landing">Post Landing</Link>}
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {isAdmin ? (
          <Route path="/post-landing" element={<PostLandingPage />} />
        ) : (
          <Route path="/post-landing" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
