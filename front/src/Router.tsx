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
        <Route
          exact
          path="/"
          children={
            <PageWithTitle title="Munros: All Possible Trips">
              <AllMunros />
            </PageWithTitle>
          }
        ></Route>
        <Route path="/munros/:area/:group" children={<MunroGroupRoute />} />
        <Route path="/munros/:area" children={<MunroAreaRoute />} />
        <Route
          path="/walkhighlands"
          children={
            <PageWithTitle title="Munros: Link Your WH Account">
              <WalkHighlandsConnect />
            </PageWithTitle>
          }
        />
        <Route
          path="/driving"
          children={
            <PageWithTitle title="Munros: Change Driving Origin">
              <DrivingPreferences />
            </PageWithTitle>
          }
        />
        <Route
          path="/plan"
          children={
            <PageWithTitle title="Munros: Plan a Trip">
              <PlanATrip />
            </PageWithTitle>
          }
        />
      </Switch>
    </Router>
  )
}

const PageWithTitle = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  React.useEffect(() => {
    document.title = title
  }, [title])

  return <>{children}</>
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
