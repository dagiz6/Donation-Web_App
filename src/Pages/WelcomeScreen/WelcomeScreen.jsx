import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Donation Platform</h1>
      <p style={styles.subtitle}>every contribution makes a world of difference. In a world filled with challenges, your kindness has the power to transform lives and create lasting change. Whether it's providing food, education, healthcare, or shelter, your support helps us reach those who need it most. Our mission is simple: to empower communities, uplift individuals, and build a brighter future for everyone. By joining hands with us, you become a beacon of hope and an agent of change. Together, we can make the world a better place, one donation at a time. Thank you for choosing to give, and thank you for being here.</p>
     <br /> <br />
      <Link to ="/donate">
        <button type="submit" style={styles.button}>
          Donate Now
        </button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#007BFF',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#6c757d',
  },
  button: {
    padding: '0.75rem',
    height: '100px',
    width: '200px',
    fontSize: '2rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
  }
};

export default WelcomeScreen;