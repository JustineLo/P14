import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { EmployeesContext } from '../App';
import { departments } from '../data/departments';
import { states } from '../data/states';
import { Employee } from '../data/type';
import FormSelect, { OptionType } from './FormSelect';
import Modal from './Modal';

function CreateEmployeeForm() {

  const { employees, setEmployees } = useContext(EmployeesContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [department, setDepartment] = useState<OptionType>(departments[0]);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [selectedState, setSelectedState] = useState<OptionType>(states[0]);
  const [zipCode, setZipCode] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    setShowModal(true);
    const newEmployee: Employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department: department.name,
      street,
      city,
      state: selectedState.name,
      zipCode
    };
    const updatedEmployeesList: Employee[] = [...employees, newEmployee];
    setEmployees(updatedEmployeesList);
    localStorage.setItem('employees', JSON.stringify(updatedEmployeesList));
  };

  return (
    <>
      <h2>Create Employee</h2>
      <form className="creation-form">
        <TextField label="First Name" id="first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        <TextField label="Last Name" id="last-name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        <TextField label="Date of Birth" id="date-of-birth" type="date" InputLabelProps={{ shrink: true }} value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />
        <TextField label="Start Date" id="start-date" type="date" InputLabelProps={{ shrink: true }} value={startDate} onChange={(event) => setStartDate(event.target.value)} />
        <fieldset>
          <legend>Address</legend>
          <TextField label="Street" id="street" value={street} onChange={(event) => setStreet(event.target.value)} />
          <TextField label="City" id="city" value={city} onChange={(event) => setCity(event.target.value)} />
          <FormSelect options={states} value={selectedState} onChange={(option: OptionType) => setSelectedState(option)} />
          <TextField id="zip-code" label="Zip Code" type="number" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
        </fieldset>
        <FormSelect options={departments} value={department} onChange={(option: OptionType) => setDepartment(option)} />
        <Button variant="contained" onClick={handleSave}>Save</Button>
      </form>
      <Modal show={showModal} onClose={() => setShowModal(false)}> 
        <h2>Employee Created!</h2>
      </Modal>
    </>
    
  )
}

export default CreateEmployeeForm;
