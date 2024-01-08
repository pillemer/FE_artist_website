import React, { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState([{}])

  useEffect(()=>{
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        setMessage(data)
      }
    )
  }, [])

  return (

    <div>
      {(typeof message.artwork === 'undefined') 
      ? (<p>Loading...</p>)
      : (message.artwork.map((item, i) => (
        <p key={i}>{item}</p>
      )))
       }</div>
  )
}

export default App