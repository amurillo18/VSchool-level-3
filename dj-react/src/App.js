import React, { useState } from 'react';
import './App.css';
import Square from './Square'

function App() {

  const audio = new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key01.mp3")

  const audio2 = new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key02.mp3")

  const audio3 = new Audio("https://ia600106.us.archive.org/13/items/24-piano-keys/key03.mp3")

  const audio4 = new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key04.mp3")

  const audio5 = new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key05.mp3")

  const audio6 = new Audio("https://ia600106.us.archive.org/13/items/24-piano-keys/key06.mp3")

  const audio7 = new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key07.mp3")

  const audio8 = new Audio("https://ia800106.us.archive.org/13/items/24-piano-keys/key08.mp3")

  const [colors, setColors] = useState(() => ["white", "white", "white", "white"])

  function SmallTimeDj () {
    setColors(prevState => prevState[0] === "white" ? ["black", "black", "black", "black"]:["white", "white", "white", "white"])

    audio.play()
  }

  function PartyDj () {
    setColors(prevState => prevState[0] && prevState[1] === "white" ? ["purple", "purple", "white", "white"]:["purple", "purple", "black", "black"])

    audio2.play()
  }

  function ProfessionalDjLeft () {
    setColors(prevState => [prevState[0],prevState[1],"blue",prevState[3]])

    audio3.play()
  }

  function ProfessionalDjRight () {
    setColors(prevState => [prevState[0],prevState[1],prevState[2],"blue"])

    audio4.play()
  }

  function BigTimeDj1 () {
    setColors(prevState => ["red",prevState[1],prevState[2], prevState[3]])

    audio5.play()
  }

  function BigTimeDj2 () {
    setColors(prevState => [prevState[0],"green",prevState[2], prevState[3]])

    audio6.play()
  }

  function BigTimeDj3 () {
    setColors(prevState => [prevState[0],prevState[1],"orange", prevState[3]])

    audio7.play()
  }

  function BigTimeDj4 () {
    setColors(prevState => [prevState[0],prevState[1],prevState[2],"yellow"])

    audio8.play()
  }
  return (
    <div className="App">
      <div className='square--1'>
        <Square color={colors[0]}/>
      </div>
      <div className='square--2'>
        <Square color={colors[1]}/>
      </div>
      <div className='square--3'>
        <Square color={colors[2]}/>
      </div>
      <div className='square--4'>
        <Square color={colors[3]}/>
      </div>
      <button className='small--time' onClick={SmallTimeDj}>Small Time DJ</button>

      <button className='party--dj' onClick={PartyDj}>Party DJ</button>

      <button className='professional--dj' onClick={ProfessionalDjLeft}>Bottom Left Blue</button>
      <button className='professional--dj' onClick={ProfessionalDjRight}>Bottom Right Blue</button>

      <button className='bigTime--dj' onClick={BigTimeDj1}>Big Time Dj 1</button>
      <button className='bigTime--dj' onClick={BigTimeDj2}>Big Time DJ 2</button>
      <button className='bigTime--dj' onClick={BigTimeDj3}>Big Time DJ 3</button>
      <button className='bigTime--dj' onClick={BigTimeDj4}>Big Time DJ 4</button>
    </div>
  );
}

export default App;
