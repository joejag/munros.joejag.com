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

export interface Trip {
  title: string
  weatherUrl: string
  desc: string
  image: string
  grade: number
  url: string
  munros: any[]
  distance: number
  ascent: number
  time: any
  location: any
}

const Grade = ({ grade }: any) => {
  const styling: { [grade: number]: any } = {
    3: { color: '#2196f3', letter: 'E' },
    4: { color: '#cddc39', letter: 'M' },
    5: { color: '#f44336', letter: 'H' },
  }
  const details = styling[grade]

  return (
    <Tooltip title={`WalkHiglands grade for this trip is ${grade}/5`}>
      <Item sx={{ backgroundColor: details.color }}>{details.letter}</Item>
    </Tooltip>
  )
}

const TripCard = ({ trip }: { trip: Trip }) => {
  const origin: string = localStorage.getItem('drivingOrigin') || 'Glasgow'
  const driveTime = Math.round(DISTANCES[origin][trip.url].seconds / 60)

  return (
    <Card>
      <CardActions sx={{ paddingTop: '1em' }}>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={1}>
            <Grade grade={trip.grade} />
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Typography>
              <Tooltip title="Kilometers on this trip">
                <span>{trip.distance}km</span>
              </Tooltip>
              &nbsp;&amp;&nbsp;
              <Tooltip title="Ascent on this trip">
                <span>{trip.ascent}m</span>
              </Tooltip>
            </Typography>
          </Grid>
          <Grid item xs={5} textAlign="right">
            <Tooltip title="Estimate to complete this trip using Naismith's rule. Allow one hour for every 5km forward, plus an additional hour for every 600m of ascent">
              <Badge
                badgeContent={trip.time.naismith}
                color="secondary"
                sx={{ marginRight: '1em' }}
              >
                <AccessTimeIcon />
              </Badge>
            </Tooltip>
            <Tooltip title="Number of Munros on this trip">
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
                <Badge
                  badgeContent={`${driveTime}m`}
                  color="secondary"
                  max={999}
                >
                  <DriveEtaIcon />
                </Badge>
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
