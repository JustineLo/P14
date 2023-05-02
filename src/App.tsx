import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEmployee from './pages/CreateEmployee';
import EmployeesList from './pages/EmployeesList';

export const EmployeesContext = createContext(localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees') as string) : []);

function App() {
  const [employees, setEmployees] = useState(localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees') as string) : []);

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees-list" element={<EmployeesList />} />
      </Routes>
    </EmployeesContext.Provider>
  );
}

export default App;
