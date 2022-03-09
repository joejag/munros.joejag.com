import React from 'react'

import { UserState } from '../Router'

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
