import * as React from 'react'

import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import Badge from '@mui/material/Badge'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { Trip } from '../biz/types'
import { hasCompletedAll } from '../biz/utils'
import { WalkHighlandsContextV2 } from './Context'
import { MunrosInAreaMap } from './Maps'
import TripCard from './TripCard'

export const TripsList = ({
  munros,
  fallonArea,
  fallonGroup,
}: {
  munros: Trip[]
  fallonArea?: any
  fallonGroup?: any
}) => {
  const { completed } = React.useContext(WalkHighlandsContextV2)

  munros.sort((a: Trip, b: Trip) => {
    if (a.grade === b.grade) {
      return a.time.naismith > b.time.naismith ? 1 : -1
    }
    return a.grade > b.grade ? 1 : -1
  })

  const tripsTodo = munros.filter(
    (t) => !hasCompletedAll(completed.munrosCompleted, t)
  )
  const tripsCompleted = munros.filter((t) =>
    hasCompletedAll(completed.munrosCompleted, t)
  )

  return (
    <>
      <MunrosInAreaMap trips={munros} />
      {(fallonArea || fallonGroup) && (
        <Paper>
          <Typography sx={{ padding: '0.5em', marginBottom: '1em' }}>
            Steven Fallon's{' '}
            <Link href={fallonArea} target="_blank">
              routes in this area
            </Link>
            {fallonGroup.length > 0 && (
              <>
                {' '}
                and notable alternative routes:{' '}
                <List dense={true}>
                  {fallonGroup.map((f: any) => {
                    return (
                      <React.Fragment key={f.url}>
                        <ListItem>
                          <Badge
                            badgeContent={f.munros}
                            color="primary"
                            sx={{ marginRight: '1em' }}
                          >
                            <FilterHdrIcon />
                          </Badge>
                          <Link href={f.url} target="_blank">
                            {f.name}
                          </Link>
                        </ListItem>
                      </React.Fragment>
                    )
                  })}
                </List>
              </>
            )}
          </Typography>
        </Paper>
      )}

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
