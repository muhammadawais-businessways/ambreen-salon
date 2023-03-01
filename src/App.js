import './App.css';
import SideBar from './Components/SideBar';
import {Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <SideBar >
      <Routes>
                            <Route path="/" index element={<Home />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/visit-us" element={<VisitUs />} />
                        </Routes>
                        <SideBar />
    </div>
  );
}

export default App;
