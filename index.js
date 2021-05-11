import React from 'react'
import { render } from 'react-dom'
import App from './app/App'

const Index = () => {
  return (
    <>
      <App />
    </>
  )
}

render(<Index />, document.getElementById('root'))
