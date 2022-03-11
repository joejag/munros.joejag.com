import * as React from 'react'

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { Trip } from '../biz/types'
import { hasCompletedAll } from '../biz/utils'
import { WalkHighlandsContext } from './Context'
import { MunrosInAreaMap } from './Maps'
import TripCard from './TripCard'

export const TripsList = ({ munros }: { munros: Trip[] }) => {
  const { completed } = React.useContext(WalkHighlandsContext)

  munros.sort((a: Trip, b: Trip) => {
    if (a.grade === b.grade) {
      return a.time.naismith > b.time.naismith ? 1 : -1
    }
    return a.grade > b.grade ? 1 : -1
  })

  const tripsTodo = munros.filter((t) => !hasCompletedAll(completed, t))
  const tripsCompleted = munros.filter((t) => hasCompletedAll(completed, t))

  return (
    <>
      <MunrosInAreaMap trips={munros} />
      {tripsTodo.length > 0 && (
        <>
          <Typography variant="h4" sx={{ marginBottom: '0.5em' }}>
            Todo
          </Typography>

          <Grid container spacing={4}>
            {tripsTodo.map((trip) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={trip.title}>
                  <Paper elevation={1}>
                    <TripCard trip={trip} completed={false}></TripCard>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </>
      )}

      {tripsCompleted.length > 0 && (
        <>
          <Typography
            variant="h4"
            sx={{ marginTop: '1em', marginBottom: '0.5em' }}
          >
            Done
          </Typography>

          <Grid container spacing={4}>
            {tripsCompleted.map((trip) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={trip.title}>
                  <Paper elevation={1}>
                    <TripCard trip={trip} completed={true}></TripCard>
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
