import React from 'react';
import TabBar from '../components/TabBar'; // Assuming TabBar exists

const Profile = () => {
  return (
    <div style={styles.page}>
      {/* Curved Header */}
      <div style={styles.header}>
        <div style={styles.curvedBackground}></div>
        <div style={styles.profileImage}></div>
      </div>

      {/* Profile Information */}
      <div style={styles.infoSection}>
        <div style={styles.line}></div>
        <div style={styles.line}></div>
        <div style={styles.line}></div>
        <div style={styles.line}></div>
        <div style={styles.line}></div>
      </div>

      {/* Additional Info */}
      <div style={styles.additionalInfo}>
        <div style={styles.textBox}>
          <p>sjfkjsnjsf</p>
        </div>
        <div style={styles.textBox}>
          <p>sjfkjsnjsf</p>
        </div>
      </div>

      {/* TabBar */}
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
    position: 'relative',
    backgroundColor: '#fff',
    height: '220px',
    overflow: 'hidden',
  },
  curvedBackground: {
    position: 'absolute',
    top: '-100px',
    left: 0,
    right: 0,
    height: '250px',
    backgroundColor: '#e0e0e0',
    borderBottomLeftRadius: '150px',
    borderBottomRightRadius: '150px',
    zIndex: 1,
  },
  profileImage: {
    position: 'absolute',
    bottom: '-50px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '100px',
    backgroundColor: '#bdbdbd',
    borderRadius: '50%',
    border: '4px solid #fff',
    zIndex: 2,
  },
  infoSection: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  line: {
    height: '2px',
    backgroundColor: '#bdbdbd',
    borderRadius: '2px',
  },
  additionalInfo: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  textBox: {
    backgroundColor: '#e0e0e0',
    padding: '15px',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#666',
  },
};

export default Profile;
