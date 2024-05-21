import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<h1 style={{display:"flex", justifyContent:"center"}}>Welcome to Grocery Booking App</h1>} />
      </Routes>
      <nav>
          <div style={{display:"flex", justifyContent:"space-between", margin:"15px", padding:"20px"}}>
            <div className="list-admin">
              <Link style={{textDecoration:"none", color:"#ffff"}} to="/admin">ADMIN</Link>
            </div>
            <div className="list-admin">
              <Link style={{textDecoration:"none", color:"#ffff"}} to="/user">USER</Link>
            </div>
          </div>
      </nav>
      <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
    </div>
  );
}

export default App;
