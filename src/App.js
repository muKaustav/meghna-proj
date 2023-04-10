import React, { useState } from 'react'
import Frame from './components/frame/frame'
import './app.scss'

function App() {
  let [day, setDay] = useState(true)
  let [buttonText, setButtonText] = useState('Make it a Night')

  let handleToggle = () => {
    setDay(!day)

    if (day) {
      setButtonText('Make it a Day')
    } else {
      setButtonText('Make it a Night')
    }
  }

  return (
    <div className="App">
      <button className="button" onClick={handleToggle}>
        <div className="button-text">
          {buttonText}
        </div>
      </button>
      <Frame day={day} />
    </div>
  )
}

export default App
