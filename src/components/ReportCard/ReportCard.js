import React, { useState, useEffect } from 'react';
import './report.css';

const ReportCard = () => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    // Function to fetch report card data from the backend API
    const fetchReportData = async () => {
      try {
        const response = await fetch('/api/studentReport');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setReportData(data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching report card data:', error);
        // Handle error scenarios here
      }
    };

    fetchReportData(); // Fetch data when the component mounts
  }, []);

  if (!reportData) {
    return <p>Loading...</p>; // Show loading indicator while fetching data
  }
  return (
    <div className='P-form'>
    <div className="report-card">
      <h1>Student Report Card</h1>
      <div className="student-info">
        <p><strong>Name:</strong>  {reportData.name}</p>
        <p><strong>Grade:</strong> 7th</p>
        <p><strong>Roll Number:</strong> {reportData.rollNumber}</p>
      </div>
      <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {reportData.subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.name}</td>
                <td>{subject.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      <div className="comments">
        <p><strong>Teacher's Comments:</strong>  {reportData.name} is an excellent student who consistently performs well in all subjects.</p>
      </div>
    </div>
    </div>
  );
};

export default ReportCard;
