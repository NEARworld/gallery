import { useEffect, useState } from 'react';
import './Count.scss'

export default function Count() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className='heading-1'>Api requests: {count}/30</h1>
        </>
    )
}