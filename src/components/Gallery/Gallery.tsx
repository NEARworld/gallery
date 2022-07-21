import './Gallery.scss'
import { createApi } from 'unsplash-js';
import { useEffect } from 'react';

// temp
const unsplash = createApi({
    accessKey: process.env.REACT_APP_API_ACCESS_KEY!
})

export default function Gallery() {

    useEffect(() => {
        unsplash.photos.getRandom({
            count: 30
        }).then(res => console.log(res.response)
        ).catch(err => console.log(err)
        )
    }, [])

    function randomRGB(): string {
        return `rgb(${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)})`
    }

    return (
        <div className="container">
            {
                Array.from({ length: 40 }).map((item, index) => (
                    <div key={index} className="card" style={{
                        backgroundColor: randomRGB(),
                    }}></div>
                ))
            }
        </div>
    )
}