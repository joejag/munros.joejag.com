import * as React from 'react'

import { MultiUserState } from '../biz/types'

export const BLANK_STATE = {
  name: null,
  lastRefresh: null,
  munrosCompleted: [],
  buddies: {},
  buddiesLastRefresh: null,
}

const dbReadMulti = () => {
  // TODO: read from remote if cache is out of date
  if (localStorage.getItem('db') !== null) {
    return JSON.parse(localStorage.getItem('db') || '{}')
  }

  return BLANK_STATE
}

export const dbUpdateMulti = (result: any) => {
  const now =
    new Date().toDateString() + ' at ' + new Date().toLocaleTimeString()
  result.lastRefresh = now
  dbSaveMulti(result)
}

export const dbSaveMulti = (result: any) => {
  localStorage.setItem('db', JSON.stringify(result))
}

export const dbClearMulti = () => {
  const state = dbReadMulti()
  const newState = {
    name: state.name,
    lastRefresh: null,
    munrosCompleted: [],
    buddies: {},
    buddiesLastRefresh: '',
  }
  localStorage.setItem('db', JSON.stringify(newState))
}

export const MULTI_INITIAL_STATE = {
  completed: dbReadMulti(),
  setCompleted: () => {},
}

export const WalkHighlandsContextV2 =
  React.createContext<MultiUserState>(MULTI_INITIAL_STATE)
