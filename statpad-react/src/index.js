import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import PlayerCollege from "./pages/Player-College"
import CoachTeam from "./pages/Coach-Team";
import AddDelete from "./pages/Add-Delete";
import About from "./pages/About";


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
          <Route path="player-college" element={(<PlayerCollege />)} />
          <Route path="coach-team" element={(<CoachTeam />)} />
          <Route path="add-delete" element={(<AddDelete />)} />
          <Route path="about" element={(<About />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


root.render(
  <App />
);
