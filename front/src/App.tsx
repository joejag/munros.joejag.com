import React from 'react'
import { MUNROS, MUNRO_GROUPING } from './munros'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import Badge from '@mui/material/Badge'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import TripCard, { Trip } from './TripCard'

import Link from '@mui/material/Link'

const App = () => {
  return (
    <>
      {MUNRO_GROUPING.map(({ area, groups }) => (
        <React.Fragment key={area}>
          <Typography variant="h3">{area}</Typography>
          {groups.map((group) => (
            <MunroGroup group={group} key={group} />
          ))}
        </React.Fragment>
      ))}
    </>
  )
}

const MunroGroup = ({ group }: any) => {
  const munros: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.group === group
  )

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ paddingBottom: '2em', paddingTop: '1em' }}
    >
      <Typography variant="h4">{group}</Typography>
      <Grid container spacing={4}>
        {munros.map((trip) => {
          return (
            <Grid item xs={3} key={trip.title}>
              <Paper elevation={1}>
                <TripCard trip={trip}></TripCard>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default App
