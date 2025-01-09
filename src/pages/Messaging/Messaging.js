import React from 'react';
import { useNavigate } from 'react-router-dom';
import TabBar from '../../components/TabBar';

const Messaging = () => {
  const navigate = useNavigate();

  const handleOpenChat = (id) => {
    navigate(`/chat/${id}`); // Navigate to the chat page for a specific message
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.headerPlaceholder}></div>
      </div>
      <div style={styles.messagesList}>
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            style={styles.messageBox}
            onClick={() => handleOpenChat(id)}
          >
            <div style={styles.icon}></div>
            <div style={styles.messagePreview}>
              <p style={styles.messageText}>Message {id}</p>
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
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerPlaceholder: {
    width: '80%',
    height: '20px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
  },
  messagesList: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  messageBox: {
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
    borderRadius: '50%',
    marginRight: '10px',
  },
  messagePreview: {
    flex: 1,
  },
  messageText: {
    margin: 0,
    fontSize: '14px',
    color: '#555',
  },
};

export default Messaging;
