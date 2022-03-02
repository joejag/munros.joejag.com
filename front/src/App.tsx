import React from 'react'
import { MUNROS, MUNRO_GROUPING } from './munros'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

import TripCard, { Trip } from './components/TripCard'
import MunroAreaSummary from './components/MunroAreaSummary'

import Banner from './components/Banner'

export const AllMunros = () => {
  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <Grid container spacing={4}>
          {MUNRO_GROUPING.map(({ area, groups }) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={area}>
              <Paper elevation={1}>
                <MunroAreaSummary area={area} groups={groups} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export const MunroArea = ({ area }: any) => {
  const munros: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.area === area
  )

  munros.sort((a, b) => {
    if (a.grade === b.grade) {
      return a.time.naismith > b.time.naismith ? 1 : -1
    }
    return a.grade > b.grade ? 1 : -1
  })

  return (
    <>
      <Banner area={area} />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <Grid container spacing={4}>
          {munros.map((trip) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={trip.title}>
                <Paper elevation={1}>
                  <TripCard trip={trip}></TripCard>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
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
    <>
      <Banner area={munros[0].location.steveFallon.area} group={group} />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <Grid container spacing={4}>
          {munros.map((trip) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={trip.title}>
                <Paper elevation={1}>
                  <TripCard trip={trip}></TripCard>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}
