import React from 'react'
import { MapContainer, Marker, TileLayer, Popup, Polygon } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import L, { Marker as AMarker, icon } from 'leaflet'

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

import { WalkHighlandsContext } from './Context'
import { Trip } from './TripCard'
import { allContains, safeName } from '../biz/utils'
import { MUNROS, MUNRO_GROUPING } from '../munros'

// Assign the imported image assets before you do anything with Leaflet.
AMarker.prototype.options.icon = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
})

var greenIcon = new L.Icon({
  iconUrl: '/images/maps/marker-icon-2x-green.png',
  shadowUrl: '/images/maps/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

var violetIcon = new L.Icon({
  iconUrl: '/images/maps/marker-icon-2x-violet.png',
  shadowUrl: '/images/maps/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const hasCompleted = (completed: any, trip: Trip) =>
  allContains(
    completed?.munros || ([] as string[]),
    trip.munros.map((m) => m.uri)
  )

const MyMap = ({ trips }: { trips: Trip[] }) => {
  const { completed } = React.useContext(WalkHighlandsContext)

  const munrosWithCords: {
    name: string
    tripName: string
    uri: string
    lat: number
    long: number
    done: boolean
  }[] = []

  const tripsCords: any = []

  trips.forEach((t: Trip) => {
    t.munros.forEach((m) => {
      if (m.cords !== undefined) {
        munrosWithCords.push({
          name: m.name,
          uri: m.uri,
          lat: m.cords.lat,
          long: m.cords.long,
          tripName: t.title,
          done: completed?.munros.includes(m.uri) || false,
        })
      }
    })

    const c = convexHull(t.munros.map((a) => a.cords))
    const c2 = c.map((element) => [element.lat, element.long])
    if (c2.length > 1) {
      tripsCords.push({
        cords: c2,
        color: hasCompleted(completed, t) ? 'green' : 'purple',
        name: t.url,
      })
    }
  })

  const mapCenter = averageGeolocation(munrosWithCords)

  return (
    <>
      {munrosWithCords.length > 0 && (
        <MapContainer
          center={[mapCenter.lat, mapCenter.long]}
          zoom={10}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '400px', marginBottom: '2em' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {tripsCords.map((tc: any) => (
            <Polygon
              positions={tc.cords}
              smoothFactor={1}
              key={tc.name}
              color={tc.color}
            />
          ))}

          {munrosWithCords.map((m) => (
            <Marker
              position={[m.lat, m.long]}
              key={m.uri}
              icon={m.done ? greenIcon : violetIcon}
            >
              <Popup>
                <strong>{m.name}</strong> <br /> on <em>{m.tripName}</em>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
  )
}

export const AreasMap = ({ trips }: { trips: Trip[] }) => {
  const polys = MUNRO_GROUPING.map(({ area, groups }) => {
    const trips: Trip[] = Object.values(MUNROS).filter(
      (m: Trip) => m.location.steveFallon.area === area
    )
    const munroCords = trips.map((t) => t.munros.map((m) => m.cords)).flat()
    const c = convexHull(munroCords)
    return {
      title: area,
      cords: c.map((element) => [element.lat, element.long]),
    }
  })
  return (
    <MapContainer
      center={[56.828447, -4.297792]}
      zoom={7}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '400px', marginBottom: '2em' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {polys.map((tc: any) => (
        <Polygon positions={tc.cords} smoothFactor={1} key={tc.title}>
          <Popup>
            <strong>{tc.title}</strong>
            <br />
            <a href={`/munros/${safeName(tc.title)}`}>See Trips</a>
          </Popup>
        </Polygon>
      ))}
    </MapContainer>
  )
}

function averageGeolocation(coords: { lat: number; long: number }[]) {
  if (coords.length === 1) {
    return coords[0]
  }

  let x = 0.0
  let y = 0.0
  let z = 0.0

  for (let coord of coords) {
    let latitude = (coord.lat * Math.PI) / 180
    let longitude = (coord.long * Math.PI) / 180

    x += Math.cos(latitude) * Math.cos(longitude)
    y += Math.cos(latitude) * Math.sin(longitude)
    z += Math.sin(latitude)
  }

  let total = coords.length

  x = x / total
  y = y / total
  z = z / total

  let centralLongitude = Math.atan2(y, x)
  let centralSquareRoot = Math.sqrt(x * x + y * y)
  let centralLatitude = Math.atan2(z, centralSquareRoot)

  return {
    lat: (centralLatitude * 180) / Math.PI,
    long: (centralLongitude * 180) / Math.PI,
  }
}

function convexHull(points: any) {
  points.sort(function (a: any, b: any) {
    return a.lat !== b.lat ? a.lat - b.lat : a.long - b.long
  })

  var n = points.length
  var hull = []

  for (var i = 0; i < 2 * n; i++) {
    var j = i < n ? i : 2 * n - 1 - i
    while (
      hull.length >= 2 &&
      removeMiddle(hull[hull.length - 2], hull[hull.length - 1], points[j])
    )
      hull.pop()
    hull.push(points[j])
  }

  hull.pop()
  return hull
}

function removeMiddle(a: any, b: any, c: any) {
  var cross =
    (a.lat - b.lat) * (c.long - b.long) - (a.long - b.long) * (c.lat - b.lat)
  var dot =
    (a.lat - b.lat) * (c.lat - b.lat) + (a.long - b.long) * (c.long - b.long)
  return cross < 0 || (cross === 0 && dot <= 0)
}

export default MyMap
