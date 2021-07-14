import React from 'react';
import { Item } from './Item';

export const Results = ( { movie } ) => {

    return (
        <div className="results__container">
            {
                movie !== null &&
                movie.results !== undefined
                ? (
                    movie.results.map( item => {
                        return ( 
                            <Item  
                                id={item.id} 
                                title={item.title} 
                                img={item.poster_path}
                                movie={item}
                                key={item.id}
                            />
                        )
                    }) 
                ) : (
                    <p>Please search a movie!</p>
                )
            }


        </div>
    )
}
