import React from 'react'
import { MUNROS, MUNRO_GROUPING } from './munros'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Typography from '@mui/material/Typography'

import TripCard, { Trip } from './components/TripCard'
import MunroAreaSummary from './components/MunroAreaSummary'

export const AllMunros = () => {
  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ paddingBottom: '2em', paddingTop: '1em' }}
    >
      <Typography variant="h4">All Munro Trips</Typography>
      <Grid container spacing={4}>
        {MUNRO_GROUPING.map(({ area, groups }) => (
          <Grid item xs={3} key={area}>
            <Paper elevation={1}>
              <MunroAreaSummary area={area} groups={groups} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export const MunroGroup = ({ group }: any) => {
  const munros: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.group === group
  )

  munros.sort((a, b) => {
    if (a.grade === b.grade) {
      return a.time.naismith > b.time.naismith ? 1 : -1
    }
    return a.grade > b.grade ? 1 : -1
  })

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ paddingBottom: '2em', paddingTop: '1em' }}
    >
      <Typography variant="h4">
        {munros[0].location.steveFallon.area} <ArrowForwardIosIcon /> {group}
      </Typography>
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
