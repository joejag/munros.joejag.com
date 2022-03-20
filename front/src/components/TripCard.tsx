import * as React from 'react'
import { useLocation } from 'react-router-dom'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import FilterDramaIcon from '@mui/icons-material/FilterDrama'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import Badge from '@mui/material/Badge'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { isOnSkyeOrGradeFive } from '../biz/findTrips'
import { Trip } from '../biz/types'
import { minutesToReadable, safeName } from '../biz/utils'
import { DISTANCES } from '../data/distances'

const Grade = ({ grade }: { grade: number }) => {
  const styling: { [grade: number]: { color: string; description: string } } = {
    3: {
      color: '#2A81CB',
      description:
        'Moderate hillwalks. Terrain will be steep, map reading skills essential. This grade includes the most straightforward and popular Munros.',
    },
    4: {
      color: '#2AAD27',
      description:
        'Harder hillwalks. Can include longer walks and pathless sections calling for more careful navigation. There may be scree and minor scrambling. This grade is quite broad and includes the bulk of the Munros.',
    },
    5: {
      color: '#CB2B3E',
      description:
        'Tough by hillwalking standards; these routes can be very arduous or include trickier scrambling. This grade includes the hardest or most strenuous Munros.',
    },
  }
  const details = styling[grade]

  return (
    <Tooltip
      title={
        <div>
          WalkHiglands grade for this trip is {grade}
          <br />
          <br />
          <em>{details.description}</em>
        </div>
      }
    >
      <Typography
        textAlign="center"
        color="white"
        sx={{
          backgroundColor: details.color,
          paddingTop: '0.5em',
          paddingBottom: '0.5em',
          paddingLeft: '0.1em',
          paddingRight: '0.1em',
          fontSize: '0.9em',
          margin: 0,
        }}
      >
        Grade {grade}
      </Typography>
    </Tooltip>
  )
}

const TripCard = ({ trip, completed }: { trip: Trip; completed: boolean }) => {
  const myRef = React.useRef<HTMLDivElement>(null)
  const [focus, setFocus] = React.useState(false)
  const location = useLocation()

  if (focus === false && location.hash === `#trip=${safeName(trip.title)}`) {
    setFocus(true)
  }
  if (focus === true && location.hash !== `#trip=${safeName(trip.title)}`) {
    setFocus(false)
  }

  React.useLayoutEffect(() => {
    if (focus) {
      myRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
  const borderColor = completed ? 'forestgreen' : 'darkorchid'

  const origin: string = localStorage.getItem('drivingOrigin') || 'Glasgow'
  const driveTime = Math.round(DISTANCES[origin][trip.url].seconds / 60)
  const humanDriveTime = minutesToReadable(driveTime)

  const showNaismith = !isOnSkyeOrGradeFive(trip)

  return (
    <Card
      ref={myRef}
      elevation={focus ? 12 : 1}
      sx={
        focus
          ? {
              border: `3px solid ${borderColor}`,
            }
          : {}
      }
    >
      <CardActions>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4} textAlign="left">
            <Grade grade={trip.grade} />
          </Grid>
          <Grid item xs={4} textAlign="left" sx={{ paddingTop: '0.5em' }}>
            <Typography>
              <Tooltip title="Kilometers on this trip">
                <span>{trip.distance}k</span>
              </Tooltip>
              &nbsp;&amp;&nbsp;
              <Tooltip title="Ascent on this trip">
                <span>{trip.ascent}m</span>
              </Tooltip>
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign="right" sx={{ paddingTop: '0.5em' }}>
            {showNaismith && (
              <Tooltip title="Estimate to complete this trip using Naismith's rule. Allow one hour for every 5km forward, plus an additional hour for every 600m of ascent">
                <Badge
                  badgeContent={trip.time.naismith}
                  color="secondary"
                  sx={{ marginRight: '1em' }}
                >
                  <AccessTimeIcon />
                </Badge>
              </Tooltip>
            )}
            {!showNaismith && (
              <Tooltip title="Naismith's rule does not apply here, this is the WalkHighlands estimate instead">
                <Badge
                  badgeContent={trip.time.walkHighlands.split('-')[0]}
                  color="secondary"
                  sx={{ marginRight: '1em' }}
                >
                  <AccessTimeFilledIcon
                    sx={{
                      margin: '0',
                      padding: '0',
                    }}
                  />
                </Badge>
              </Tooltip>
            )}
            <Tooltip
              title={
                <div>
                  Munros on this trip:
                  <ul
                    style={{
                      padding: '0',
                      paddingLeft: '1em',
                      margin: '0',
                      marginTop: '1em',
                    }}
                  >
                    {trip.munros.map((m) => (
                      <li key={m.uri}>{m.name}</li>
                    ))}
                  </ul>
                </div>
              }
            >
              <Badge
                badgeContent={trip.munros.length}
                color="primary"
                sx={{ marginRight: '0.3em' }}
              >
                <FilterHdrIcon />
              </Badge>
            </Tooltip>
          </Grid>
        </Grid>
      </CardActions>
      <Link href={trip.url} rel="noreferrer" target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={`/images/${trip.image}`}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link
            href={trip.url}
            rel="noreferrer"
            color="inherit"
            underline="none"
            target="_blank"
          >
            {trip.title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {trip.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container>
          <Grid item xs={6} textAlign="start">
            <Tooltip
              title={`Time to drive from ${origin}. Click to change the start point`}
            >
              <Link href="/preferences" color="inherit" underline="none">
                <Typography>
                  <DriveEtaIcon sx={{ verticalAlign: 'bottom' }} />{' '}
                  {humanDriveTime}
                </Typography>
              </Link>
            </Tooltip>
          </Grid>
          {trip.weatherUrl && (
            <Grid item xs={6} textAlign="right">
              <Tooltip title={`See the weather forecast for this trip`}>
                <Link
                  href={trip.weatherUrl}
                  color="inherit"
                  underline="none"
                  target="_blank"
                >
                  <FilterDramaIcon />
                </Link>
              </Tooltip>
            </Grid>
          )}
        </Grid>
      </CardActions>
    </Card>
  )
}

export default TripCard
