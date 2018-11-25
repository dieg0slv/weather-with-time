// Utility functions
import { makeChangeAction } from './utils';

// Main store prefixes
import { REDUX_STORE_PREFIX } from './utils';

const DUCK_PREFIX = `${REDUX_STORE_PREFIX}/weather`;

// Redux Action

// The reducer's defaut state
const defaultState = {
    place: '',
    forecast: {},
    isLoading: true,
};

// Actions
const SET_ACTIVE_PLACE = `${DUCK_PREFIX}/SET_ACTIVE_PLACE`;
const SET_FORECAST = `${DUCK_PREFIX}/SET_FORECAST`;
const TOGGLE_LOADING = `${DUCK_PREFIX}/TOGGLE_LOADING`;

// Reducer function
function reducer(
    state = defaultState,
    action = {}
) {
    switch (action.type) {
        case SET_ACTIVE_PLACE:
            return {
                ...state,
                place: action.setActivePlace
            }
        case SET_FORECAST:
            return {
                ...state,
                forecast: action.setForecast
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state
    }
};


export const setActivePlace = makeChangeAction(SET_ACTIVE_PLACE, 'setActivePlace');
export const setForecast = makeChangeAction(SET_FORECAST, 'setForecast');
export const toggleLoading = makeChangeAction(TOGGLE_LOADING, 'toggleLoading');

export default reducer;
