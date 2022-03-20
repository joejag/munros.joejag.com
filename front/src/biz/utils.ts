import { allAreas } from './findTrips'
import { Area, Trip } from './types'

export const allContains = (arr: string[], target: string[]) =>
  target.every((v: any) => arr.includes(v))

export const safeName = (a: string) =>
  a.replace(/[^a-z0-9]/gi, '_').toLowerCase()

export const urlAreaToHumanArea = (area: string): string => {
  if (area) {
    const p = allAreas().find((mg: Area) => safeName(mg.area) === area)
    if (p) {
      return p.area
    }
  }
  return area
}

export const urlGroupToHumanArea = (group: string) => {
  let result = group
  allAreas().forEach(({ groups }) => {
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
    completed || ([] as string[]),
    trip.munros.map((m) => m.uri)
  )

export const hoursSince = (date: Date) => {
  const diff = Math.abs(date.getTime() - new Date().getTime())
  return Math.ceil(diff / (1000 * 3600))
}
