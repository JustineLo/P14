import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Employee } from '../data/type';

interface EmployeesTableProps {
  employees: Employee[];
}

function EmployeesTable({ employees }: EmployeesTableProps) {
 
  const columnHelper = createColumnHelper<Employee>()

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

  const table = useReactTable({
    data: employees,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell key={header.id}>
                  {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmployeesTable;
