import * as React from 'react'

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

import { fetchData } from '../../biz/fetchData'
import Banner from '../Banner'
import {
    BLANK_STATE, dbClearMulti, dbSaveMulti, dbUpdateMulti, WalkHighlandsContextV2
} from '../Context'

const WalkHighlandsConnect = () => {
  const { completed, setCompleted } = React.useContext(WalkHighlandsContextV2)
  const [id, setId] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [failed, setFailed] = React.useState<string | null>(null)

  const loggedIn = completed.name !== null

  const fetchWalkHighlandsUser = (userId: string) => {
    setLoading(true)
    fetchData(
      (res: any) => {
        const saveMe = {
          ...completed,
          munrosCompleted: res.munros,
          name: res.name,
        }
        dbUpdateMulti(saveMe)
        setLoading(false)
        setFailed(null)
        setCompleted(saveMe)
      },
      userId,
      () => {
        setFailed(`Could not fetch data for '${id}' on WalkHighlands`)
        setLoading(false)
      }
    )
  }

  if (loggedIn) {
    return <WalkHighlandsDetails />
  }

  return (
    <>
      <Banner />
      <Container maxWidth="xl" component="main" sx={{ marginTop: '1em' }}>
        {failed && (
          <Alert severity="error" sx={{ marginBottom: '1em' }}>
            {failed}
          </Alert>
        )}
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
              setId(e.target.value.toLowerCase())
            }}
            onKeyUp={(event: any) => {
              if (event.key === 'Enter') fetchWalkHighlandsUser(id)
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
  const { completed, setCompleted } = React.useContext(WalkHighlandsContextV2)
  const [refreshing, setRefreshing] = React.useState(false)
  const [refreshed, setRefreshed] = React.useState(false)
  const [failed, setFailed] = React.useState(false)

  const refreshWalkHighlandsUser = () => {
    dbClearMulti()
    setRefreshing(true)
    fetchData(
      (result: any) => {
        const saveMe = {
          ...completed,
          munrosCompleted: result.munros,
          name: result.name,
        }
        dbUpdateMulti(saveMe)
        setRefreshing(false)
        setRefreshed(true)
        setFailed(false)
        setCompleted(saveMe)
      },
      completed.name,
      () => {
        setFailed(true)
      }
    )
  }

  const changeWalkHighlandsUser = () => {
    dbSaveMulti(BLANK_STATE)
    setCompleted(BLANK_STATE)
  }

  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        {refreshed && (
          <Alert severity="info" sx={{ marginBottom: '1em' }}>
            Refreshed data
          </Alert>
        )}
        {failed && (
          <Alert severity="error" sx={{ marginBottom: '1em' }}>
            Could not refresh data for {completed.name}
          </Alert>
        )}
        <Typography variant="h4">Linked to {completed.name}</Typography>

        <Typography
          color="inherit"
          sx={{ paddingTop: '1em', paddingBottom: '1em' }}
        >
          From here you can refresh your Walk Highlands data or use a different
          user.
        </Typography>

        <Typography color="inherit" sx={{ marginBottom: '1em' }}>
          Last refreshed at{' '}
          {new Date(completed.lastRefresh).toLocaleString('en-GB')}
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
            {refreshing && (
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
