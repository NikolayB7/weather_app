import React, {useEffect, useState} from 'react';
import SearchImg from "../Icons/SearchImg";
import {getCity} from "../Api/meteo";
import {useDispatch} from "react-redux";
import { currentCity } from "../store/citySlice"

const Search = () => {

    const [search,setSearch] = useState('')
    const [searchList,setSearchList] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        const getDataFromApi = async () => {
            try {
                const apiData = await getCity(search);
                setSearchList(apiData || []);
            } catch (err) {
                setError(err.message);
            }
        };

        getDataFromApi();
    },[search])

    const selectedCity = (city)=>{
        let position = {
            lat: city.latitude,
            lon: city.longitude
        }
        dispatch(currentCity(position))
        // setSearchList([])
        setSearch(city.name)
    }

    return (
        <div className="search">
            <div className={ searchList.length ? 'search__wrap visible' : 'search__wrap' }>
                <div className="search__field-wrap">
                    <input
                        className="search__field form-control"
                        value={search}
                        placeholder="Enter city"
                        onChange={(e)=>setSearch(e.target.value)}
                        type="search"
                    />
                    <button className="search__btn btn btn__search">
                        <SearchImg/>
                    </button>
                </div>
                <ul className="search__list">
                    {searchList.map((item)=>(
                        <li
                            key={item.id}
                            className="search__item"
                            onClick={()=>selectedCity(item)}>{item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Search;