import * as React from 'react'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'

import { urlAreaToHumanArea, urlGroupToHumanArea } from './biz/utils'
import AllMunros from './components/pages/AllMunros'
import { MunrosByArea, MunrosByGroup } from './components/pages/MunrosBy'
import PlanATrip from './components/pages/PlanATrip'
import Preferences from './components/pages/Preferences'

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
            <PageWithTitle title="WalkMunros: All Possible Trips">
              <AllMunros />
            </PageWithTitle>
          }
        ></Route>
        <Route path="/munros/:area/:group" children={<MunroGroupRoute />} />
        <Route path="/munros/:area" children={<MunroAreaRoute />} />
        <Route
          path="/preferences"
          children={
            <PageWithTitle title="WalkMunros: Preferences">
              <Preferences />
            </PageWithTitle>
          }
        />
        <Route
          path="/plan"
          children={
            <PageWithTitle title="WalkMunros: Plan a Trip">
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
    document.title = 'WalkMunros Area: ' + urlAreaToHumanArea(area)
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
    document.title = 'WalkMunros Group: ' + urlGroupToHumanArea(group)
  }, [group])

  return (
    <>
      <ScrollToTopOnMount />
      <MunrosByGroup group={group} />
    </>
  )
}
