import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Navbar />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
