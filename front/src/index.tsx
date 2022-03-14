import * as React from 'react'
import ReactDOM from 'react-dom'

import { WalkHiglandsMunroData } from './biz/types'
import { MULTI_INITIAL_STATE, WalkHighlandsContextV2 } from './components/Context'
import Routes from './Router'

const TopLevel = ({ children }: { children: React.ReactNode }) => {
  const [completedv2, setCompletedv2] = React.useState<WalkHiglandsMunroData>(
    MULTI_INITIAL_STATE.completed
  )
  const valuev2 = React.useMemo(
    () => ({ completed: completedv2, setCompleted: setCompletedv2 }),
    [completedv2]
  )

  return (
    <WalkHighlandsContextV2.Provider value={valuev2}>
      {children}
    </WalkHighlandsContextV2.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <TopLevel>
      <Routes />
    </TopLevel>
  </React.StrictMode>,
  document.getElementById('root')
)
