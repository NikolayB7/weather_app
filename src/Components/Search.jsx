import React, {useEffect, useState} from 'react';
import SearchImg from "../Icons/SearchImg";
import {getCity} from "../Api/meteo";
import {useDispatch} from "react-redux";
import { currentCity } from "../store/citySlice"
import { toggleOverlay } from "../store/stateElementSlice"

const Search = ({classType}) => {
    const [showSearch,setShowSearch] = useState(false)
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
        // searchList.length && setSearchList([])
        setSearch(city.name)
    }

    const toggleSearch = () => {
        setShowSearch(!showSearch)
        dispatch(toggleOverlay(!showSearch))
    }

    return (
        <div className={`search ${classType}`}>
            <div className={ searchList.length ? 'search__wrap visible' : 'search__wrap' }>
                <div className="search__field-wrap">
                    <input
                        className="search__field form-control"
                        value={search}
                        placeholder="Enter city"
                        onChange={(e)=> setSearch(e.target.value)}
                        type="search"
                    />
                    <button className="search__btn button button__search" onClick={()=>toggleSearch()}>
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