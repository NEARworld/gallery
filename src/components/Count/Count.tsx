import { useContext, useEffect, useState } from 'react';
import { CardContext } from '../../utils/CardContext';
import './Count.scss'

export default function Count() {
    const [count, setCount] = useState(0);
    const cardContext = useContext(CardContext)
    return (
        <>
            <h1 className='heading-1'>
                Total <span className='count-cards'>{cardContext?.cards}</span> Cards
            </h1>
            <h1 className='heading-1'>Api requests: {count}/30</h1>
        </>
    )
}