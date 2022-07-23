import type { Random } from 'unsplash-js/dist/methods/photos/types';
import { useEffect, useState } from 'react'
import './Gallery.scss'

export default function Gallery() {
    const [images, setImages] = useState<Random[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080')
            .then(res => res.json())
            .then(data => {
                setImages(data)
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
                Array.from({ length: 30 }).map((data, index) => (
                    <div key={index} className="card" style={{
                        backgroundColor: randomRGB(),
                    }}></div>
                ))
            }
        </div>
    )
}