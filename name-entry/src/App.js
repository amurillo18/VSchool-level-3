import { useState } from 'react';
import './App.css';

function App() {
  
  const [names, setNames] = useState(() => [])

  const [formData, setFormData] = useState(() => ({
    name: ""
  }))

  function handleForm(event) {
    const {name,value} = event.target
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
  }

  const listItem = names.map(function(name){
    return(
      <li>{name}</li>
    )
  })

  function handleSubmit(event) {
    event.preventDefault()
    setNames(prevState => [...prevState, formData.name])
    setFormData(({
      name: ""
    }))
  }
  return (
    <div className="App">
      <h1>List of Names</h1>
      <h2>{formData.name}</h2>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Enter Name here'
        onChange={handleForm}
        name="name"
        value={formData.name}
      />
      <button>Submit</button>
      </form>
      <ul>
        {listItem}
      </ul>
    </div>
  );
}

export default App;
