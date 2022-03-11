import * as React from 'react'

import Alert from '@mui/material/Alert'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Link from '@mui/material/Link'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'

import Banner from '../Banner'

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
            <MenuItem value={'Aberdeen'}>Aberdeen</MenuItem>
            <MenuItem value={'Dundee'}>Dundee</MenuItem>
            <MenuItem value={'Glasgow'}>Glasgow</MenuItem>
            <MenuItem value={'Edinburgh'}>Edinburgh</MenuItem>
            <MenuItem value={'Fort William'}>Fort William</MenuItem>
            <MenuItem value={'Inverness'}>Inverness</MenuItem>
            <MenuItem value={'Perth'}>Perth</MenuItem>
            <MenuItem value={'Stirling'}>Stirling</MenuItem>
          </Select>
        </FormControl>
        <Typography sx={{ marginTop: '1em' }}>
          <Link href="/" color="inherit">
            Back to Trips
          </Link>
        </Typography>
      </Container>
    </>
  )
}

export default DrivingPreferences
