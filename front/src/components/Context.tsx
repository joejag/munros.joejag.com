import * as React from 'react'

import { MultiUserState } from '../biz/types'

// increment the number when breaking changes happen
const DB_NAME = 'db2'

export const BLANK_STATE = {
  name: null,
  lastRefresh: null,
  munrosCompleted: [],
  buddy: {
    name: null,
    munrosCompleted: [],
    buddyLastRefresh: null,
  },
}

const dbReadMulti = () => {
  // TODO: read from remote if cache is out of date
  if (localStorage.getItem(DB_NAME) !== null) {
    return JSON.parse(localStorage.getItem(DB_NAME) || '{}')
  }

  return BLANK_STATE
}

export const dbUpdateMulti = (result: any) => {
  result.lastRefresh = new Date()
  dbSaveMulti(result)
}

export const dbSaveMulti = (result: any) => {
  localStorage.setItem(DB_NAME, JSON.stringify(result))
}

export const dbClearMulti = () => {
  const state = dbReadMulti()
  const newState = {
    ...BLANK_STATE,
    name: state.name,
  }
  localStorage.setItem(DB_NAME, JSON.stringify(newState))
}

export const MULTI_INITIAL_STATE = {
  completed: dbReadMulti(),
  setCompleted: () => {},
}

export const WalkHighlandsContextV2 =
  React.createContext<MultiUserState>(MULTI_INITIAL_STATE)
