import "./MainPage.css";
import React, { useEffect, useState } from "react";
import { auth, db } from "../auth/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import jobs from "./jobs.json";

export const MainPage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [selectedJob, setSelectedJob] = useState(jobs[0]); // Default to first job
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  // Fetch user data
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Handle job selection
  const handleJobChange = (event) => {
    const selectedTitle = event.target.value;
    const job = jobs.find((job) => job.title === selectedTitle);
    setSelectedJob(job);
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  // Handle conversion (navigate to results page)
  const handleCompare = () => {
    if (!selectedJob || !uploadedFile) {
      alert("Please select a job title and upload your resume.");
      return;
    }
    navigate("/results", {
      state: { jobTitle: selectedJob.title, fileUrl: uploadedFile, fileName },
    });
  };

  return (
    <div className="main-container">
      {userDetails ? (
        <>
          <div className="header">
            <h3 className="user-d">Welcome {userDetails.lastName}</h3>
          </div>

          <div className="container-body">
            {/* Left Section - Dropdown and Job Description */}
            <div className="left-section">
              <div className="dropdown-container">
                <label htmlFor="job-select">Select a Job:</label>
                <select id="job-select" onChange={handleJobChange}>
                  {jobs.map((job, index) => (
                    <option key={index} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Middle - Job Description */}
              <div className="display-box">
                <p>{selectedJob.description}</p>
              </div>
            </div>

            {/* Right Section - File Upload */}
            <div className="upload-container">
              <label htmlFor="file-upload">Upload Resume:</label>
              <input type="file" id="file-upload" onChange={handleFileUpload} />
              {uploadedFile && (
                <div className="uploaded-file">
                  <p>Uploaded File: {fileName}</p>
                </div>
              )}
            </div>
          </div>

          {/* Convert Button */}
          <button className="convert-button" onClick={handleCompare}>Compare</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};