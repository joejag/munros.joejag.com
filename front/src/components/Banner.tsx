import * as React from 'react'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import PersonIcon from '@mui/icons-material/Person'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { safeName, urlAreaToHumanArea, urlGroupToHumanArea } from '../biz/utils'
import { WalkHighlandsContextV2 } from './Context'

const Banner = ({ area, group }: { area?: string; group?: string }) => {
  const { completed } = React.useContext(WalkHighlandsContextV2)
  const loggedIn = completed.name !== null

  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Grid container>
        <Grid
          item
          xs={8}
          textAlign="start"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {!area && !group && (
            <Typography variant="h4">
              <Link href="/" color="inherit" underline="none">
                WalkMunros
              </Link>
            </Typography>
          )}
          {area && !group && (
            <Typography variant="h4">
              <Link href="/" color="inherit" underline="none">
                WalkMunros
              </Link>{' '}
              <ArrowForwardIosIcon /> {urlAreaToHumanArea(area)}
            </Typography>
          )}
          {area && group && (
            <Typography variant="h4">
              <Link href="/" color="inherit" underline="none">
                WalkMunros
              </Link>{' '}
              <ArrowForwardIosIcon />{' '}
              <Link
                href={`/munros/${safeName(area)}`}
                color="inherit"
                underline="none"
              >
                {area}
              </Link>{' '}
              <ArrowForwardIosIcon /> {urlGroupToHumanArea(group)}
            </Typography>
          )}
        </Grid>
        <Grid item xs={4} textAlign="end">
          {!loggedIn && (
            <>
              <Typography variant="body1">
                <Link href="/preferences" color="inherit">
                  Link to Walk Highlands
                </Link>
              </Typography>
            </>
          )}
          {loggedIn && (
            <>
              <Typography variant="body1" alignContent="center">
                <Tooltip
                  title={`Click to change your linked Walk Highlands account`}
                >
                  <Link href="/preferences" color="inherit">
                    {completed?.name}
                    <PersonIcon
                      sx={{ marginLeft: '0.1em', verticalAlign: 'bottom' }}
                    />
                  </Link>
                </Tooltip>
              </Typography>
              <Tooltip
                title={`Number of Munros you've completed. You can refresh if this number is wrong`}
              >
                <Typography variant="body1">
                  {completed.munrosCompleted.length}
                  <FilterHdrIcon
                    sx={{ marginLeft: '0.1em', verticalAlign: 'bottom' }}
                  />{' '}
                </Typography>
              </Tooltip>
              <Typography variant="body1" sx={{ marginTop: '0.5em' }}>
                <Link href="/plan" color="inherit">
                  Plan a trip with a friend
                  <PersonAddIcon
                    sx={{ marginLeft: '0.1em', verticalAlign: 'bottom' }}
                  />
                </Link>
              </Typography>
            </>
          )}
        </Grid>
      </Grid>
    </Toolbar>
  )
}

export default Banner
