import { MUNROS, STEVE_FALLON_MUNRO_GROUPING } from '../data/munros'
import { Area, Trip } from './types'

const currentScheme = 'steveFallon'

export const isFarNorth = (trip: Trip) =>
  trip.location.steveFallon.area === 'Far North'

export const isOnSkyeOrGradeFive = (trip: Trip) =>
  trip.grade === 5 ||
  ['Cuillin of Skye', 'Skye, Strathaird'].includes(
    trip.location.steveFallon.group
  )

export const nameOfArea = (trip: Trip) => trip.location[currentScheme].area

export const allAreas = (): Area[] => STEVE_FALLON_MUNRO_GROUPING

export const tripsInArea = (area: string): Trip[] =>
  MUNROS.filter((m: Trip) => m.location[currentScheme].area === area)

export const tripsInGroup = (group: string): Trip[] =>
  MUNROS.filter((m: Trip) => m.location[currentScheme].group === group)

export const groupsInArea = (area: string): string[] =>
  Array.from(
    new Set(
      MUNROS.filter((m: Trip) => m.location[currentScheme].area === area).map(
        (t: Trip) => t.location.steveFallon.group
      )
    )
  )
