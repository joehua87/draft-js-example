import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { whyDidYouUpdate } from 'why-did-you-update'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
const store = configureStore()

// if (process.env.NODE_ENV !== 'production') {
//   whyDidYouUpdate(React, { exclude: [/^DockMonitor/, /^Connect/] })
// }

render(
  <Root store={store} />,
  document.getElementById('root')
)
