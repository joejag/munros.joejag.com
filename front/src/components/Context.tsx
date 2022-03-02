import React from 'react'

import { UserState } from '../Router'

export const INITIAL_STATE = {
  completed: {
    id: localStorage.getItem('walkHighlandsId') || '',
    name: '',
    munros: [],
  },
  setCompleted: () => {},
}

export const WalkHighlandsContext =
  React.createContext<UserState>(INITIAL_STATE)
