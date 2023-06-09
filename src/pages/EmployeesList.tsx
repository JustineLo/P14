import { createColumnHelper, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useContext } from "react";
import EmployeesTable from "../components/EmployeesTable";
import TableFooter from "../components/TableFooter";
import TableHeader from "../components/TableHeader";
import { Employee } from "../data/type";
import { Link } from "react-router-dom";
import { EmployeesContext } from "../context/EmployeesContext";

const columnHelper = createColumnHelper<Employee>();
const columns = [
  columnHelper.accessor('firstName', {
    cell: info => info.getValue(),
    header: () => <span>First Name</span>
  }),
  columnHelper.accessor('lastName', {
    cell: info => info.getValue(),
    header: () => <span>Last Name</span>
  }),
  columnHelper.accessor('startDate', {
    cell: info => info.getValue(),
    header: () => <span>Start Date</span>
  }),
  columnHelper.accessor('department', {
    cell: info => info.getValue(),
    header: () => <span>Department</span>
  }),
  columnHelper.accessor('dateOfBirth', {
    cell: info => info.getValue(),
    header: () => <span>Date of Birth</span>
  }),
  columnHelper.accessor('street', {
    cell: info => info.getValue(),
    header: () => <span>Street</span>
  }),
  columnHelper.accessor('city', {
    cell: info => info.getValue(),
    header: () => <span>City</span>
  }),
  columnHelper.accessor('state', {
    cell: info => info.getValue(),
    header: () => <span>State</span>
  }),
  columnHelper.accessor('zipCode', {
    cell: info => info.getValue(),
    header: () => <span>Zip Code</span>
  }),
]

function EmployeesList() {
    const { employees } = useContext(EmployeesContext);

    const table = useReactTable({
        data: employees,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

  return (
    <div id="employees-list">
      <h1>Current Employees</h1>
      <div className="employees-table">
        <TableHeader table={table} />
        <EmployeesTable table={table} />
        <TableFooter table={table} />
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}

export default EmployeesList
