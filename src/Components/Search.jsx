import React, {useEffect, useState} from 'react';
import SearchImg from "../Icons/SearchImg";
import {getCity} from "../Api/meteo";

const Search = () => {

    const [search,setSearch] = useState('')
    const [searchList,setSearchList] = useState([])

    useEffect(()=>{
        const getDataFromApi = async () => {
            try {
                const apiData = await getCity(search);
                setSearchList(apiData || []);
            } catch (err) {
                // setError(err.message);
            }
        };

        getDataFromApi();
    },[search])

    return (
        <div className="search">
            <div className={ searchList.length ? 'search__wrap visible' : 'search__wrap' }>
                <div className="search__field-wrap">
                    <input className="search__field form-control" onChange={(e)=>setSearch(e.target.value)} type="search"/>
                    <button className="search__btn btn btn__search">
                        <SearchImg/>
                    </button>
                </div>
                <ul className="search__list">
                    {searchList.map((item)=>(
                        <li key={item.id} className="search__item">{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Search;