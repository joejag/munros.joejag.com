import React from 'react'

import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Badge from '@mui/material/Badge'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import Link from '@mui/material/Link'

import Item from './Item'

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

const TripCard = ({ trip }: { trip: Trip }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActions>
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
      <CardMedia component="img" height="140" image={trip.image} />
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
    </Card>
  )
}

export default TripCard
