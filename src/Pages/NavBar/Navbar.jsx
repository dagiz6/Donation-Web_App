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
        <li>
          <Link to="/thank-you" style={styles.navItem}>Thank You</Link>
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
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
  navItem: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default Navbar;