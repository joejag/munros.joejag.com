import * as React from 'react'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'

import { urlAreaToHumanArea, urlGroupToHumanArea } from './biz/utils'
import AllMunros from './components/pages/AllMunros'
import DrivingPreferences from './components/pages/DrivingPreferences'
import { MunrosByArea, MunrosByGroup } from './components/pages/MunrosBy'
import PlanATrip from './components/pages/PlanATrip'
import WalkHighlandsConnect from './components/pages/WalkHighlandsConnect'

function ScrollToTopOnMount() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<All />}></Route>
        <Route path="/munros/:area/:group" children={<MunroGroupRoute />} />
        <Route path="/munros/:area" children={<MunroAreaRoute />} />
        <Route path="/walkhighlands" children={<WalkHighlandsConnect />} />
        <Route path="/driving" children={<DrivingPreferences />} />
        <Route path="/plan" children={<PlanATrip />} />
      </Switch>
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
      <MunrosByArea area={area} />
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
      <MunrosByGroup group={group} />
    </>
  )
}
