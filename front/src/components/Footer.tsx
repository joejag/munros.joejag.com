import * as React from 'react'

import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Footer = ({}) => {
  return (
    <Typography
      align="center"
      color="text.secondary"
      sx={{
        marginTop: '1em',
        paddingTop: '1em',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Link color="inherit" href="mailto:joe@joejag.com?subject=WalkMunros">
        Got feedback?
      </Link>{' '}
      | Trip descriptions and photos are from WalkHighlands,{' '}
      <Link color="inherit" href="https://www.walkhighlands.co.uk/donate.shtml">
        donate to WalkHighlands
      </Link>
    </Typography>
  )
}

export default Footer
