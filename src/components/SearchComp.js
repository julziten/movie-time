import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useForm } from '../hooks/useForm';
import { Results } from './Results';
import { Input } from 'antd';
import { apiKey } from '../helpers/apiKey';
import { Link } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';

const { Search } = Input;

export const SearchComp = () => {

    const [ { searchTerm } , handleInputChange ] = useForm({
        searchTerm: ''
    });

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    const { data = {}, loading = true } = useFetch(url);

    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (

        <>

            <form onSubmit={ handleSearch } className="search__form">

                <Search 
                    name="searchTerm" 
                    value={searchTerm} 
                    placeholder="Search a movie..."
                    onChange={handleInputChange} 
                    className="search__input"
                    autoComplete="off"
                />
            </form>

            {
                loading === true ? 
                <LoadingOutlined />
                :
                <Results movie={data}/>
            }

            <Link 
                to="/favorites" 
                className="search__favorites">
                Go To Favorites
            </Link>

            
        </>
    )
}
