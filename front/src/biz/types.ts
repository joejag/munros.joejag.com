export interface WalkHiglandsMunroData {
  name: string
  lastRefresh: Date
  munrosCompleted: string[]
  buddy: { name: string; lastRefresh: Date; munrosCompleted: string[] }
}

export interface MultiUserState {
  completed: WalkHiglandsMunroData
  setCompleted: any
}

export interface Area {
  area: string
  groups: string[]
}

export interface Trip {
  title: string
  weatherUrl: string
  desc: string
  image: string
  grade: number
  url: string
  rating: number
  munros: { name: string; uri: string; cords: { long: number; lat: number } }[]
  distance: number
  ascent: number
  time: {
    naismith: number
    walkHighlands: string
  }
  location: {
    walkHighlands: {
      area: string
      group: string
    }
    steveFallon: {
      area: string
      group: string
    }
  }
}
