import React from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [color, setColor] = React.useState(() =>([]))

  const [newColor, setNewColor] = React.useState(() => true)

  React.useEffect(() => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`).then(response => setColor(response.data.new_color))
  },[newColor])

  const background = {
    backgroundColor: `#${color}`
  }

  function backgroundColorHandler() {
    setNewColor(prevState => !prevState)
  }

  return (
    <div className="App">
     <div onClick={backgroundColorHandler} className='change' style={background}>
     </div>
    </div>
  );
}

export default App;

