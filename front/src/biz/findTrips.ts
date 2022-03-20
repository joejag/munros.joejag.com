import { MUNRO_GROUPING, MUNROS } from '../data/munros'
import { Area, Trip } from './types'

export const isFarNorth = (trip: Trip) =>
  trip.location.steveFallon.area === 'Far North'

export const isOnSkyeOrGradeFive = (trip: Trip) =>
  !['Cuillin of Skye', 'Skye, Strathaird'].includes(
    trip.location.steveFallon.group
  ) && trip.grade !== 5

export const nameOfArea = (trip: Trip) => trip.location.steveFallon.area

export const tripsInArea = (area: string): Trip[] => {
  return Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.area === area
  )
}

export const tripsInGroup = (group: string): Trip[] => {
  return Object.values(MUNROS).filter(
    (m: Trip) => m.location.steveFallon.group === group
  )
}
