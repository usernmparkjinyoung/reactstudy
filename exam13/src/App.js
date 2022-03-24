import React from "react";
import { Route, Routes } from 'react-router-dom'; 
import About from "./About";
import Layout from './Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';

function App() {
  return (  
    <div> 
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />  
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>    
    </div>
  );
}

// 1. 기본적으로 extact기능이 있고 extact를 쓰지 않으려면 *를 쓴다 

export default App;
