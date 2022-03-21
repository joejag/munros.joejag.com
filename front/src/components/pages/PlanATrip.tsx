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
import { allAreas, tripsInArea } from '../../biz/findTrips'
import { Area, Trip } from '../../biz/types'
import { hasCompletedAll } from '../../biz/utils'
import Banner from '../Banner'
import { WalkHighlandsContextV2 } from '../Context'
import Footer from '../Footer'
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

const PlanATrip = () => {
  const { completed } = React.useContext(WalkHighlandsContextV2)
  const [friendData, setFriendData] = React.useState(null)

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
        {completed.name !== null && friendData === null && (
          <FindFriend setFriendData={setFriendData} />
        )}
        {completed.name !== null && friendData !== null && (
          <PlanTrip friendData={friendData} setFriendData={setFriendData} />
        )}
      </Container>
      <Footer />
    </>
  )
}

const PlanTrip = ({
  setFriendData,
  friendData,
}: {
  setFriendData: any
  friendData: any
}) => {
  const [friendId, setFriendId] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [failed, setFailed] = React.useState<string | null>(null)

  const fetchFriend = (friend: string) => {
    setLoading(true)
    fetchData(
      (res: any) => {
        const saveMe = {
          munrosCompleted: res.munros,
          name: res.name,
          lastRefresh: new Date(),
        }
        setLoading(false)
        setFailed(null)
        addFriend(friend)
        setFriendData(saveMe)
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
            Plan a trip with {friendData.name}
          </Typography>
          <Grid container sx={{ marginTop: '1.5em', marginBottom: '1.5em' }}>
            <Button
              variant="outlined"
              onClick={(e: any) => {
                setFriendData(null)
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

          {allAreas().map((area: Area) => (
            <PlanTripArea
              area={area.area}
              key={area.area}
              friendData={friendData}
            />
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

const PlanTripArea = ({
  area,
  friendData,
}: {
  area: string
  friendData: any
}) => {
  const { completed } = React.useContext(WalkHighlandsContextV2)

  const mergedMunros = [
    ...completed.munrosCompleted,
    ...friendData.munrosCompleted,
  ]

  const areaTrips = tripsInArea(area)

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

const FindFriend = ({ setFriendData }: { setFriendData: any }) => {
  const [friendId, setFriendId] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [failed, setFailed] = React.useState<string | null>(null)

  const fetchFriend = (friend?: string) => {
    const friendToFetch = friend ? friend : friendId
    setLoading(true)
    fetchData(
      (res: any) => {
        const saveMe = {
          munrosCompleted: res.munros,
          name: res.name,
          lastRefresh: new Date(),
        }
        setLoading(false)
        setFailed(null)
        addFriend(friendToFetch)
        setFriendData(saveMe)
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
