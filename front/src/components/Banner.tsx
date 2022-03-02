import React from 'react'

import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import PersonIcon from '@mui/icons-material/Person'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'

import { WalkHighlandsContext } from './Context'

const Banner = ({ area, group }: { area?: string; group?: string }) => {
  const { completed } = React.useContext(WalkHighlandsContext)
  const loggedIn =
    completed?.id !== '' &&
    completed?.name !== '' &&
    localStorage.getItem('walkHighlandsId')

  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Grid container>
        <Grid
          item
          xs={9}
          textAlign="start"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {!area && !group && (
            <Typography variant="h4">
              <Link href="/#" color="inherit" underline="none">
                Munros
              </Link>
            </Typography>
          )}
          {area && !group && (
            <Typography variant="h4">
              <Link href="/#" color="inherit" underline="none">
                Munros
              </Link>{' '}
              <ArrowForwardIosIcon /> {area}
            </Typography>
          )}
          {area && group && (
            <Typography variant="h4">
              <Link href="/#" color="inherit" underline="none">
                Munros
              </Link>{' '}
              <ArrowForwardIosIcon />
              {area} <ArrowForwardIosIcon /> {group}
            </Typography>
          )}
        </Grid>
        <Grid item xs={3} textAlign="end">
          {!loggedIn && (
            <>
              <Typography variant="body1">
                <Link href="/#/walkhighlands" color="inherit">
                  Link to Walk Highlands
                </Link>
              </Typography>
            </>
          )}
          {loggedIn && (
            <>
              <Typography variant="body1">
                <Link href="/#/walkhighlands" color="inherit">
                  <PersonIcon />
                  {completed?.name}
                </Link>
              </Typography>
              <Typography variant="body1">
                <FilterHdrIcon /> {completed?.munros?.length}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Toolbar>
  )
}

export default Banner
