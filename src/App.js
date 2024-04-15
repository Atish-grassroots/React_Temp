import './App.css';
import pro1 from './assets/img/product-1.jpg';
import pro2 from './assets/img/product-2.jpg';
import pro3 from './assets/img/product-3.jpg';
import pro4 from './assets/img/product-4.jpg';
import pro5 from './assets/img/product-5.jpg';
import Login from './Common/Login'; // Import the Login component
import Dashboard from './Admin/Dashboard';

function App() {
  return (
    <div>
      {/* <Login />  */}
      <Dashboard />
    </div>
  );
}

export default App;