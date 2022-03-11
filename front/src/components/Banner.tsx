import React from 'react'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import FilterHdrIcon from '@mui/icons-material/FilterHdr'
import PersonIcon from '@mui/icons-material/Person'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { safeName, urlAreaToHumanArea, urlGroupToHumanArea } from '../biz/utils'
import { WalkHighlandsContext } from './Context'

const Banner = ({ area, group }: { area?: string; group?: string }) => {
  const { completed } = React.useContext(WalkHighlandsContext)
  const loggedIn =
    completed?.id !== '' &&
    completed?.name !== '' &&
    localStorage.getItem('walkHighlandsName')

  const areaReadable = urlAreaToHumanArea(area)
  const groupReadable = urlGroupToHumanArea(group)

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
              <Link href="/" color="inherit" underline="none">
                Trips
              </Link>
            </Typography>
          )}
          {area && !group && (
            <Typography variant="h4">
              <Link href="/" color="inherit" underline="none">
                Trips
              </Link>{' '}
              <ArrowForwardIosIcon /> {areaReadable}
            </Typography>
          )}
          {area && group && (
            <Typography variant="h4">
              <Link href="/" color="inherit" underline="none">
                Trips
              </Link>{' '}
              <ArrowForwardIosIcon />
              <Link
                href={`/munros/${safeName(area)}`}
                color="inherit"
                underline="none"
              >
                {area}
              </Link>{' '}
              <ArrowForwardIosIcon /> {groupReadable}
            </Typography>
          )}
        </Grid>
        <Grid item xs={3} textAlign="end">
          {!loggedIn && (
            <>
              <Typography variant="body1">
                <Link href="/walkhighlands" color="inherit">
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
                  <Link href="/walkhighlands" color="inherit">
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
                  {completed?.munros?.length}
                  <FilterHdrIcon
                    sx={{ marginLeft: '0.1em', verticalAlign: 'bottom' }}
                  />{' '}
                </Typography>
              </Tooltip>
            </>
          )}
        </Grid>
      </Grid>
    </Toolbar>
  )
}

export default Banner
