import './Gallery.scss'

export default function Gallery() {

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