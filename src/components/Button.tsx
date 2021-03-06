import { useState} from 'react'

interface ButtonProps {
    color: string;
    children: string;
}

export default function Button(props: ButtonProps ) {

    const [counter, setCounter] = useState(1)

    return (
        <button type="button"
            style={{ backgroundColor: props.color }}
            onClick={() => setCounter(counter+1)}>

            {props.children} <strong>{counter}</strong>
        </button>
    )
}