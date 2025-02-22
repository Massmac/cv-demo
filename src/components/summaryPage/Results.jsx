import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Results.css";

export const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { jobTitle, fileUrl, fileName } = location.state || {};

  return (
    <div className="results-container">
      <h2>Conversion Results</h2>
      {jobTitle && <p><strong>Job Title:</strong> {jobTitle}</p>}
      {fileName && (
        <div>
          <p><strong>Uploaded Resume:</strong> {fileName}</p>
          <iframe src={fileUrl} title="Uploaded Resume" className="resume-preview"></iframe>
        </div>
      )}
      <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};