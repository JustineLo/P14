import { Link } from "react-router-dom"
import CreateEmployeeForm from "../components/CreateEmployeeForm"

function CreateEmployee() {

  return (
    <div id="create-employee">
      <h1>HRNet</h1>
      <Link to="/employees-list">View Current Employees</Link>
      <CreateEmployeeForm />
    </div>
  )
}

export default CreateEmployee
