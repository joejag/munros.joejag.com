import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'
import { AllMunros, MunroArea, MunroGroup } from './App'
import { WalkHighlandsContext, INITIAL_STATE } from './components/Context'
import WalkHighlandsConnect from './components/WalkHighlandsConnect'
import { fetchData } from './biz/fetchData'

function ScrollToTopOnMount() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}

export interface WalkHiglandsMunros {
  id: string
  name: string
  munros: string[]
}

export interface UserState {
  completed?: WalkHiglandsMunros
  setCompleted: any
}

export default function Routes() {
  const [completed, setCompleted] = React.useState<WalkHiglandsMunros>(
    INITIAL_STATE.completed
  )
  const value = React.useMemo(() => ({ completed, setCompleted }), [completed])

  React.useEffect(() => {
    if (completed.id !== undefined && completed.id !== '') {
      fetchData(setCompleted, completed.id)
    }
  }, [completed.id])

  return (
    <Router>
      <WalkHighlandsContext.Provider value={value}>
        <Switch>
          <Route exact path="/">
            <AllMunros />
          </Route>
          <Route path="/area/:id" children={<MunroAreaRoute />} />
          <Route path="/group/:id" children={<MunroGroupRoute />} />
          <Route path="/walkhighlands" children={<WalkHighlandsConnect />} />
        </Switch>
      </WalkHighlandsContext.Provider>
    </Router>
  )
}

function MunroAreaRoute() {
  let { id }: any = useParams()
  return (
    <>
      <ScrollToTopOnMount />
      <MunroArea area={id} />
    </>
  )
}

function MunroGroupRoute() {
  let { id }: any = useParams()
  return (
    <>
      <ScrollToTopOnMount />
      <MunroGroup group={id} />
    </>
  )
}
