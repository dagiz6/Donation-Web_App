import React from 'react';

const ThankYou = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Thank You for Donating!</h2>
      <p style={styles.text}>Your generous contribution has made a significant impact on our mission to create a better world. Every dollar you donate helps us reach out to those in need, providing them with essential resources, support, and hope for a brighter future. Your kindness and compassion are truly inspiring, and we are incredibly grateful for your trust in our organization. Together, we can achieve great things and bring about meaningful change. On behalf of everyone we serve, thank you for being a part of this journey. Your support means the world to us, and we promise to use your donation wisely to make a lasting difference.</p>
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
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#007BFF',
  },
  text: {
    fontSize: '1.2rem',
    textAlign: 'center',
    color: '#6c757d',
  },
};

export default ThankYou;