import * as React from 'react'
import { useLocation } from 'react-router-dom'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import Banner from '../Banner'
import DrivingPreferences from '../DrivingPreferences'
import Footer from '../Footer'
import WalkHighlandsConnect from '../WalkHighlandsConnect'

const Preferences = () => {
  const location = useLocation()
  const [focus, setFocus] = React.useState(false)
  const myRef = React.useRef<HTMLDivElement>(null)

  if (focus === false && location.hash === `#focus=driving`) {
    setFocus(true)
  }
  if (focus === true && location.hash !== `#focus=driving`) {
    setFocus(false)
  }
  React.useLayoutEffect(() => {
    if (focus) {
      myRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })

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
          <Grid item xs={12} sm={6} md={4} ref={myRef}>
            <DrivingPreferences
              elevation={focus ? 12 : 1}
              sx={
                focus
                  ? {
                      border: `3px solid gold`,
                    }
                  : {}
              }
            />
          </Grid>
        </Grid>

        <Typography sx={{ marginTop: '1em' }}>
          <Link href="/" color="inherit">
            Back to Trips
          </Link>
        </Typography>
      </Container>
      <Footer />
    </>
  )
}

export default Preferences
