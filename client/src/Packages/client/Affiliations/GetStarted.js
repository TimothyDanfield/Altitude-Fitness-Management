import React, { useState, useEffect } from "react";
import './getstarted.css'


function GetStarted() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setIsReset(true);
    setTimeout(() => setIsReset(false), 0);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isReset) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
      });
      setIsReset(false);
    }
  }, [isReset]);
  

  return (
    <div className="form-container">
      <h1 className="form-title"><span style={{ borderBottom: "1px solid rgba(214, 37, 37, 255)" }}>Get</span>
                <span> Started</span></h1>
      {isSubmitted && <p className="form-message">Submission successful!</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
          className="form-input"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
          className="form-input"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
          className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="form-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GetStarted;