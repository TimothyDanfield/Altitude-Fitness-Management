import React, { useState } from 'react';

function GetStartedBanner() {
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.location.reload();
  }

  const bannerStyle = {
    backgroundColor: '#443737',
    color: 'white',
    padding: '20px',
    cursor: 'pointer',
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px'
  }

  const labelStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
  }

  const inputStyle = {
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    backgroundColor: '#f5f5f5',
    width: '100%',
    maxWidth: '400px',
  }

  const buttonStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    backgroundColor: '#444',
    color: 'white',
    cursor: 'pointer',
    marginTop: '20px',
  }

  const successStyle = {
    color: 'green',
    fontWeight: 'bold',
    marginTop: '20px',
  }

  return (
    <div className="banner-container">
      <div className="banner" onClick={() => setShowForm(true)} style={bannerStyle}>
    <h2>Ready To Commit?</h2>
      
      </div>
      {showForm &&
        <form onSubmit={handleFormSubmit} style={formStyle}>
          <label htmlFor="firstName" style={labelStyle}>First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={inputStyle} />
          <label htmlFor="lastName" style={labelStyle}>Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} style={inputStyle} />
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      }
      {formSubmitted && <p style={successStyle}>Submission successful!</p>}
    </div>
  );
}

export default GetStartedBanner;
