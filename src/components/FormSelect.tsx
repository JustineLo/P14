import { Select, MenuItem } from '@mui/material';

export type OptionType = {
    name: string;
    abbreviation: string;
};

interface FormSelectProps {
    options: OptionType[];
    value: OptionType;
    onChange: (option: OptionType) => void;
}

function FormSelect({ options, value, onChange }: FormSelectProps) {

  function handleStateChange(event: any) {
    const newValue = options.find(option => option.abbreviation === event.target.value);
    if (newValue) {
      onChange(newValue);
    }
  };

  return (
    <Select
      value={value.abbreviation}
      onChange={handleStateChange}
    >
      {options.map((state) => (
        <MenuItem key={state.abbreviation} value={state.abbreviation}>
          {state.name}
        </MenuItem>
      ))}
    </Select>
  );
}

export default FormSelect;
