import React from 'react';
import TabBar from '../components/TabBar'; // Assuming TabBar exists

const Finance = () => {
  return (
    <div style={styles.page}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerPlaceholder}></div>
      </div>

      {/* Pie Chart Section */}
      <div style={styles.pieChartContainer}>
        <div style={styles.pieChart}></div>
      </div>

      {/* Financial Inputs */}
      <div style={styles.inputsContainer}>
        <div style={styles.input}></div>
        <div style={styles.input}></div>
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
    height: '50vh',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80px', // Adjust height to fit the design
  },
  headerPlaceholder: {
    width: '90%',
    height: '40px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
  },
  pieChartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  pieChart: {
    width: '200px', // Adjust size for the pie chart
    height: '200px',
    backgroundColor: '#d3d3d3',
    borderRadius: '50%',
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
    marginTop: '20px',
  },
  input: {
    width: '90%',
    height: '30px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
  },
};

export default Finance;
