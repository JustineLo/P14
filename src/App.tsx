import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEmployee from './pages/CreateEmployee';
import EmployeesList from './pages/EmployeesList';

function App() {

  return (
    <Routes>
      <Route path="/" element={<CreateEmployee />} />
      <Route path="/employees-list" element={<EmployeesList />} />
    </Routes>
  )
}

export default App
