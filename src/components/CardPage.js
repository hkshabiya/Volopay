import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CardList from './CardList';
const CardPage = () => {
  return (
    <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Volopay</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to="/">All</Link>
      </li>
      <li class="nav-item">
        <Link to="/your">Your</Link>
      </li>
      <li class="nav-item">
        <Link to="/blocked">Blocked</Link>
      </li>
    </ul>
  </div>
</nav>

        <Routes>
          <Route path="/your" element={<CardList type='your'/>} />
          <Route path="/" element={<CardList type='all'/>} />
          <Route path="/blocked" element={<CardList type='blocked'/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default CardPage;
