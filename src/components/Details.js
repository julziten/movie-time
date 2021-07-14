import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import { apiKey } from '../helpers/apiKey';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Card, Rate } from 'antd';

import { HeartOutlined, HeartFilled } from '@ant-design/icons';

import { types } from '../types/types';

export const Details = ( { history } ) => {

    const state = useSelector( state => state );

    const { id } = useParams();

    const isFav = state.some( item => item.id === id );

    const [favorite, toggleFav] = useState(isFav);

    const dispatch = useDispatch();

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    const { data = {} } = useFetch(url);


    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify({ id: id }));
    }, [id])

    const handleGoBack = () => {
        history.goBack();
    }

    const handleFavorite = () => {
        
        toggleFav(!favorite);

        if (favorite === false) {
            const favMovie = {
                id: id,
                name: data.title,
                title: data.title,
                image: data.poster_path,
                overview: data.overview,
                popularity: data.popularity,
                vote: data.vote_average,
                date: data.release_date,
                language: data.original_language
            }
            const action = {
                type: types.add,
                payload: favMovie
            }    
            dispatch( action );

        } else {
            const action = {
                type: types.remove,
                payload: {
                    id: id,
                    name: data.title
                }
            }
            dispatch( action );
        }

    }


    return (
        <div className="details__container">

            <Button
                type="primary"
                onClick={ handleGoBack } >
                Go Back
            </Button>

            { 
            
                data !== null && 

                    <div className="details__card">
                        <div className="details__image">
                            <h2> {data.original_title} </h2>
                            <img 
                                alt={`This is "${ data.title }" movie`} 
                                src={`https://image.tmdb.org/t/p/w500${ data.poster_path }`} />
                        </div>

                        <div className="details__info">
                            <p>Overview: {data.overview}</p>
                            <p>Popularity: {data.popularity}</p>
                            <Rate 
                                disabled 
                                allowHalf 
                                defaultValue={ data.vote_average / 2 }
                                style={{marginBottom: '1em'}}    
                            />
                            <p>Release Date: {data.release_date}</p>
                            <p>Original Language: {data.original_language}</p>

                            { 
                                favorite !== true
                                ? 
                                    <HeartOutlined 
                                    style={ {fontSize: '20px'} }
                                    onClick={ handleFavorite } /> 
                                :
                                    <HeartFilled 
                                    style={ {fontSize: '20px'} }
                                    onClick={ handleFavorite } />
                            }

                        </div>

                        

                    </div>
    
            }

            
            
        </div>
    )
}
