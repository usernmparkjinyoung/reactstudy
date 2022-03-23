import React from "react";
import { Route, Routes } from 'react-router-dom'; 
import About from "./About";
import Layout from './Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (  
    <div> 
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />  
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
      </Routes>   
    </div>
  );
}

export default App;
