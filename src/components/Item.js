import React from 'react';
import { Link } from 'react-router-dom';
import { replaceImgWithError } from '../helpers/replaceImg';

export const Item = ( { title, img, movie } ) => {

    return (
        <div style={{margin: '1em'}}>
            <h4> { title } </h4>
            <Link to={`/details/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${ img }`} 
                    onError={replaceImgWithError}
                    width="300"
                    alt={`This is "${ title }" movie`}
                    style={ { border: '2px solid black' } }
                />
            </Link>
        </div>
    )
}
