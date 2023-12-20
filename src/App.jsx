import {useEffect, useState} from 'react'
import '../src/style/main.scss'
import "sanitize.css";

import {getPosts} from "./Api/meteo"
import Menu from "./Components/Menu";
import Search from "./Components/Search";

function App() {

    const [post,setPost] = useState([])

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const apiData = await getPosts(); // Используем функцию для получения данных
                setPost(apiData);
            } catch (err) {
                // setError(err.message);
            }
        };

        fetchDataFromApi();

    }, []);

    return (
        <>
            <header>
                <Menu/>
                <Search/>
            </header>
            <main>main</main>
            <footer>footer</footer>
        </>
    )
}

export default App
