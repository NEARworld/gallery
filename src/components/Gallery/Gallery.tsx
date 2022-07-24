import type { Random } from 'unsplash-js/dist/methods/photos/types';
import { useContext, useEffect, useState } from 'react'
import './Gallery.scss'
import { CardContext } from '../../utils/CardContext';

export default function Gallery() {
    const [images, setImages] = useState<Random[]>([]);
    const cardContext = useContext(CardContext);
    const tempCards = 30;

    useEffect(() => {
        fetch('http://localhost:8080')
            .then(res => res.json())
            .then(data => {
                setImages(data)
                cardContext?.setCards(data.length)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

    function randomRGB(): string {
        return `rgb(${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)})`
    }

    return (
        <div className="container-gallery">
            {
                images?.map((data, index) => (
                    <div key={index} className="card" style={{
                        backgroundImage: `url(${data.urls.regular})`
                    }}></div>
                ))
            }
            {
                images ? null :
                    Array.from({ length: tempCards }).map((data, index) => (
                        <div key={index} className="card" style={{
                            backgroundColor: randomRGB(),
                        }}></div>
                    ))
            }
        </div>
    )
}