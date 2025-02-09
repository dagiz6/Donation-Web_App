import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li>
          <Link to="/" style={styles.navItem}>Home</Link>
        </li>
        <li>
          <Link to="/donate" style={styles.navItem}>Donate Now</Link>
        </li>
        <li>
          <Link to="/about" style={styles.navItem}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#007BFF',
    padding: '1rem',
    background: 'linear-gradient(90deg,rgb(66, 3, 89), #00BFFF)', // Gradient background
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  navItemHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light hover effect
    transform: 'translateY(-2px)', // Slight lift on hover
  },
};

export default Navbar;