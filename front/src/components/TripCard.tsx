import React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Badge from '@mui/material/Badge'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FilterDramaIcon from '@mui/icons-material/FilterDrama'
import DriveEtaIcon from '@mui/icons-material/DriveEta'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Link from '@mui/material/Link'

import Item from './Item'
import { DISTANCES } from '../biz/distances'

import { useLocation } from 'react-router-dom'
import { safeName, minutesToReadable } from '../biz/utils'

export interface Trip {
  title: string
  weatherUrl: string
  desc: string
  image: string
  grade: number
  url: string
  rating: number
  munros: { name: string; uri: string; cords: { long: number; lat: number } }[]
  distance: number
  ascent: number
  time: any
  location: any
}

const Grade = ({ grade }: any) => {
  const styling: { [grade: number]: any } = {
    3: {
      color: '#2196f3',
      letter: 'E',
      description:
        'Moderate hillwalks. Terrain will be steep, map reading skills essential. This grade includes the most straightforward and popular Munros.',
    },
    4: {
      color: '#cddc39',
      letter: 'M',
      description:
        'Harder hillwalks. Can include longer walks and pathless sections calling for more careful navigation. There may be scree and minor scrambling. This grade is quite broad and includes the bulk of the Munros.',
    },
    5: {
      color: '#f44336',
      letter: 'H',
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
        sx={{
          backgroundColor: details.color,
          paddingTop: '0.5em',
          paddingBottom: '0.5em',
          paddingLeft: '0.1em',
          paddingRight: '0.1em',
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
            <Tooltip title="Estimate to complete this trip using Naismith's rule. Allow one hour for every 5km forward, plus an additional hour for every 600m of ascent">
              <Badge
                badgeContent={trip.time.naismith}
                color="secondary"
                sx={{ marginRight: '1em' }}
              >
                <AccessTimeIcon />
              </Badge>
            </Tooltip>
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
      <Link href={trip.url} target="_blank" rel="noreferrer">
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
            target="_blank"
            rel="noreferrer"
            color="inherit"
            underline="none"
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
              <Link href="/driving" color="inherit" underline="none">
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
