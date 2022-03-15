import * as React from 'react'
import ReactDOM from 'react-dom'

import { fetchData } from './biz/fetchData'
import { WalkHiglandsMunroData } from './biz/types'
import { hoursSince } from './biz/utils'
import { dbUpdateMulti, MULTI_INITIAL_STATE, WalkHighlandsContextV2 } from './components/Context'
import Routes from './Router'

const TopLevel = ({ children }: { children: React.ReactNode }) => {
  const [completed, setCompleted] = React.useState<WalkHiglandsMunroData>(
    MULTI_INITIAL_STATE.completed
  )
  const value = React.useMemo(() => ({ completed, setCompleted }), [completed])

  React.useEffect(() => {
    if (completed.lastRefresh != null) {
      const lastRefresh = new Date(completed.lastRefresh)
      const dataAge = hoursSince(lastRefresh)
      if (dataAge >= 1) {
        fetchData((result: any) => {
          const saveMe = {
            ...completed,
            munrosCompleted: result.munros,
            name: result.name,
          }
          dbUpdateMulti(saveMe)
          setCompleted(saveMe)
        }, completed.name)
      }
    }
  }, [completed])

  return (
    <WalkHighlandsContextV2.Provider value={value}>
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
