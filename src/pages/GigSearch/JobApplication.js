import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TabBar from '../../components/TabBar'; // Adjust the import path if needed

const JobApplication = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the job ID from the route

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          ←
        </button>
        <div style={styles.headerPlaceholder}></div>
      </div>
      <div style={styles.jobDetails}>
        <div style={styles.icon}></div>
        <div style={styles.textSection}>
          <p style={styles.title}>Job {id}</p>
          <p style={styles.description}>
            This is a detailed description of job {id}.
          </p>
        </div>
      </div>
      <div style={styles.actions}>
        <button style={styles.applyButton}>Apply Here</button>
        <button style={styles.messageButton}>Message</button>
      </div>
      <TabBar />
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: '#fff',
  },
  header: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
  },
  backButton: {
    marginLeft: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  },
  headerPlaceholder: {
    flex: 1,
    height: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    marginLeft: '10px',
  },
  jobDetails: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  icon: {
    width: '50px',
    height: '50px',
    backgroundColor: '#ccc',
    borderRadius: '8px',
  },
  textSection: {
    flex: 1,
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
    color: '#333',
  },
  description: {
    fontSize: '14px',
    margin: 0,
    color: '#777',
  },
  actions: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  applyButton: {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#6A1B9A',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  messageButton: {
    padding: '10px',
    fontSize: '16px',
    color: '#6A1B9A',
    backgroundColor: '#fff',
    border: '2px solid #6A1B9A',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default JobApplication;
