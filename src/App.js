import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from './pages/Profile/Profile';
import NoPage from './pages/NoPage/NoPage';
import FriendsPage from './pages/FriendsPage/FriendsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path='friendsPage' element={<FriendsPage/>}/>
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
