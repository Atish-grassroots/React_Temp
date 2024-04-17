import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Common/Login';
import Dashboard from './Admin/Dashboard';
import AgentDashboard from './Agent/Dashboard';
import Layout from './Layout/Layout';
import UserProfile from './Common/UserProfile'; 


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/admindashboard" element={<Dashboard />} /> 
      <Route path="/agentdashboard" element={<AgentDashboard />} />
      <Route path="/user-profile" element={<Layout><UserProfile /></Layout>} />
    </Routes>
  </Router>
  );
}

export default App;