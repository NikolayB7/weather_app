import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/photos'; // Замени на базовый URL своего API

export const getPosts = async () => {
    try {
        const localData = localStorage.getItem('data');
        if (localData !== null) {
            return JSON.parse(localData);
        } else {
            const response = await axios.get(API_BASE_URL);
            const responseData = response.data;
            localStorage.setItem('data', JSON.stringify(responseData));
            return responseData;
        }
    } catch (error) {
        throw new Error(error.response?.data || 'Failed to fetch data from API');
    }
};

export const getCity = async (city) => {
    try {
        const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`);
        const responseData = response.data.results;
        console.log(responseData)
        return responseData;
    } catch (error) {
        console.error('Error in getCity:', error);
        return [];
    }
};