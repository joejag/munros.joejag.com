import * as React from 'react'

import Container from '@mui/material/Container'

import { groupsInArea, nameOfArea, tripsInArea, tripsInGroup } from '../../biz/findTrips'
import { urlAreaToHumanArea, urlGroupToHumanArea } from '../../biz/utils'
import {
    STEVE_FALLON_ALTERNATIVES_FOR_AREA, STEVE_FALLON_ALTERNATIVES_FOR_GROUP
} from '../../data/munros'
import Banner from '../Banner'
import Footer from '../Footer'
import { TripsList } from '../TripsList'

export const MunrosByArea = ({ area }: { area: string }) => {
  const munros = tripsInArea(urlAreaToHumanArea(area))

  const fallonArea =
    STEVE_FALLON_ALTERNATIVES_FOR_AREA[urlAreaToHumanArea(area)]
  const fallonGroup = groupsInArea(urlAreaToHumanArea(area))
    .map((group: string) => {
      return STEVE_FALLON_ALTERNATIVES_FOR_GROUP[urlGroupToHumanArea(group)]
    })
    .flat()
    .filter((e) => e != null)

  console.log('?', fallonGroup)

  return (
    <>
      <Banner area={area} />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <TripsList
          munros={munros}
          fallonArea={fallonArea}
          fallonGroup={fallonGroup}
        />
      </Container>
      <Footer />
    </>
  )
}

export const MunrosByGroup = ({ group }: { group: string }) => {
  const munros = tripsInGroup(urlGroupToHumanArea(group))

  const fallonArea =
    STEVE_FALLON_ALTERNATIVES_FOR_AREA[munros[0].location.steveFallon.area]
  const fallonGroup =
    STEVE_FALLON_ALTERNATIVES_FOR_GROUP[urlGroupToHumanArea(group)] || []

  return (
    <>
      <Banner area={nameOfArea(munros[0])} group={group} />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ paddingBottom: '2em', paddingTop: '1em' }}
      >
        <TripsList
          munros={munros}
          fallonArea={fallonArea}
          fallonGroup={fallonGroup}
        />
      </Container>
      <Footer />
    </>
  )
}
