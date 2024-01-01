import { useState } from "react"

const Counter = () => {
    const [ counter, setCounter ] = useState(0);
    const [ message, setMesage ] = useState('');


    const handleClick = () => {
        setCounter(counter + 1);
    }

    const handleChange = (e) => setMesage(e.target.value);

    return (
        <>
            <h4>Counter is: {counter}</h4>
            <button onClick={handleClick}>Increment</button>

            <input type="text" onChange={handleChange}/>
            <p>{message}</p>
        </>
    )
}

export default Counter