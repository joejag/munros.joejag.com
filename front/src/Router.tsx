import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom'
import App, { MunroGroup } from './App'

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
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/:id" children={<MunroGroupRoute />} />
      </Switch>
    </Router>
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
