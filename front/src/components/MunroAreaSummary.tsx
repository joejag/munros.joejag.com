import React from 'react'
import { MUNROS } from '../munros'

import Grid from '@mui/material/Grid'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import { Trip } from './TripCard'
import Item from './Item'

import Badge from '@mui/material/Badge'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import VideocamIcon from '@mui/icons-material/Videocam'
import Tooltip from '@mui/material/Tooltip'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import ListItemButton from '@mui/material/ListItemButton'

import { WalkHighlandsContext } from './Context'
import { DISTANCES } from '../biz/distances'
import { allContains, safeName } from '../biz/utils'
import { WEBCAMS } from '../munros'

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

  const origin: string = localStorage.getItem('drivingOrigin') || 'Glasgow'
  const driveTimes = areaTrips.map((t) => DISTANCES[origin][t.url].seconds / 60)
  const sum = driveTimes.reduce((a, b) => a + b, 0)
  const avgDriveTime = Math.round(sum / driveTimes.length || 0)

  return (
    <Card>
      <CardActions sx={{ paddingTop: '1em' }}>
        <Grid container>
          <Grid item xs={6}>
            {easyMunros > 0 && (
              <Tooltip title="Number of Munros rated as Grade 3/5 by Walk Highlands in this area">
                <Badge badgeContent={easyMunros} color="primary">
                  <Item sx={{ backgroundColor: '#2196f3' }}>G3</Item>
                </Badge>
              </Tooltip>
            )}
            {mediumMunros > 0 && (
              <Tooltip title="Number of Munros rated as Grade 4/5 by Walk Highlands in this area">
                <Badge badgeContent={mediumMunros} color="primary">
                  <Item sx={{ backgroundColor: '#cddc39' }}>G4</Item>
                </Badge>
              </Tooltip>
            )}
            {hardMunros > 0 && (
              <Tooltip title="Number of Munros rated as Grade 5/5 by Walk Highlands in this area">
                <Badge badgeContent={hardMunros} color="primary">
                  <Item sx={{ backgroundColor: '#f44336' }}>G5</Item>
                </Badge>
              </Tooltip>
            )}
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Item>
              <Tooltip title="Munros in this area">
                <Badge badgeContent={munroCount} color="secondary">
                  <FilterHdrIcon fontSize="large" />
                </Badge>
              </Tooltip>
            </Item>
          </Grid>
        </Grid>
      </CardActions>
      <Link href={`/munros/${safeName(area)}`} color="inherit" underline="none">
        <CardMedia
          component="img"
          height="140"
          image={`/images/${areaTrips[areaTrips.length - 1].image}`}
        />
      </Link>
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          <Link
            href={`/munros/${safeName(area)}`}
            color="inherit"
            underline="none"
          >
            {area}
          </Link>
          <List>
            {groups.map((group: string) => (
              <MunroGroupSummary area={area} group={group} key={group} />
            ))}
          </List>
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container>
          <Grid item xs={6} textAlign="start">
            <Link href="/driving" color="inherit" underline="none">
              <Tooltip
                title={`Average time to drive from ${origin} to any of these trips. Click to change the start point`}
              >
                <Badge
                  badgeContent={`${avgDriveTime}m`}
                  color="secondary"
                  max={999}
                >
                  <DriveEtaIcon />
                </Badge>
              </Tooltip>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

const MunroGroupSummary = ({ area, group }: any) => {
  const { completed } = React.useContext(WalkHighlandsContext)

  const trips: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.group === group
  )

  const userMunros = completed?.munros || ([] as string[])
  const tripsCompleted = trips.filter((t) =>
    allContains(
      userMunros,
      t.munros.map((m) => m.uri)
    )
  ).length

  const webcam = WEBCAMS[group]

  return (
    <ListItem
      disablePadding
      secondaryAction={
        webcam && (
          <Tooltip title={webcam.description}>
            <Link
              href={webcam.url}
              color="inherit"
              underline="none"
              target="_blank"
            >
              <VideocamIcon sx={{ verticalAlign: 'text-bottom' }}>
                {webcam.description}
              </VideocamIcon>
            </Link>
          </Tooltip>
        )
      }
    >
      <Tooltip title={`Trips you've completed in this area`}>
        <ListItemIcon sx={{ fontSize: 20, minWidth: 0 }}>
          {tripsCompleted}/{trips.length}
        </ListItemIcon>
      </Tooltip>
      <ListItemButton
        component="a"
        href={`/munros/${safeName(area)}/${safeName(group)}`}
      >
        <ListItemText primary={group} />
      </ListItemButton>
    </ListItem>
  )
}

export default MunroAreaSummary
