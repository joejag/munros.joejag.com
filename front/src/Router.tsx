import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'
import { AllMunros, MunroArea, MunroGroup } from './App'
import { WalkHighlandsContext, INITIAL_STATE } from './components/Context'
import WalkHighlandsConnect from './components/WalkHighlandsConnect'
import DrivingPreferences from './components/DrivingPreferences'
import PlanATrip from './components/PlanATrip'
import { fetchData } from './biz/fetchData'
import { urlAreaToHumanArea, urlGroupToHumanArea } from './biz/utils'

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
          <Route exact path="/" children={<All />}></Route>
          <Route path="/munros/:area/:group" children={<MunroGroupRoute />} />
          <Route path="/munros/:area" children={<MunroAreaRoute />} />
          <Route path="/walkhighlands" children={<WalkHighlandsConnect />} />
          <Route path="/driving" children={<DrivingPreferences />} />
          <Route path="/plan" children={<PlanATrip />} />
        </Switch>
      </WalkHighlandsContext.Provider>
    </Router>
  )
}

const All = () => {
  React.useEffect(() => {
    document.title = 'Munros: All Possible Trips'
  }, [])
  return (
    <>
      <AllMunros />
    </>
  )
}

function MunroAreaRoute() {
  let { area }: any = useParams()

  React.useEffect(() => {
    document.title = 'Munro Area: ' + urlAreaToHumanArea(area)
  }, [area])

  return (
    <>
      <ScrollToTopOnMount />
      <MunroArea area={area} />
    </>
  )
}

function MunroGroupRoute() {
  let { group }: any = useParams()

  React.useEffect(() => {
    document.title = 'Munro Group: ' + urlGroupToHumanArea(group)
  }, [group])

  return (
    <>
      <ScrollToTopOnMount />
      <MunroGroup group={group} />
    </>
  )
}
