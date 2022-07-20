import { useEffect, useState } from "react";
import Count from "../../components/Count/Count";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
    const [image, setImage] = useState('');

    return (
        <>
            <Count />
            <Gallery />
        </>
    );
}

export default Home;
