import React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Badge from '@mui/material/Badge'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DoneIcon from '@mui/icons-material/Done'
import HikingIcon from '@mui/icons-material/Hiking'
import DriveEtaIcon from '@mui/icons-material/DriveEta'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import Link from '@mui/material/Link'

import Item from './Item'
import { WalkHighlandsContext } from './Context'
import { FROM_GLASGOW } from '../biz/distances'

export interface Trip {
  title: string
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
  if (grade === 3) {
    return <Item sx={{ backgroundColor: '#2196f3' }}>E</Item>
  }
  if (grade === 4) {
    return <Item sx={{ backgroundColor: '#cddc39' }}>M</Item>
  }
  if (grade === 5) {
    return <Item sx={{ backgroundColor: '#f44336' }}>H</Item>
  }
  return <Item>{grade}</Item>
}

const allContains = (arr: any, target: any) =>
  target.every((v: any) => arr.includes(v))

const TripCard = ({ trip }: { trip: Trip }) => {
  const { completed } = React.useContext(WalkHighlandsContext)

  const hasCompleted = allContains(
    completed?.munros || ([] as string[]),
    trip.munros.map((m) => m.uri)
  )

  const driveTime = Math.round(FROM_GLASGOW[trip.url].seconds / 60)

  return (
    <Card>
      <CardActions sx={{ paddingTop: '1em' }}>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <Item>
              <Badge badgeContent={trip.munros.length} color="primary">
                <FilterHdrIcon />
              </Badge>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>{trip.distance}k</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>{trip.ascent}m </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Badge badgeContent={trip.time.naismith} color="secondary">
                <AccessTimeIcon />
              </Badge>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Grade grade={trip.grade}></Grade>
          </Grid>
        </Grid>
      </CardActions>
      <CardMedia component="img" height="140" image={`/images/${trip.image}`} />
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
            <Badge badgeContent={`${driveTime}m`} color="secondary" max={999}>
              <DriveEtaIcon />
            </Badge>
          </Grid>
          <Grid item xs={6} textAlign="end">
            <Item>
              {hasCompleted && <DoneIcon color="success" />}
              {!hasCompleted && <HikingIcon color="info" />}
            </Item>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default TripCard
