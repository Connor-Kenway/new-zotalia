import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '../assets/icons/home-icon.png';
import searchIcon from '../assets/icons/search-icon.png';
import financeIcon from '../assets/icons/finance-icon.png';
import messageIcon from '../assets/icons/message-icon.png';
import profileIcon from '../assets/icons/profile-icon.png';

// import { AiOutlineSearch, AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
// import { BsStack } from 'react-icons/bs';
// import { FiUser } from 'react-icons/fi';

const TabBar = () => {
  const location = useLocation();

    const tabs = [
      { icon: searchIcon, path: '/gig-search',label: 'Research' },
      { icon: financeIcon, path: '/finance', label: 'Finance' },
      { icon: homeIcon, path: '/',  label: 'Home' },
      { icon: messageIcon, path: '/messaging',label: 'Messages' },
      { icon: profileIcon, path: '/profile',label: 'Profile' },
  ];

  // const tabs = [
  //   { icon: <AiOutlineSearch size={24} />, path: '/search', label: 'Search' },
  //   { icon: <BsStack size={24} />, path: '/gig-research', label: 'Research' },
  //   { icon: <AiOutlineHome size={24} />, path: '/', label: 'Home' },
  //   { icon: <AiOutlineMessage size={24} />, path: '/messaging', label: 'Messages' },
  //   { icon: <FiUser size={24} />, path: '/profile', label: 'Profile' },
  // ];

  return (
    <div style={styles.container}>
      {tabs.map((tab, index) => (
        <Link
          to={tab.path}
          key={index}
          style={{
            ...styles.tab,
            color: location.pathname === tab.path ? '#6A1B9A' : '#BDBDBD',
          }}
        >
          <img src={tab.icon} alt={tab.label} style={styles.icon} />
        </Link>
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTop: '1px solid #ddd',
    boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '12px',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
};

export default TabBar;
