import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-w"
  >
    <LogMonitor />
  </DockMonitor>
)
// const DevTools = createDevTools(
//   <Inspector />
// )
export default DevTools
