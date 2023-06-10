import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CardList from './CardList';
const CardPage = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/your">Your</Link>
            </li>
            <li>
              <Link to="/all">All</Link>
            </li>
            <li>
              <Link to="/blocked">Blocked</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/your" element={<CardList type='your'/>} />
          <Route path="/all" element={<CardList type='all'/>} />
          <Route path="/blocked" element={<CardList type='blocked'/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default CardPage;
