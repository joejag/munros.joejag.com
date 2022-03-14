import * as React from 'react'

import Container from '@mui/material/Container'

import { Trip } from '../../biz/types'
import { safeName } from '../../biz/utils'
import { MUNROS } from '../../data/munros'
import Banner from '../Banner'
import { TripsList } from '../TripsList'

export const MunrosByArea = ({ area }: { area: string }) => {
  const munros: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => safeName(m.location.steveFallon.area) === area
  )

  return (
    <>
      <Banner area={area} />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <TripsList munros={munros} />
      </Container>
    </>
  )
}

export const MunrosByGroup = ({ group }: { group: string }) => {
  const munros: Trip[] = Object.values(MUNROS).filter(
    (m: Trip) => safeName(m.location.steveFallon.group) === group
  )

  return (
    <>
      <Banner area={munros[0].location.steveFallon.area} group={group} />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <TripsList munros={munros} />
      </Container>
    </>
  )
}
