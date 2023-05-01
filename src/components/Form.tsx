import { TextField } from '@mui/material'

function Form() {

  return (
    <form action="#" className="creation-form">
        <TextField label="First Name" id="first-name" />
        <TextField label="Last Name" id="last-name" />
        <TextField label="Date of Birth" id="date-of-birth" type="date" InputLabelProps={{ shrink: true }} />
        <TextField label="Start Date" id="start-date" type="date" InputLabelProps={{ shrink: true }} />
        <fieldset>
            <legend>Address</legend>
            <TextField label="Street" id="street" />
            <TextField label="City" id="city" />
        </fieldset>
        
    </form>
  )
}

export default Form
