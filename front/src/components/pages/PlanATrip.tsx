import * as React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { fetchData } from '../../biz/fetchData'
import { Area, Trip } from '../../biz/types'
import { hasCompletedAll } from '../../biz/utils'
import { MUNRO_GROUPING, MUNROS } from '../../data/munros'
import Banner from '../Banner'
import { dbSaveMulti, WalkHighlandsContextV2 } from '../Context'
import TripCard from '../TripCard'

const PlanATrip = () => {
  const { completed } = React.useContext(WalkHighlandsContextV2)

  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        {completed.buddy.name === null && <FindFriend />}
        {completed.buddy.name !== null && <PlanTrip />}
      </Container>
    </>
  )
}

const PlanTrip = () => {
  const { completed, setCompleted } = React.useContext(WalkHighlandsContextV2)

  const clearBuddy = () => {
    const blank = {
      ...completed,
      buddy: {
        name: null,
        munrosCompleted: [],
        buddyLastRefresh: null,
      },
    }
    dbSaveMulti(blank)
    setCompleted(blank)
  }

  return (
    <>
      <Typography variant="h2">
        Plan a trip with {completed.buddy.name}
      </Typography>

      <Grid container sx={{ marginTop: '1.5em', marginBottom: '1.5em' }}>
        <Button
          variant="contained"
          onClick={(e: any) => {
            clearBuddy()
          }}
        >
          Change buddy
        </Button>
      </Grid>

      {MUNRO_GROUPING.map((area: Area) => (
        <PlanTripArea area={area.area} key={area.area} />
      ))}
    </>
  )
}

const PlanTripArea = ({ area }: { area: string }) => {
  const { completed } = React.useContext(WalkHighlandsContextV2)

  const mergedMunros = [
    ...completed.munrosCompleted,
    ...completed.buddy.munrosCompleted,
  ]

  const areaTrips: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.area === area
  )

  const tripsAvailable = areaTrips.filter(
    (t) => !hasCompletedAll(mergedMunros, t)
  )

  tripsAvailable.sort((a: Trip, b: Trip) => {
    if (a.grade === b.grade) {
      return a.time.naismith > b.time.naismith ? 1 : -1
    }
    return a.grade > b.grade ? 1 : -1
  })

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel1a-${area}-content`}
        id={`panel1a-${area}`}
      >
        <Typography>
          {tripsAvailable.length} trips in <strong>{area}</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={4}>
          {tripsAvailable.map((trip: Trip) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={trip.url}>
              <Paper elevation={1}>
                <TripCard trip={trip} completed={false}></TripCard>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

const FindFriend = () => {
  const { completed, setCompleted } = React.useContext(WalkHighlandsContextV2)

  const [friendId, setFriendId] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const fetchFriend = () => {
    setLoading(true)
    fetchData((res: any) => {
      const now =
        new Date().toDateString() + ' at ' + new Date().toLocaleTimeString()
      const saveMe = {
        ...completed,
        buddy: {
          munrosCompleted: res.munros,
          name: res.name,
          lastRefresh: now,
        },
      }
      dbSaveMulti(saveMe)
      setLoading(false)
      setCompleted(saveMe)
    }, friendId)
  }

  return (
    <>
      <Typography variant="h2">Plan a trip with a friend</Typography>
      <Typography sx={{ marginTop: '1em' }}>
        You can use this to see a trip which you both need to bag
      </Typography>
      <Grid container sx={{ paddingTop: '2em' }}>
        <TextField
          id="outlined-basic"
          label="Your Friends's WalkHighlands Id"
          variant="outlined"
          value={friendId}
          onChange={(e: any) => {
            setFriendId(e.target.value)
          }}
        />
      </Grid>
      <Grid container sx={{ paddingTop: '0.5em' }}>
        <Button
          variant="contained"
          onClick={(e: any) => {
            fetchFriend()
          }}
        >
          Find their Munros
          {loading && (
            <CircularProgress
              sx={{ marginLeft: '0.5em' }}
              color="inherit"
              size="1rem"
            />
          )}
        </Button>
      </Grid>
    </>
  )
}

export default PlanATrip
