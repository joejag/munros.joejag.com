import * as React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { fetchData } from '../../biz/fetchData'
import { Area, Trip } from '../../biz/types'
import { hasCompletedAll, hoursSince } from '../../biz/utils'
import { MUNRO_GROUPING, MUNROS } from '../../data/munros'
import Banner from '../Banner'
import { dbSaveMulti, WalkHighlandsContextV2 } from '../Context'
import TripCard from '../TripCard'

const getFriends = (): string[] => {
  return JSON.parse(localStorage.getItem('friends') || '[]')
}

const addFriend = (friend: string) => {
  const friends: string[] = getFriends()
  if (!friends.includes(friend)) {
    friends.push(friend)
    localStorage.setItem('friends', JSON.stringify(friends))
  }
}

const removeFriend = (friend: string) => {
  const friends: string[] = getFriends()
  const arr = friends.filter((item) => item !== friend)
  localStorage.setItem('friends', JSON.stringify(arr))
}

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
        {completed.name === null && (
          <>
            <Typography variant="h2">Plan a trip with a friend</Typography>
            <Typography sx={{ marginTop: '1.5em' }}>
              You need to{' '}
              <Link href="/walkhighlands" color="inherit">
                link your account
              </Link>{' '}
              before adding a friend
            </Typography>
          </>
        )}
        {completed.name !== null && completed.buddy.name === null && (
          <FindFriend />
        )}
        {completed.name !== null && completed.buddy.name !== null && (
          <PlanTrip />
        )}
      </Container>
    </>
  )
}

const PlanTrip = () => {
  const { completed, setCompleted } = React.useContext(WalkHighlandsContextV2)

  const [friendId, setFriendId] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [failed, setFailed] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (completed.buddy.lastRefresh != null) {
      const lastRefresh = new Date(completed.buddy.lastRefresh)
      const dataAge = hoursSince(lastRefresh)
      if (dataAge > 1) {
        fetchData((result: any) => {
          const saveMe = {
            ...completed,
            buddy: {
              munrosCompleted: result.munros,
              name: result.name,
              buddyLastRefresh: new Date(),
            },
          }
          dbSaveMulti(saveMe)
          setCompleted(saveMe)
        }, completed.name)
      }
    }
  }, [completed, setCompleted])

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

  const fetchFriend = (friend: string) => {
    setLoading(true)
    fetchData(
      (res: any) => {
        const saveMe = {
          ...completed,
          buddy: {
            munrosCompleted: res.munros,
            name: res.name,
            lastRefresh: new Date(),
          },
        }
        dbSaveMulti(saveMe)
        setLoading(false)
        setFailed(null)
        addFriend(friend)
        setCompleted(saveMe)
      },
      friend,
      () => {
        setFailed(`Could not fetch data for '${friend}' on WalkHighlands`)
        setLoading(false)
      }
    )
  }

  return (
    <>
      {failed && (
        <Alert severity="error" sx={{ marginBottom: '1em' }}>
          {failed}
        </Alert>
      )}

      {loading && (
        <>
          <Typography variant="h2">Plan a trip with a friend</Typography>
          <Typography sx={{ marginBottom: '1em' }}>
            Loading {friendId}{' '}
            <CircularProgress
              sx={{ marginLeft: '0.5em' }}
              color="inherit"
              size="1rem"
            />
          </Typography>
        </>
      )}

      {!loading && (
        <>
          <Typography variant="h2">
            Plan a trip with {completed.buddy.name}
          </Typography>
          <Grid container sx={{ marginTop: '1.5em', marginBottom: '1.5em' }}>
            <Button
              variant="outlined"
              onClick={(e: any) => {
                clearBuddy()
              }}
            >
              New buddy
            </Button>

            {getFriends().map((friend) => (
              <Button
                key={friend}
                onClick={(e: any) => {
                  setFriendId(friend)
                  fetchFriend(friend)
                }}
              >
                {friend}
              </Button>
            ))}
          </Grid>

          <Typography sx={{ marginBottom: '1em' }}>
            These are trips that both of you have not completed yet.
          </Typography>

          {MUNRO_GROUPING.map((area: Area) => (
            <PlanTripArea area={area.area} key={area.area} />
          ))}

          <Typography sx={{ marginTop: '1em' }}>
            <Link href="/" color="inherit">
              Back to Trips
            </Link>
          </Typography>
        </>
      )}
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
  const [failed, setFailed] = React.useState<string | null>(null)

  const fetchFriend = (friend?: string) => {
    const friendToFetch = friend ? friend : friendId
    setLoading(true)
    fetchData(
      (res: any) => {
        const saveMe = {
          ...completed,
          buddy: {
            munrosCompleted: res.munros,
            name: res.name,
            lastRefresh: new Date(),
          },
        }
        dbSaveMulti(saveMe)
        setLoading(false)
        setFailed(null)
        addFriend(friendToFetch)
        setCompleted(saveMe)
      },
      friendToFetch,
      () => {
        setFailed(
          `Could not fetch data for '${friendToFetch}' on WalkHighlands`
        )
        setLoading(false)
      }
    )
  }

  return (
    <>
      {failed && (
        <Alert severity="error" sx={{ marginBottom: '1em' }}>
          {failed}
        </Alert>
      )}
      <Typography variant="h2">Plan a trip with a friend</Typography>
      <Typography sx={{ marginTop: '1em' }}>
        You can use this to see a trip which you both need to bag
      </Typography>
      {getFriends().length > 0 && (
        <Typography sx={{ marginTop: '1em' }}>Recent friends: </Typography>
      )}
      {getFriends().map((friend) => (
        <Button
          key={friend}
          onClick={(e: any) => {
            fetchFriend(friend)
          }}
        >
          {friend}
        </Button>
      ))}
      <Grid container sx={{ paddingTop: '1em' }}>
        <TextField
          id="outlined-basic"
          label="Your Friends's WalkHighlands Id"
          variant="outlined"
          value={friendId}
          onChange={(e: any) => {
            setFriendId(e.target.value.toLowerCase())
          }}
          onKeyUp={(event: any) => {
            if (event.key === 'Enter') fetchFriend()
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
      <Typography sx={{ marginTop: '1em' }}>
        <Link href="/" color="inherit">
          Back to Trips
        </Link>
      </Typography>
    </>
  )
}

export default PlanATrip
