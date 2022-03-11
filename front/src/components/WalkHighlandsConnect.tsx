import React from 'react'

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import RefreshIcon from '@mui/icons-material/Refresh'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { fetchData } from '../biz/fetchData'
import Banner from './Banner'
import { INITIAL_STATE, WalkHighlandsContext } from './Context'

const WalkHighlandsConnect = () => {
  const { completed, setCompleted } = React.useContext(WalkHighlandsContext)
  const [id, setId] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const loggedIn =
    completed?.id !== '' &&
    completed?.name !== '' &&
    localStorage.getItem('walkHighlandsName')

  const fetchWalkHighlandsUser = (userId: string) => {
    fetchData(setCompleted, userId)
    setLoading(true)
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
          For example <em>joejag</em> is this site's authors id:
        </Typography>

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
    const userId = localStorage.getItem('walkHighlandsName') || ''
    setRefreshing(true)
    fetchWalkHighlandsUser(userId)
  }

  const changeWalkHighlandsUser = () => {
    localStorage.removeItem('walkHighlandsName')
    setCompleted(INITIAL_STATE)
  }

  const currentlyRefreshing =
    refreshing && localStorage.getItem('cached') === null

  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        {refreshing && !currentlyRefreshing && (
          <Alert severity="info" sx={{ marginBottom: '1em' }}>
            Refreshed data
          </Alert>
        )}
        <Typography variant="h4">Linked to {completed?.name}</Typography>

        <Typography
          color="inherit"
          sx={{ paddingTop: '1em', paddingBottom: '1em' }}
        >
          From here you can refresh your Walk Highlands data or use a different
          user.
        </Typography>

        <Typography color="inherit" sx={{ marginBottom: '1em' }}>
          Last refreshed at {lastRefresh}
        </Typography>

        <Grid container>
          <Button
            variant="contained"
            onClick={(e: any) => {
              refreshWalkHighlandsUser()
            }}
          >
            <RefreshIcon sx={{ paddingRight: '0.3em' }} />
            Refresh data
            {currentlyRefreshing && (
              <CircularProgress
                sx={{ marginLeft: '0.5em' }}
                color="inherit"
                size="1rem"
              />
            )}
          </Button>
        </Grid>

        <Grid container sx={{ paddingTop: '1.5em' }}>
          <Button
            variant="contained"
            onClick={(e: any) => {
              changeWalkHighlandsUser()
            }}
          >
            <ManageAccountsIcon sx={{ paddingRight: '0.3em' }} />
            Change user
          </Button>
        </Grid>

        <Typography sx={{ marginTop: '1em' }}>
          <Link href="/" color="inherit">
            Back to Trips
          </Link>
        </Typography>
      </Container>
    </>
  )
}

export default WalkHighlandsConnect
