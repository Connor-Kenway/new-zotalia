import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TabBar from '../../components/TabBar';

const Chat = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the message ID from the route

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <button style={styles.backButton} onClick={() => navigate(-1)}>
          ←
        </button>
        <div style={styles.headerPlaceholder}></div>
      </div>
      <div style={styles.chatContainer}>
        <div style={styles.messageBubble}>
          <p style={styles.messageText}>Hello from Message {id}</p>
        </div>
        <div style={styles.messageBubble}>
          <p style={styles.messageText}>How are you?</p>
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
  chatContainer: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  messageBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '60%',
  },
  messageText: {
    margin: 0,
    fontSize: '14px',
    color: '#555',
  },
};

export default Chat;
