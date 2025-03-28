import React from "react";
import { LogIn, UserPlus } from 'lucide-react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Header Navigation */}
      <nav className="nav-header">
        <div className="nav-brand">
          <div className="logo">
            {/* Placeholder logo - replace with your actual logo */}
            <div className="logo-placeholder">MH</div>
          </div>
          <h1>My Health</h1>
        </div>
        <div className="nav-auth">
          <a href="/login" className="auth-link">
            <LogIn size={18} />
            <span>Log in</span>
          </a>
          <a href="/signup" className="auth-link">
            <UserPlus size={18} />
            <span>Sign up</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find local doctors who take your insurance</h1>
          <div className="search-container">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search doctors, specialties, conditions..."
                className="search-input"
              />
              <input 
                type="text" 
                placeholder="Enter location"
                className="location-input"
              />
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Specialties */}
      <section className="specialties">
        <h2>Popular specialties</h2>
        <div className="specialty-grid">
          {[
            'Primary Care', 
            'Dentist', 
            'Dermatologist',
            'Psychiatrist', 
            'Eye Doctor', 
            'OB-GYN'
          ].map((specialty, index) => (
            <div key={index} className="specialty-card">
              <h3>{specialty}</h3>
              <p>Book an appointment today</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why choose My Health?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>24/7 Booking</h3>
            <p>Book appointments any time, day or night</p>
          </div>
          <div className="feature-card">
            <h3>Verified Reviews</h3>
            <p>Real reviews from verified patients</p>
          </div>
          <div className="feature-card">
            <h3>Insurance Checker</h3>
            <p>Find doctors who accept your insurance</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
