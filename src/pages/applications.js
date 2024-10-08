import React, { useState, useEffect } from 'react';
import '../styles/appplications.css';


const ApplicationDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/admin/cleaners/pending');
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  const handleAction = async (id, status) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/admin/cleaner/${id}/status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      alert(data.message);
      setApplications(applications.filter(app => app.id !== id));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Pending Cleaner Applications</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            <p>Name: {app.name}</p>
            <p>Email: {app.email}</p>
            <button onClick={() => handleAction(app.id, 'approved')}>Approve</button>
            <button onClick={() => handleAction(app.id, 'rejected')}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationDashboard;
