import React from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import L, { Marker as AMarker, icon } from 'leaflet'

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

import { WalkHighlandsContext } from './Context'
import { Trip } from './TripCard'

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

const MyMap = ({ trips }: { trips: Trip[] }) => {
  const { completed } = React.useContext(WalkHighlandsContext)

  const munrosWithCords: {
    name: string
    uri: string
    lat: number
    long: number
    done: boolean
  }[] = []

  trips.forEach((t: Trip) => {
    t.munros.forEach((m) => {
      if (m.cords !== undefined) {
        munrosWithCords.push({
          name: m.name,
          uri: m.uri,
          lat: m.cords.lat,
          long: m.cords.long,
          done: completed?.munros.includes(m.uri) || false,
        })
      }
    })
  })

  const mapCenter = averageGeolocation(munrosWithCords)

  return (
    <>
      {munrosWithCords.length > 0 && (
        <MapContainer
          center={[mapCenter.lat, mapCenter.long]}
          zoom={10}
          style={{ width: '100%', height: '400px', marginBottom: '2em' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {munrosWithCords.map((m) => (
            <Marker
              position={[m.lat, m.long]}
              key={m.uri}
              icon={m.done ? greenIcon : violetIcon}
            >
              <Popup>{m.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
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

export default MyMap
