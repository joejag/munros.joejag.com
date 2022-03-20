import * as React from 'react'

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import RefreshIcon from '@mui/icons-material/Refresh'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { fetchData } from '../../biz/fetchData'
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
      {failed && (
        <Alert severity="error" sx={{ marginBottom: '1em' }}>
          {failed}
        </Alert>
      )}
      <Card>
        <CardMedia
          component="img"
          alt="Walk Highlands logo"
          height="207"
          image="/images/preferences/walkhighlands.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Link your Walk Highlands data
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your Walk Highlands Munro Map is publicly available and can be
            linked with this site to offer you a better experience.
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
            <Button
              variant="contained"
              onClick={(e: any) => {
                fetchWalkHighlandsUser(id)
              }}
              sx={{ marginLeft: '2em' }}
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
        </CardContent>
      </Card>
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
      <Card>
        <CardMedia
          component="img"
          alt="Walk Highlands logo"
          height="207"
          image="/images/preferences/walkhighlands.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Linked to {completed.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Refresh your Walk Highlands data or use a different user.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
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
          <Button
            size="small"
            onClick={(e: any) => {
              changeWalkHighlandsUser()
            }}
          >
            <ManageAccountsIcon sx={{ paddingRight: '0.3em' }} />
            Change user
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default WalkHighlandsConnect
