import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DiscreteSliderSteps() {
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
      />
    </Box>
  );
}