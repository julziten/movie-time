import { types } from '../types/types';

export const favoriteReducer = ( state = [], action ) => {

    switch (action.type) {
        case types.add:
            return [...state, action.payload ]

        case types.remove:
            return state.filter(movie => movie.id !== action.payload.id )

            default:
                return state;
    }
}