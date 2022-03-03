import * as React from 'react'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Container from '@mui/material/Container'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'

import Banner from './Banner'

const DrivingPreferences = () => {
  const stored = localStorage.getItem('drivingOrigin') || 'Glasgow'
  const [town, setTown] = React.useState(stored)
  const [changed, setChanged] = React.useState(false)

  const handleChange = (event: any) => {
    setTown(event.target.value)
    localStorage.setItem('drivingOrigin', event.target.value)
    setChanged(true)
  }

  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        {changed && (
          <Alert severity="info" sx={{ marginBottom: '2em' }}>
            Driving origin changed!
          </Alert>
        )}
        <Typography>
          You can choose the starting location for driving estimates here.
        </Typography>

        <FormControl fullWidth sx={{ marginTop: '1em' }}>
          <InputLabel id="demo-simple-select-label">Origin</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={town}
            label="Origin"
            onChange={handleChange}
          >
            <MenuItem value={'Glasgow'}>Glasgow</MenuItem>
            <MenuItem value={'Edinburgh'}>Edinburgh</MenuItem>
            <MenuItem value={'Fort William'}>Fort William</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </>
  )
}

export default DrivingPreferences
