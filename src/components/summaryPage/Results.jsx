import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Results.css";


/*
 Author: Michael Tamatey
 Date: 20250222
 Description: This class displays results when users click on compare in main page.
*/


export const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { jobTitle } = location.state || {};

  // Sample data for demonstration
  const resumeData = {
    contactInfo: {
      name: "Michael Tamatey",
      email: "michaeltamatey@gmail.com",
      number: "+1 (123) 456-7890",
    },
    overview: {
      experience: "7.5",
      grammar: "6.5",
      sentenceStructure: "10",
      writingClarification: "9.5",
    },
    issues: {
      bulletpoints: "Some points lack proper alignment",
    },
    companiesWorked: [
      { industry: "IT", company: "Google", years: 3, country: "USA", yearsWorked: "2019-2022" },
      { industry: "Finance", company: "JP Morgan", years: 2, country: "UK", yearsWorked: "2017-2019" },
    ],
    summary: {
      education: "B.Sc in Computer Science",
      certifications: ["AWS Certified Developer", "Scrum Master"],
    },
    technicalSkillsets: [
      { technology: "JavaScript", lastUsed: "2023" },
      { technology: "Python", lastUsed: "2022" },
    ],
    overallScore: {
      requirements: "9.5",
      comments: "Improve on advanced JavaScript concepts.",
    },
  };

  return (
    <div className="results-container">
      <h2>Comparison Results</h2>
       
      {/* Contact Information */}
      <div className="contact-info">
         {jobTitle && <p><strong>Job Title:</strong> {jobTitle}</p>}
        <p><strong>Name:</strong> {resumeData?.contactInfo?.name}</p>
        <p><strong>Email:</strong> {resumeData?.contactInfo?.email}</p>
        <p><strong>Number:</strong> {resumeData?.contactInfo?.number}</p>
      </div>

      {/* Overview */}
      <table className="results-table">
        <caption>Overview</caption>
        <thead>
          <tr>
            <th>Experience</th>
            <th>Grammar</th>
            <th>Sentence Structure</th>
            <th>Clarification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{resumeData?.overview?.experience}</td>
            <td>{resumeData?.overview?.grammar}</td>
            <td>{resumeData?.overview?.sentenceStructure}</td>
            <td>{resumeData?.overview?.writingClarification}</td>
          </tr>
        </tbody>
      </table>

      {/* Issues */}
      <div className="issues-container">
        <h3>Issues</h3>
        <p><strong>Grammar:</strong> {resumeData?.issues?.bulletpoints}</p>
      </div>

      {/* Companies Worked In */}
      <table className="results-table">
        <caption>Companies Worked In</caption>
        <thead>
          <tr>
            <th>Industry</th>
            <th>Company</th>
            <th>Years</th>
            <th>Country</th>
            <th>Years Worked</th>
          </tr>
        </thead>
        <tbody>
          {resumeData?.companiesWorked?.map((company, index) => (
            <tr key={index}>
              <td>{company.industry}</td>
              <td>{company.company}</td>
              <td>{company.years}</td>
              <td>{company.country}</td>
              <td>{company.yearsWorked}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <table className="results-table">
        <caption>Education & Certifications</caption>
        <tbody>
          <tr>
            <td><strong>Education</strong></td>
            <td>{resumeData?.summary?.education}</td>
          </tr>
          <tr>
            <td><strong>Certifications</strong></td>
            <td>{resumeData?.summary?.certifications?.join(", ")}</td>
          </tr>
        </tbody>
      </table>

      {/* Technical Skillsets */}
      <table className="results-table">
        <caption>Technical Skillsets</caption>
        <thead>
          <tr>
            <th>Technology</th>
            <th>Last Used</th>
          </tr>
        </thead>
        <tbody>
          {resumeData?.technicalSkillsets?.map((skill, index) => (
            <tr key={index}>
              <td>{skill.technology}</td>
              <td>{skill.lastUsed}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Overall Score */}
      <table className="results-table">
        <caption>Overall Score</caption>
        <thead>
          <tr>
            <th>Requirements</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{resumeData?.overallScore?.requirements}</td>
            <td>{resumeData?.overallScore?.comments}</td>
          </tr>
        </tbody>
      </table>

      <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};