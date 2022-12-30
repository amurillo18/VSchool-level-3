import React, {useState} from "react";
import Die from './Die'

function DiceBox(){
    // initially sets state 
    const [numbers, setNumbers] = useState(() => [1, 1, 1, 1, 1])

    let randomNumbers = []
//  produces 5 random numbers ranging from 1 to 6 
for(let i = 0; i < 5; i++){
    randomNumbers.push(Math.floor(Math.random() * 6) + 1)
}
// saves randomNumbers to state
function Roll() {
    setNumbers(prevState => [...randomNumbers])
}
return(
    <div>
        <Die number={numbers[0]}/>
        <Die number={numbers[1]}/>
        <Die number={numbers[2]}/>
        <Die number={numbers[3]}/>
        <Die number={numbers[4]}/>

        <button onClick={Roll}>Roll Dice</button>
    </div>

)
}

export default DiceBox