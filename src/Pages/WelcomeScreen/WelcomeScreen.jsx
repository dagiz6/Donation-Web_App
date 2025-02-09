import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Our Donation Platform</h1>
        <p style={styles.subtitle}>
          Every contribution makes a world of difference. In a world filled with challenges, your kindness has the power to transform lives and create lasting change. Whether it's providing food, education, healthcare, or shelter, your support helps us reach those who need it most. Our mission is simple: to empower communities, uplift individuals, and build a brighter future for everyone. By joining hands with us, you become a beacon of hope and an agent of change. Together, we can make the world a better place, one donation at a time. Thank you for choosing to give, and thank you for being here.
        </p>
        <br />
        <Link to="/donate" style={styles.link}>
          <button style={styles.button}>Donate Now</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#980fcf',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#6c757d',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.5rem',
    backgroundColor: '#980fcf',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'translateY(-2px)',
  },
  link: {
    textDecoration: 'none',
  },
};

export default WelcomeScreen;