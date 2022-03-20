import * as React from 'react'

import Container from '@mui/material/Container'

import { nameOfArea, tripsInArea, tripsInGroup } from '../../biz/findTrips'
import { urlAreaToHumanArea, urlGroupToHumanArea } from '../../biz/utils'
import Banner from '../Banner'
import { TripsList } from '../TripsList'

export const MunrosByArea = ({ area }: { area: string }) => {
  const munros = tripsInArea(urlAreaToHumanArea(area))

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
  const munros = tripsInGroup(urlGroupToHumanArea(group))

  return (
    <>
      <Banner area={nameOfArea(munros[0])} group={group} />
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
