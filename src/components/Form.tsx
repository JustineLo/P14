import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { OptionType } from './FormSelect';
import { states } from '../data/states';

function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [department, setDepartment] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [selectedState, setSelectedState] = useState<OptionType>(states[0]);
  const [zipCode, setZipCode] = useState('');

  const handleSave = () => {
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state: selectedState.abbreviation,
      zipCode
    };
    console.log(employee);
  };

  return (
    <form action="#" className="creation-form">
      <TextField label="First Name" id="first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      <TextField label="Last Name" id="last-name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      <TextField label="Date of Birth" id="date-of-birth" type="date" InputLabelProps={{ shrink: true }} value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} />
      <TextField label="Start Date" id="start-date" type="date" InputLabelProps={{ shrink: true }} value={startDate} onChange={(event) => setStartDate(event.target.value)} />
      <fieldset>
        <legend>Address</legend>
        <TextField label="Street" id="street" value={street} onChange={(event) => setStreet(event.target.value)} />
        <TextField label="City" id="city" value={city} onChange={(event) => setCity(event.target.value)} />
        <TextField id="zip-code" label="Zip Code" type="number" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
      </fieldset>
      <Button variant="contained" onClick={handleSave}>Save</Button>
    </form>
  )
}

export default Form;
