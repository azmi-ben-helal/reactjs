import React from 'react'
import './App.css'
import './css/style.css'
import ImageInSrc from './images/images.jpg'

function App() {
  return (
    <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
      <h1 className="title red">Azmi Ben Helal</h1>

      <br />

      <img src={ImageInSrc} width="320" height="240" />

      <br />

      <img src="./images/publicImage.jpeg" width="320" height="240" />

      <br />
      <video width="320" height="240" controls>
        <source
          src="./videos/two-steps-from-hell-wastelands.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default App
