import * as React from 'react'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Link from '@mui/material/Link'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'

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
      {changed && (
        <Alert severity="info" sx={{ marginBottom: '2em' }}>
          Driving origin changed!
        </Alert>
      )}

      <Card>
        <CardMedia
          component="img"
          alt="Highlands road"
          height="207"
          image="/images/preferences/road.avif"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Origin for driving estimates
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
        </CardContent>
      </Card>
    </>
  )
}

export default DrivingPreferences
