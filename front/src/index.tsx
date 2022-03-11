import * as React from 'react'
import ReactDOM from 'react-dom'

import { fetchData } from './biz/fetchData'
import { WalkHiglandsData } from './biz/types'
import { INITIAL_STATE, WalkHighlandsContext } from './components/Context'
import Routes from './Router'

const TopLevel = ({ children }: { children: React.ReactNode }) => {
  const [completed, setCompleted] = React.useState<WalkHiglandsData>(
    INITIAL_STATE.completed
  )
  const value = React.useMemo(() => ({ completed, setCompleted }), [completed])

  React.useEffect(() => {
    if (completed.id !== undefined && completed.id !== '') {
      fetchData(setCompleted, completed.id)
    }
  }, [completed.id])

  return (
    <WalkHighlandsContext.Provider value={value}>
      {children}
    </WalkHighlandsContext.Provider>
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
