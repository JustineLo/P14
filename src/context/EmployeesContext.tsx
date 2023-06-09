import { createContext } from "react";

export const EmployeesContext = createContext(localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees') as string) : []);