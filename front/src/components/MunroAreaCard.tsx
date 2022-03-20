import * as React from 'react'

import DriveEtaIcon from '@mui/icons-material/DriveEta'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import VideocamIcon from '@mui/icons-material/Videocam'
import Badge from '@mui/material/Badge'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { Area, Trip } from '../biz/types'
import { allContains, minutesToReadable, safeName } from '../biz/utils'
import { DISTANCES } from '../data/distances'
import { BEST_IMAGE_FOR_AREA, MUNROS, WEBCAMS } from '../data/munros'
import { WalkHighlandsContextV2 } from './Context'

const Grade = ({ grade, count }: { grade: number; count: number }) => {
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
          Number of WalkHiglands trips at grade {grade}
          <br />
          <br />
          <em>{details.description}</em>
        </div>
      }
    >
      <Badge badgeContent={count} color="primary">
        <Typography
          textAlign="center"
          color="white"
          sx={{
            backgroundColor: details.color,
            paddingTop: '0.3em',
            paddingBottom: '0.3em',
            paddingLeft: '0.3em',
            paddingRight: '0.3em',
            margin: 0,
          }}
        >
          G{grade}
        </Typography>
      </Badge>
    </Tooltip>
  )
}

const MunroAreaCard = ({ target }: { target: Area }) => {
  const { area, groups } = target
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
  const humanDriveTime = minutesToReadable(avgDriveTime)

  const coverImagePotential = areaTrips.filter(
    (at) => at.url === BEST_IMAGE_FOR_AREA[target.area]
  )
  const coverImage =
    coverImagePotential.length > 0 ? coverImagePotential[0].image : ''

  return (
    <Card>
      <CardActions sx={{ paddingTop: '1em' }}>
        <Grid container>
          <Grid item xs={10}>
            {easyMunros > 0 && <Grade grade={3} count={easyMunros} />}
            {mediumMunros > 0 && <Grade grade={4} count={mediumMunros} />}
            {hardMunros > 0 && <Grade grade={5} count={hardMunros} />}
          </Grid>
          <Grid item xs={2} textAlign="center">
            <Tooltip title="Munros in this area">
              <Badge badgeContent={munroCount} color="secondary">
                <FilterHdrIcon fontSize="large" />
              </Badge>
            </Tooltip>
          </Grid>
        </Grid>
      </CardActions>
      <Link href={`/munros/${safeName(area)}`} color="inherit" underline="none">
        <CardMedia
          component="img"
          height="140"
          image={`/images/${coverImage}`}
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
            <Link href="/preferences" color="inherit" underline="none">
              <Tooltip
                title={`Average time to drive from ${origin} to any of these trips. Click to change the start point`}
              >
                <Typography>
                  <DriveEtaIcon sx={{ verticalAlign: 'bottom' }} />{' '}
                  {humanDriveTime}
                </Typography>
              </Tooltip>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

const MunroGroupSummary = ({ area, group }: any) => {
  const { completed } = React.useContext(WalkHighlandsContextV2)

  const trips: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.group === group
  )

  const userMunros = completed.munrosCompleted || ([] as string[])
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

export default MunroAreaCard
