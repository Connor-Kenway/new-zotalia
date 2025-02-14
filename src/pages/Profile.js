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
    height: '70vh',
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
    backgroundColor: '#fff',
    height: '200px',
  },
  curvedBackground: {
    position: 'absolute',
    top: '-100px',
    left: 0,
    right: 0,
    height: '300px',
    backgroundColor: '#e0e0e0',
    borderBottomLeftRadius: '200px',
    borderBottomRightRadius: '200px',
    zIndex: 1,
  },
  profileImage: {
    position: 'absolute',
    bottom: '-50px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '120px',
    backgroundColor: '#bdbdbd',
    borderRadius: '50%',
    border: '4px solid #fff',
    zIndex: 2,
  },
  infoSection: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  line: {
    height: '2px',
    backgroundColor: '#bdbdbd',
    borderRadius: '2px',
  },
  additionalInfo: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
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
