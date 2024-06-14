import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DiscreteSliderSteps() {
  const [value, setValue] = React.useState<number>(1);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
      console.log('Slider Value:', newValue);
    }
  };

  return (
    <Box sx={{ width: 100 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={1}
        getAriaValueText={valuetext}
        step={0.00000001}
        marks
        min={0}
        max={100000}
        valueLabelDisplay="auto"
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}
