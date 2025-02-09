import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>About Us</h2>
      <p style={styles.text}>
      We are a dedicated non-profit organization committed to making a positive impact in communities around the world. Founded with a vision to address critical needs and empower individuals, our mission is to provide essential resources, support, and opportunities to those who need them most. Through partnerships with local communities, volunteers, and generous donors like you, we focus on key areas such as education, healthcare, food security, and environmental sustainability. Our team works tirelessly to ensure that every dollar donated is used efficiently and effectively to create meaningful change. Transparency and accountability are at the core of everything we do, and we strive to build trust with our supporters by sharing our progress and success stories. Join us on this journey to make a difference—one heart, one mind, and one community at a time.
      </p>
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

export default AboutUs;