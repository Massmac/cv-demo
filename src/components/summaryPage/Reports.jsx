import React, { useState } from "react";
import "./Reports.css";

const Reports = () => {
  // Sample Data
  const [reports, setReports] = useState([
    { id: 1, name: "Michael Tamatey", score: 85, checked: false },
    { id: 2, name: "John Doe", score: 92, checked: false },
    { id: 3, name: "Jane Smith", score: 78, checked: false },
  ]);

  // Track Select All Checkbox
  const [selectAll, setSelectAll] = useState(false);

  // Handle Individual Check
  const handleCheck = (id) => {
    setReports((prev) =>
      prev.map((report) =>
        report.id === id ? { ...report, checked: !report.checked } : report
      )
    );
  };

  // Handle Select All
  const handleSelectAll = () => {
    const newState = !selectAll;
    setSelectAll(newState);
    setReports((prev) => prev.map((report) => ({ ...report, checked: newState })));
  };

  return (
    <div className="reports-container">
      <h2>Reports</h2>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              Select All
            </th>
            <th>Name</th>
            <th>Score</th>
            <th>View Results</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>
                <input
                  type="checkbox"
                  checked={report.checked}
                  onChange={() => handleCheck(report.id)}
                />
              </td>
              <td>{report.name}</td>
              <td>{report.score}</td>
              <td>
                <button onClick={() => alert(`Viewing results for ${report.name}`)}>
                  View Results
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="button-group">
        <button onClick={() => alert("Download started")}>Download</button>
        <button onClick={() => alert("Email sent")}>Email</button>
        <button onClick={() => alert("Deleted selected reports")}>Delete</button>
      </div>
    </div>
  );
};

export default Reports;
