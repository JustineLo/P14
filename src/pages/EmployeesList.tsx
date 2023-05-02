import { useContext } from "react";
import { EmployeesContext } from "../App";
import EmployeesTable from "../components/EmployeesTable";

function EmployeesList() {
    const { employees } = useContext(EmployeesContext);

  return (
    <div id="create-employee">
      <h1>HRNet</h1>
        <EmployeesTable employees={employees} />
    </div>
  )
}

export default EmployeesList
