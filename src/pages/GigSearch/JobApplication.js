import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TabBar from '../../components/TabBar'; // Adjust path if needed

const JobApplication = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get job ID from the route

  // Example mock data (replace with actual data from API or state)
  const job = {
    title: `Job Title ${id}`,
    description: `This is a detailed description for Job ${id}. It includes all the details about the job, responsibilities, requirements, and other information.`,
    postedBy: {
      name: 'John Doe',
      description: 'An experienced recruiter who has worked with multiple organizations.',
      profileImage: 'https://via.placeholder.com/50', // Replace with actual image URL
    },
  };

  return (
    <div style={styles.page}>
      {/* Header Section */}
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          ←
        </button>
        <div style={styles.headerPlaceholder}></div>
      </div>

      {/* Job Details Section */}
      <div style={styles.jobDetails}>
        <div style={styles.jobHeader}>
          <div style={styles.icon}></div>
          <div style={styles.titleSection}>
            <p style={styles.title}>{job.title}</p>
            <p style={styles.subtitle}>Location: Remote</p> {/* Optional subtitle */}
          </div>
        </div>
        <div style={styles.jobDescription}>
          <p style={styles.description}>{job.description}</p>
        </div>
      </div>

      <div style={styles.actions}>
        <button style={styles.applyButton}>Apply Here</button>
      </div>

      {/* User Profile Section */}
      <div style={styles.profileSection}>
        <img
          src={job.postedBy.profileImage}
          alt="User"
          style={styles.profileImage}
        />
        <div style={styles.profileDetails}>
          <p style={styles.profileName}>{job.postedBy.name}</p>
          <p style={styles.profileDescription}>{job.postedBy.description}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={styles.actions}>
        <button style={styles.messageButton}>Message</button>
      </div>

      {/* Tab Bar */}
      <TabBar />
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '70vh',
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
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    margin: '10px',
  },
  jobHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    width: '50px',
    height: '50px',
    backgroundColor: '#ccc',
    borderRadius: '8px',
    marginRight: '10px',
  },
  titleSection: {
    flex: 1,
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
    color: '#333',
  },
  subtitle: {
    fontSize: '14px',
    margin: 0,
    color: '#777',
  },
  jobDescription: {
    marginTop: '10px',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.5',
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    margin: '10px',
  },
  profileImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: 0,
    color: '#333',
  },
  profileDescription: {
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
