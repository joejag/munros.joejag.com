import React from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'

import { fetchFriendData } from '../biz/fetchData'
import { WalkHighlandsContext } from './Context'

import Banner from './Banner'

interface FriendTrips {
  name: string
  munros: string[]
}

const PlanATrip = () => {
  const { completed, setCompleted } = React.useContext(WalkHighlandsContext)

  const [loading, setLoading] = React.useState(false)
  const [friendData, setFriendData] = React.useState<FriendTrips | null>(null)
  const [friendId, setFriendId] = React.useState('')

  if (friendData === null && localStorage.getItem('cachedFriend')) {
    setFriendData(JSON.parse(localStorage.getItem('cachedFriend') || '{}'))
  }

  const fetchWalkHighlandsUser = (userId: string) => {
    fetchFriendData((result: FriendTrips) => {
      setFriendData(result)
      setLoading(false)
      const mergedState = {
        ...completed,
        name: 'bob',
        munros: (completed?.munros || []).concat(
          ...result.munros.filter(
            (i) => (completed?.munros || []).indexOf(i) < 0
          )
        ),
      }
      setCompleted(mergedState)
    }, userId)
    setLoading(true)
  }

  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <Typography variant="h3">Plan a trip with a friend</Typography>
        <Typography sx={{ marginTop: '1em' }}>
          You can use this to see a trip which you both need to bag
        </Typography>

        {friendData && (
          <h1>
            {friendData.name} {friendData.munros.length}
          </h1>
        )}

        {friendData === null && (
          <>
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
                  fetchWalkHighlandsUser(friendId)
                }}
              >
                Link
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
        )}
      </Container>
    </>
  )
}

export default PlanATrip
