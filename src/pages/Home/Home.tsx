import { useEffect, useState } from "react";
import Count from "../../components/Count/Count";
import Gallery from "../../components/Gallery/Gallery";
import Search from "../../components/Search/Search";

function Home() {

    return (
        <>
            <Count />
            <Search />
            <Gallery />
        </>
    );
}

export default Home;
