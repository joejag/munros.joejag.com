import React from 'react'
import { MUNROS, MUNRO_GROUPING } from './munros'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import TripCard, { Trip } from './components/TripCard'
import MunroAreaSummary from './components/MunroAreaSummary'

import Banner from './components/Banner'
import { safeName, allContains } from './biz/utils'
import { WalkHighlandsContext } from './components/Context'

export const AllMunros = () => {
  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <Typography>
          This site combines Steve Fallon's{' '}
          <Link href="https://www.stevenfallon.co.uk/munrosr.html">
            Munros by region
          </Link>{' '}
          with curated{' '}
          <Link href="https://www.walkhighlands.co.uk/munros/">
            Walk Highlands
          </Link>{' '}
          routes along with estimated driving times.
        </Typography>
        <Typography sx={{ marginTop: '1em', marginBottom: '1.6em' }}>
          It is highly recommend to <Link href="/walkhighlands">link</Link> your
          Walk Highlands munro map so you can see what Munros you've already
          summited.
        </Typography>
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
    (m: Trip) => safeName(m.location.steveFallon.area) === area
  )

  return (
    <>
      <Banner area={area} />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <TripsList munros={munros} />
      </Container>
    </>
  )
}

const TripsList = ({ munros }: { munros: Trip[] }) => {
  const { completed } = React.useContext(WalkHighlandsContext)

  munros.sort((a: Trip, b: Trip) => {
    if (a.grade === b.grade) {
      return a.time.naismith > b.time.naismith ? 1 : -1
    }
    return a.grade > b.grade ? 1 : -1
  })

  const tripsTodo = munros.filter((t) => !hasCompleted(completed, t))
  const tripsCompleted = munros.filter((t) => hasCompleted(completed, t))

  return (
    <>
      {tripsTodo.length > 0 && (
        <>
          <Typography variant="h4">Todo</Typography>

          <Grid container spacing={4}>
            {tripsTodo.map((trip) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={trip.title}>
                  <Paper elevation={1}>
                    <TripCard trip={trip}></TripCard>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </>
      )}

      {tripsCompleted.length > 0 && (
        <>
          <Typography variant="h4" sx={{ marginTop: '1em' }}>
            Done
          </Typography>

          <Grid container spacing={4}>
            {tripsCompleted.map((trip) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={trip.title}>
                  <Paper elevation={1}>
                    <TripCard trip={trip}></TripCard>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </>
      )}
    </>
  )
}

const hasCompleted = (completed: any, trip: Trip) =>
  allContains(
    completed?.munros || ([] as string[]),
    trip.munros.map((m) => m.uri)
  )

export const MunroGroup = ({ group }: any) => {
  const munros: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => safeName(m.location.steveFallon.group) === group
  )

  return (
    <>
      <Banner area={munros[0].location.steveFallon.area} group={group} />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <TripsList munros={munros} />
      </Container>
    </>
  )
}