// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render () {
    return (
      <h1>Minimalistic Electron React Boilerplate Code :)</h1>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))
