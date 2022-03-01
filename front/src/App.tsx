import React from 'react'
import { MUNROS, MUNRO_GROUPING } from './munros'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import TripCard, { Trip } from './TripCard'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'

import IconButton from '@mui/material/IconButton'
import FolderIcon from '@mui/icons-material/Folder'
import Badge from '@mui/material/Badge'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { useHistory } from 'react-router-dom'

const App = () => {
  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ paddingBottom: '2em', paddingTop: '1em' }}
    >
      <Grid container spacing={4}>
        {MUNRO_GROUPING.map(({ area, groups }) => (
          <Grid item xs={3} key={area}>
            <Paper elevation={1}>
              <MunroAreaSummary area={area} groups={groups} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const MunroAreaSummary = ({ area, groups }: any) => {
  const areaTrips: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.area === area
  )
  const munroCount = areaTrips
    .map((t) => t.munros.length)
    .reduce((a, b) => a + b, 0)

  const easyMunros = areaTrips.filter((t) => t.grade === 3).length
  const mediumMunros = areaTrips.filter((t) => t.grade === 4).length
  const hardMunros = areaTrips.filter((t) => t.grade === 5).length

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={areaTrips[areaTrips.length - 1].image}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {area}
          <List>
            {groups.map((group: string) => (
              <MunroGroupSummary group={group} key={group} />
            ))}
          </List>
        </Typography>
        <CardActions>
          <Grid
            container
            rowSpacing={0}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={2}>
              <Item>
                <Badge badgeContent={areaTrips.length} color="primary">
                  <DirectionsWalkIcon fontSize="large" />
                </Badge>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Badge badgeContent={munroCount} color="primary">
                  <FilterHdrIcon fontSize="large" />
                </Badge>
              </Item>
            </Grid>
            <Grid item xs={2}>
              {easyMunros > 0 && (
                <Badge badgeContent={easyMunros} color="primary">
                  <Item sx={{ backgroundColor: '#2196f3' }}>E</Item>
                </Badge>
              )}
            </Grid>
            <Grid item xs={2}>
              {mediumMunros > 0 && (
                <Badge badgeContent={mediumMunros} color="primary">
                  <Item sx={{ backgroundColor: '#cddc39' }}>M</Item>
                </Badge>
              )}
            </Grid>
            <Grid item xs={2}>
              {hardMunros > 0 && (
                <Badge badgeContent={hardMunros} color="primary">
                  <Item sx={{ backgroundColor: '#f44336' }}>H</Item>
                </Badge>
              )}
            </Grid>
          </Grid>
        </CardActions>
      </CardContent>
    </Card>
  )
}

const Item = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'none',
}))

const MunroGroupSummary = ({ group }: any) => {
  const history = useHistory()

  const trips: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.group === group
  )

  return (
    <ListItem>
      <ListItemIcon sx={{ fontSize: 20 }}>{trips.length}</ListItemIcon>
      <ListItemButton component="a" href={`#${group}`}>
        <ListItemText primary={group} />
      </ListItemButton>
    </ListItem>
  )
}

export const MunroGroup = ({ group }: any) => {
  const munros: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.group === group
  )

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ paddingBottom: '2em', paddingTop: '1em' }}
    >
      <Typography variant="h4">
        {munros[0].location.steveFallon.area} <ArrowForwardIosIcon /> {group}
      </Typography>
      <Grid container spacing={4}>
        {munros.map((trip) => {
          return (
            <Grid item xs={3} key={trip.title}>
              <Paper elevation={1}>
                <TripCard trip={trip}></TripCard>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default App
