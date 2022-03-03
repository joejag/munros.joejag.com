import React from 'react'

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Link from '@mui/material/Link'

import { fetchData } from '../biz/fetchData'
import { WalkHighlandsContext, INITIAL_STATE } from './Context'
import Banner from './Banner'

const WalkHighlandsConnect = () => {
  const { completed, setCompleted } = React.useContext(WalkHighlandsContext)
  const [id, setId] = React.useState('')
  const loggedIn =
    completed?.id !== '' &&
    completed?.name !== '' &&
    localStorage.getItem('walkHighlandsId')

  const fetchWalkHighlandsUser = (userId: string) => {
    fetchData(setCompleted, userId)
  }

  if (loggedIn) {
    return <WalkHighlandsDetails />
  }

  return (
    <>
      <Banner />
      <Container maxWidth="xl" component="main" sx={{ marginTop: '1em' }}>
        <Typography variant="h4">Link your Walk Highlands data</Typography>
        <Typography color="inherit" sx={{ marginTop: '1em' }}>
          Your Walk Highlands Munro Map is publicly available and can be linked
          with this site to offer you a better experience.
        </Typography>

        <Typography color="inherit" sx={{ paddingTop: '1em' }}>
          Find the id by going to your 'Munro Map' on{' '}
          <Link href="https://www.walkhighlands.co.uk/munros/">
            Walk Highlands
          </Link>{' '}
          and taking the number off the end of the URL.
        </Typography>
        <Typography
          color="inherit"
          sx={{ paddingTop: '1em', marginBottom: '1em' }}
        >
          For example <em>182131</em> is the id for this URL:
        </Typography>

        <img
          src="/images/wh_url.png"
          alt="Example of the URL for the Walk Highlands Munro Map page"
        />

        <Grid container sx={{ paddingTop: '2em' }}>
          <TextField
            id="outlined-basic"
            label="WalkHighlands Id"
            variant="outlined"
            value={id}
            onChange={(e: any) => {
              setId(e.target.value)
            }}
          />
        </Grid>
        <Grid container sx={{ paddingTop: '0.5em' }}>
          <Button
            variant="contained"
            onClick={(e: any) => {
              fetchWalkHighlandsUser(id)
            }}
          >
            Link
          </Button>
        </Grid>
      </Container>
    </>
  )
}

const WalkHighlandsDetails = () => {
  const { completed, setCompleted } = React.useContext(WalkHighlandsContext)
  const [refreshing, setRefreshing] = React.useState(false)

  const lastRefresh = localStorage.getItem('lastRefresh')

  const fetchWalkHighlandsUser = (userId: string) => {
    fetchData(setCompleted, userId)
  }

  const refreshWalkHighlandsUser = () => {
    localStorage.removeItem('cached')
    const userId = localStorage.getItem('walkHighlandsId') || ''
    fetchWalkHighlandsUser(userId)
    setRefreshing(true)
  }

  const changeWalkHighlandsUser = () => {
    localStorage.removeItem('walkHighlandsId')
    setCompleted(INITIAL_STATE)
  }

  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        {refreshing && <Alert severity="info">Refreshing data!</Alert>}
        <Typography variant="h4">Linked to {completed?.name}</Typography>

        <Typography
          color="inherit"
          sx={{ paddingTop: '1em', paddingBottom: '1em' }}
        >
          From here you can refresh your Walk Highlands data or use a different
          user.
        </Typography>

        <Typography color="inherit">Last refreshed at {lastRefresh}</Typography>

        <Grid container>
          <Button
            variant="contained"
            onClick={(e: any) => {
              refreshWalkHighlandsUser()
            }}
          >
            Refresh data
          </Button>
        </Grid>

        <Grid container sx={{ paddingTop: '1.5em' }}>
          <Button
            variant="contained"
            onClick={(e: any) => {
              changeWalkHighlandsUser()
            }}
          >
            Change user
          </Button>
        </Grid>
      </Container>
    </>
  )
}

export default WalkHighlandsConnect
