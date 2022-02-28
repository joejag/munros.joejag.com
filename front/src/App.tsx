import React from 'react'
import { MUNROS } from './munros'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import Badge from '@mui/material/Badge'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'

const App = () => {
  const munros = Object.values(MUNROS).filter(
    (m: any) => m.location.steveFallon.area === 'Loch Lomond to Loch Tay'
  )
  return (
    <Container maxWidth="xl" component="main">
      <Typography variant="h3">Loch Lomond to Loch Tay</Typography>
      <Grid container spacing={0}>
        {munros.map((trip) => {
          return <TripCard trip={trip} key={trip.title}></TripCard>
        })}
      </Grid>
    </Container>
  )
}

interface Trip {
  title: string
  desc: string
  image: string
  grade: number
  url: string
  munros: any[]
  distance: number
  ascent: number
  time: any
}

const TripCard: React.FC<{ trip: Trip }> = ({ trip }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={trip.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {trip.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {trip.desc}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Badge badgeContent={trip.munros.length} color="primary">
          <FilterHdrIcon />
        </Badge>
        | {trip.distance}k | {trip.ascent}m | {trip.time.naismith} |{' '}
        {trip.grade}{' '}
      </CardActions>
    </Card>
  )
}

export default App
