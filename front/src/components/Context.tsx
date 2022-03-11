import * as React from 'react'

import { UserState } from '../biz/types'

export const INITIAL_STATE = {
  completed: {
    id: localStorage.getItem('walkHighlandsName') || '',
    name: '',
    munros: [],
  },
  setCompleted: () => {},
}

export const WalkHighlandsContext =
  React.createContext<UserState>(INITIAL_STATE)
