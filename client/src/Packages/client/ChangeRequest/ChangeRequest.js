import React, { useState } from "react";
import './changerequest.css'


const ChangeRequest = () => {
  const [requestedChange, setRequestedChange] = useState("");
  const [reasonForRequest, setReasonForRequest] = useState("");
  const [howToAccomplish, setHowToAccomplish] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  const handleApprove = () => {
    setStatus("approved");
   
  };

  const handleDecline = () => {
    setStatus("declined");
    
  };

  return (
    <div className="change-request">
      <h2 className="change-request__title">Change Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="requestedChange">Requested Change:</label>
          <textarea
            id="requestedChange"
            className="form-control"
            value={requestedChange}
            onChange={(event) => setRequestedChange(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reasonForRequest">Reason for Request:</label>
          <textarea
            id="reasonForRequest"
            className="form-control"
            value={reasonForRequest}
            onChange={(event) => setReasonForRequest(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="howToAccomplish">How to Accomplish Request:</label>
          <textarea
            id="howToAccomplish"
            className="form-control"
            value={howToAccomplish}
            onChange={(event) => setHowToAccomplish(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Request
        </button>
      </form>
    
      <div className="change-request__actions">
        <button className="btn btn-success" onClick={handleApprove}>
          Approve
        </button>
        <button className="btn btn-danger" onClick={handleDecline}>
          Decline
        </button>
      </div>
    </div>
  );
};

export default ChangeRequest;
