import React from 'react'
import { MUNROS } from './munros'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import Badge from '@mui/material/Badge'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const munroOrder = [
  {
    area: 'Loch Lomond to Loch Tay',
    groups: [
      'Ben Lomond and Arrochar Alps',
      'Ben Lui group',
      'Crianlarich group',
      'Crieff and Loch Earn',
    ],
  },
  {
    area: 'Loch Tay to Rannoch Moor',
    groups: ['Glen Lochay', 'Above Orchy', 'Lawers', 'Glen Lyon'],
  },
  {
    area: 'Strath Orchy to Glencoe',
    groups: [
      'Cruachan',
      'East of Etive',
      'Black Mount',
      'Appin and West of Etive',
      'Glencoe',
    ],
  },
  {
    area: 'Loch Linnhe to Loch Ericht',
    groups: [
      'Mamores',
      'Ben Nevis & Aonachs',
      'Grey Corries',
      'Loch Treig & Ossian',
      'Ardverikie & Alder',
    ],
  },
  {
    area: 'Drumochter Hills',
    groups: ['West of Drumochter', 'East of Drumochter'],
  },
  {
    area: 'Glen Garry to Braemar',
    groups: ['Tarf & Tilt', "Beinn a' Ghlo", 'Above Glen Ey', 'Above Geldie'],
  },
  {
    area: 'Glenshee to Mount Keen',
    groups: ['Glenshee', 'Glen Doll Munros', 'Around Loch Muick'],
  },
  {
    area: 'Cairngorms and Glen Feshie',
    groups: [
      'East of Lairig an Laoigh',
      'East of Lairig Ghru',
      'West of Lairig Ghru',
      'Glen Feshie',
    ],
  },
  {
    area: 'Monadh Liath and Creag Meagaidh',
    groups: ['Monadh Liath', 'Creag Meagaidh & neighbours'],
  },
  {
    area: 'Loch Eil to Glen Shiel',
    groups: [
      'West of Loch Lochy',
      'Glenfinnan',
      'Glen Kingie',
      'Loch Chuaich (Quoich)',
      'Knoydart',
    ],
  },
  {
    area: 'Kintail and Glen Shiel',
    groups: [
      'Above Loch Hourn',
      'South Glen Shiel Ridge',
      'Above Loch Cluanie',
      'Kintail',
    ],
  },
  {
    area: 'Affric, Cannich and Strathfarrar',
    groups: ['Mullardoch circuit', 'Strathfarrar'],
  },
  {
    area: 'Glen Carron and Torridon',
    groups: ['Monar', 'Coulin', 'Beinn Alligin', 'Liathach', 'Beinn Eighe'],
  },
  {
    area: 'Loch Maree to the Fannichs',
    groups: ['Letterewe and Fisherfield', 'An Teallach', 'Fannaichs'],
  },
  {
    area: 'Far North',
    groups: [
      'Ben Wyvis',
      'Inverlael and Strath Vaich',
      'Assynt',
      'Strath Vagastie',
      'Strath More',
    ],
  },
  {
    area: 'The Islands',
    groups: ['Mull', 'Skye, Strathaird', 'Cuillin of Skye'],
  },
]

const App = () => {
  return munroOrder.map(({ area, groups }) => (
    <>
      <Typography variant="h3">{area}</Typography>
      {groups.map((group) => (
        <>
          <MunroGroup area={area} group={group} />
        </>
      ))}
    </>
  ))
}

const MunroGroup = ({ area, group }) => {
  const munros = Object.values(MUNROS).filter(
    (m: any) => m.location.steveFallon.group === group
  )

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ paddingBottom: '2em', paddingTop: '1em' }}
    >
      <Typography variant="h4">{group}</Typography>
      <Grid container spacing={4}>
        {munros.map((trip) => {
          return (
            <Grid item xs={3}>
              <Paper elevation={1}>
                <TripCard trip={trip} key={trip.title}></TripCard>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

interface Trip {
  title: string
  desc: string
  image: string
  grade: number
  url: string
  munros: any[]
  distance: number
  ascent: number
  time: any
}

const Item = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'none',
}))

const Grade = ({ grade }) => {
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

const TripCard: React.FC<{ trip: Trip }> = ({ trip }) => {
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
          {trip.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {trip.desc}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default App
