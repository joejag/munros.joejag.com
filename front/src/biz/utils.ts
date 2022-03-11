import { MUNRO_GROUPING } from './munros'
import { Area, Trip } from './types'

export const allContains = (arr: any, target: any) =>
  target.every((v: any) => arr.includes(v))

export const safeName = (a: string) =>
  a.replace(/[^a-z0-9]/gi, '_').toLowerCase()

export const urlAreaToHumanArea = (area?: string) => {
  if (area) {
    const p = MUNRO_GROUPING.find((mg: Area) => safeName(mg.area) === area)
    if (p) {
      return p.area
    }
  }
  return area
}

export const urlGroupToHumanArea = (group?: string) => {
  let result = group
  MUNRO_GROUPING.forEach(({ groups }) => {
    groups.forEach((g) => {
      if (safeName(g) === group) {
        result = g
        return
      }
    })
  })
  return result
}

export const minutesToReadable = (mins: number) => {
  const hours = Math.floor(mins / 60)
  const minutes = mins % 60
  return (hours > 0 ? `${hours}h ` : '') + `${minutes}m`
}

export const hasCompletedAll = (completed: any, trip: Trip) =>
  allContains(
    completed?.munros || ([] as string[]),
    trip.munros.map((m) => m.uri)
  )
