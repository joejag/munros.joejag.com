import * as React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { MUNRO_GROUPING, MUNROS } from '../../biz/munros'
import Banner from '../Banner'
import { AllMunrosMap } from '../Maps'
import MunroAreaCard from '../MunroAreaCard'

export const AllMunros = () => {
  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <Typography>
          This site combines Steve Fallon's{' '}
          <Link href="https://www.stevenfallon.co.uk/munrosr.html">
            Munros by region
          </Link>{' '}
          with curated{' '}
          <Link href="https://www.walkhighlands.co.uk/munros/">
            Walk Highlands
          </Link>{' '}
          routes along with estimated driving times.
        </Typography>
        <Typography sx={{ marginTop: '1em', marginBottom: '1.6em' }}>
          It is highly recommend to <Link href="/walkhighlands">link</Link> your
          Walk Highlands munro map so you can see what Munros you've already
          bagged.
        </Typography>
        <AllMunrosMap trips={MUNROS} />
        <Grid container spacing={4}>
          {MUNRO_GROUPING.map(({ area, groups }) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={area}>
              <Paper elevation={1}>
                <MunroAreaCard area={area} groups={groups} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default AllMunros
