import React from 'react';

function Sidebar() {
  return (
    <aside className="bg-light col-md-3">
      <div className="mb-4">
        <p className="font-weight-bold">Menu</p>
        <ul className="nav flex-column">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="dashboardDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dashboard
            </a>
            <div className="dropdown-menu" aria-labelledby="dashboardDropdown">
              <a className="dropdown-item" href="/">Analytics</a>
              <a className="dropdown-item" href="/">Commerce</a>
              <a className="dropdown-item" href="/">Sales</a>
              <a className="dropdown-item" href="/">Minimal</a>
              <a className="dropdown-item" href="/">Pages</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="applicationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Application
            </a>
            <div className="dropdown-menu" aria-labelledby="applicationDropdown">
              <a className="dropdown-item" href="/">Dropdown 1</a>
              <a className="dropdown-item" href="/">Dropdown 2</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="font-weight-bold">Dashboard Widgets</p>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/">Chart Boxes 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Chart Boxes 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Chart Boxes 3</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Profile Boxes</a>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="font-weight-bold">Forms</p>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/">Elements</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Widgets</a>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="font-weight-bold">Charts</p>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/">ChartJS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Apex charts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Chart Sparklines</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
