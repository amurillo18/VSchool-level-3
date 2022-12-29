import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>color</h1>
    </div>
  );
}

export default App;
// 1
const [color, setColor] = useState("pink")

setColor("orange")
// 2
const [color, setColor] = useState("pink")

setColor(prevState => {if (prevState == "pink"){
  prevState = "blue"
} else {
  prevState = "pink"
}}
  )
  // 3
  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Smith"
    }
  ])
  
  setPeople(prevState => {
    return(
      ...prevState, {
        firstName: "Alex",
        lastName: "Rando"
      }
    )
  })

  // 4a
  const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => {...prevColors, "green"})

// b
const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject(prevState=> ({
		count: prevState.count + 1}))

// 5

const [person, setPerson] = useState({
  firstName: "John",
  lastName: "Smith"
})

setPerson(prevState => ({
  ...prevState,
  age: 30
}))

// 6

const [colors, setColors] = useState(["pink", "blue"])// this is an array data type

setColors("green") // this will overwrite the state and its also a string data type