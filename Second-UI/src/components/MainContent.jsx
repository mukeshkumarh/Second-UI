import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import './MainContent.css';

// Register the necessary components
Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const MainContent = () => {
  const dataDoughnut = {
    labels: ['Fuel', 'Depreciation', 'Maintenance', 'Insurance', 'State fees'],
    datasets: [
      {
        data: [2644.94, 1490, 598.2, 1585.01, 203.83],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#2ecc71'],
      },
    ],
  };

  const dataBar = {
    labels: ['2022', '2023', '2024'],
    datasets: [
      {
        label: 'Annual TCO Projection',
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        data: [2.5, 3.5, 5.0],
      },
    ],
  };

  const dataFuelCost = {
    labels: ['2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Fuel cost',
        backgroundColor: '#ff6384',
        data: [2, 3, 1.5, 3],
      },
    ],
  };

  const dataDepreciationCost = {
    labels: ['2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Depreciation cost',
        backgroundColor: '#36a2eb',
        data: [1, 1.5, 2.5, 3],
      },
    ],
  };

  const dataMaintenanceCost = {
    labels: ['2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Maintenance cost',
        backgroundColor: '#cc65fe',
        data: [0.5, 1, 1.5, 2],
      },
    ],
  };

  return (
    <div className="main-content">
      <h2>TCO By VIN</h2>
      <div className="vin-section">
        <div className="vin-label">VIN</div>
        <div className="vin-id">1HGCM82633A123456</div>
      </div>
      <div className="vehicle-summary">
        <h3>Vehicle summary</h3>
        <div className="summary-details">
          <div className="summary-item">
            <span className="summary-label">Make</span>
            <span className="summary-value">Toyota</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Model</span>
            <span className="summary-value">Tacoma</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Trim</span>
            <span className="summary-value">LT</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Year</span>
            <span className="summary-value">2022</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Class</span>
            <span className="summary-value">Pickup</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Body Type</span>
            <span className="summary-value">Truck</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Fuel Type</span>
            <span className="summary-value">Gasoline</span>
          </div>
          <div className="summary-item location">
            <span className="summary-value">New York</span>
          </div>
        </div>
      </div>
      <div className="tco-summary">
        <h3>Total Annual Cost</h3>
        <p className="total-cost">$6,797.29</p>
        <div className="charts-container">
          <div className="doughnut-chart">
            <Doughnut data={dataDoughnut} />
          </div>
          <div className="bar-charts">
            <div className="chart-container">
              <h4>Annual TCO Projection</h4>
              <Bar data={dataBar} />
            </div>
            <div className="chart-container">
              <h4>Fuel Cost</h4>
              <Bar data={dataFuelCost} />
            </div>
            <div className="chart-container">
              <h4>Depreciation Cost</h4>
              <Bar data={dataDepreciationCost} />
            </div>
            <div className="chart-container">
              <h4>Maintenance Cost</h4>
              <Bar data={dataMaintenanceCost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
