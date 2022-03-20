import * as React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { allAreas } from '../../biz/findTrips'
import { Area } from '../../biz/types'
import Banner from '../Banner'
import { AllMunrosMap } from '../Maps'
import MunroAreaCard from '../MunroAreaCard'

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
          paddingLeft: '1em',
          paddingRight: '1em',
          margin: 0,
        }}
      >
        Grade {grade}
      </Typography>
    </Tooltip>
  )
}

export const AllMunros = () => {
  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <Typography align="center">
          This site combines Steve Fallon's{' '}
          <Link href="https://www.stevenfallon.co.uk/munrosr.html">
            Munros by region
          </Link>{' '}
          with curated{' '}
          <Link href="https://www.walkhighlands.co.uk/munros/">
            Walk Highlands
          </Link>{' '}
          routes. To help you plan it has estimated driving times, weather and
          webcam links.
        </Typography>
        <Typography
          align="center"
          sx={{
            marginTop: '1em',
            paddingBottom: '1em',
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          It is highly recommend to <Link href="/preferences">link</Link> your
          Walk Highlands munro map so you can see what Munros you've already
          bagged.
        </Typography>
        <Typography
          sx={{
            marginTop: '1em',
            marginBottom: '1em',
          }}
        >
          The grading system used here is from WalkHighlands (which has easier
          non-Munro walks as Grade 1 and 2).
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: '2em' }}>
          <Grid
            item
            lg={1}
            xs={3}
            sx={{ display: 'flex', alignItems: 'center' }}
            alignContent={'end'}
          >
            <Grade grade={3} />
          </Grid>
          <Grid item xs={9} lg={11}>
            <Typography>
              Moderate hillwalks. Terrain will be steep, map reading skills
              essential. This grade includes the most straightforward and
              popular Munros.
            </Typography>
            <Typography>
              <em>examples: Ben Lomond, Schiehallion, Ben Chronzie</em>
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            lg={1}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Grade grade={4} />
          </Grid>
          <Grid item xs={9} lg={11}>
            <Typography>
              Harder hillwalks. Can include longer walks and pathless sections
              calling for more careful navigation. There may be scree and minor
              scrambling. This grade is quite broad and includes the bulk of the
              Munros.
            </Typography>
            <Typography>
              <em>examples: Cairn Gorm, Beinn Narnain, Buachaille Etive Mòr</em>
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            lg={1}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Grade grade={5} />
          </Grid>
          <Grid item xs={9} lg={11}>
            <Typography>
              Tough by hillwalking standards; these routes can be very arduous
              or include trickier scrambling. This grade includes the hardest or
              most strenuous Munros.
            </Typography>
            <Typography>
              <em>examples: An Teallach, Sgùrr Alasdair, Aonach Eagach</em>
            </Typography>
          </Grid>
        </Grid>
        <AllMunrosMap />
        <Grid container spacing={4}>
          {allAreas().map((area: Area) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={area.area}>
              <Paper elevation={1}>
                <MunroAreaCard target={area} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default AllMunros
