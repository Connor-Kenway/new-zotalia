import React from 'react';
import TabBar from '../components/TabBar';

const MainFeed = () => {
  return (
    <div style={styles.page}>
      <div style={styles.feedArea}>
        {/* Content for the main feed */}
        <div style={styles.placeholder}>
          <p style={{ color: '#999' }}>Main feed content goes here</p>
        </div>
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
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
    padding: '16px 20px',
  },
  title: {
    margin: 0,
    fontSize: '18px',
    fontWeight: '500',
    color: '#333',
  },
  feedArea: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '70px', // Space for the TabBar
    padding: '20px',
    backgroundColor: '#f8f8f8',
  },
  placeholder: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    height: '800px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default MainFeed;
