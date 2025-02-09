import React, { useState } from 'react';
import Payment from '../../Components/Payment/Payment';

const DonationForm = () => {
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const tx_ref = `tx-${Math.random() * 100000}`;
  const public_key = 'CHAPUBK_TEST-mGn3HPLtMUgb7bVW3HEVQsR63RrNoLUG';

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Donate Now</h2>
        <p style={styles.subtitle}>Support our cause with your generous donation.</p>
        <form style={styles.form}>
          <input
            placeholder="First Name"
            name="name"
            onChange={(e) => setFname(e.target.value)}
            style={styles.input}
          />
          <input
            placeholder="Last Name"
            name="name"
            onChange={(e) => setLname(e.target.value)}
            style={styles.input}
          />
          <input
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            placeholder="Amount (ETB)"
            name="amount"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
          <Payment Fname={Fname} Lname={Lname} email={email} amount={amount} tx_ref={tx_ref} public_key={public_key} />
        </form>
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
    backgroundColor: '#f0f4f8',
    padding: '1rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#007BFF',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#007BFF',
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default DonationForm;