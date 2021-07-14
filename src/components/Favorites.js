import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Card } from 'antd';
import { replaceImgWithError } from '../helpers/replaceImg';

const { Meta } = Card;

export const Favorites = ({history}) => {

    const state = useSelector( state => state );

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <div className="favorites__container">
            <Button 
                type="primary"
                style={ {margin: '1em'} }
                onClick={ handleGoBack } >
                Go Back
            </Button>

            <div className="favorites__box">
                {
                    state.map( data => (
                        <Card
                            hoverable
                            style={{ width: 300, margin: '1em' }}
                            key={data.id}
                            cover={ <img 
                                alt={`This is "${ data.title }" movie`} 
                                src={`https://image.tmdb.org/t/p/w500${ data.image }`} /> }
                                onError={ replaceImgWithError }
                            >
                            <Meta 
                                title={data.original_title} 
                                description={data.overview}
                            />
                            <div style={{ paddingBlock: '1em' }}>
                                <p>Popularity: {data.popularity}</p>
                                <p>Vote Avegare: {data.vote} </p>
                                <p>Release Date: {data.date}</p>
                                <p>Original Language: {data.language}</p>
                            </div>

                        </Card>
                    ))
                }

            </div>
            
        </div>
    )
}
