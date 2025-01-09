import React from 'react';
import { useNavigate } from 'react-router-dom';
import TabBar from '../../components/TabBar'; // Adjust the import path if needed

const GigSearch = () => {
  const navigate = useNavigate();

  const handleJobClick = (id) => {
    navigate(`job-application/${id}`);
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.headerPlaceholder}></div>
      </div>
      <div style={styles.gigList}>
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            style={styles.gigBox}
            onClick={() => handleJobClick(id)}
          >
            <div style={styles.icon}></div>
            <div style={styles.gigDetails}>
              <p style={styles.gigText}>Job {id}</p>
              <p style={styles.gigDescription}>
                This is a description of job {id}.
              </p>
            </div>
          </div>
        ))}
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
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerPlaceholder: {
    width: '90%',
    height: '30px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
  },
  gigList: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  gigBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  icon: {
    width: '40px',
    height: '40px',
    backgroundColor: '#ccc',
    borderRadius: '8px',
    marginRight: '10px',
  },
  gigDetails: {
    flex: 1,
  },
  gigText: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  gigDescription: {
    margin: 0,
    fontSize: '14px',
    color: '#777',
  },
};

export default GigSearch;
