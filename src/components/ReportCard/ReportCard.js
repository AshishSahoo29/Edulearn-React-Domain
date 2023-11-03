import React from 'react';
import './report.css';

const ReportCard = () => {
  return (
    <div className='P-form'>
    <div className="report-card">
      <h1>Student Report Card</h1>
      <div className="student-info">
        <p><strong>Name:</strong> Ashish Sahoo</p>
        <p><strong>Grade:</strong> 7th</p>
        <p><strong>Roll Number:</strong> 12345</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mathematics</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Science</td>
            <td>B</td>
          </tr>
          <tr>
            <td>History</td>
            <td>C</td>
          </tr>
          <tr>
            <td>English</td>
            <td>A</td>
          </tr>
        </tbody>
      </table>
      <div className="comments">
        <p><strong>Teacher's Comments:</strong> John is an excellent student who consistently performs well in all subjects.</p>
      </div>
    </div>
    </div>
  );
};

export default ReportCard;
