import * as React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import Banner from '../Banner'
import DrivingPreferences from '../DrivingPreferences'
import WalkHighlandsConnect from './WalkHighlandsConnect'

const Preferences = () => {
  return (
    <>
      <Banner />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <WalkHighlandsConnect />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DrivingPreferences />
          </Grid>
        </Grid>

        <Typography sx={{ marginTop: '1em' }}>
          <Link href="/" color="inherit">
            Back to Trips
          </Link>
        </Typography>
      </Container>
    </>
  )
}

export default Preferences
