import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CardList from './CardList';
const CardPage = () => {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Volopay</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/">All</Link>
      </li>
      <li className="nav-item">
        <Link to="/your">Your</Link>
      </li>
      <li className="nav-item">
        <Link to="/blocked">Blocked</Link>
      </li>
    </ul>
  </div>
</nav>

        <Routes>
          <Route exact path="/" element={<CardList type='all'/>} />
          <Route path="/your" element={<CardList type='your'/>} />
          <Route path="/blocked" element={<CardList type='blocked'/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default CardPage;
