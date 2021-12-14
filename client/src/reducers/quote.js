import {
    GET_QUOTES,
    QUOTE_ERROR,
    ADD_QUOTE,
    GET_QUOTE,
    ADD_RESPONSE,
} from '../actions/types';

const initialState = {
    quotes: [],
    quote: null,
    loading: true,
    error: {},
};

export default function quote(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_QUOTES:
            return {
                ...state,
                quotes: payload,
                loading: false,
            };
        case GET_QUOTE:
            return {
                ...state,
                quote: payload,
                loading: false,
            };
        case ADD_QUOTE:
            return {
                ...state,
                quotes: [payload, ...state.quotes],
                loading: false,
            };
        case QUOTE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case ADD_RESPONSE:
            return {
                ...state,
                quote: { ...state.quote, responses: payload },
                loading: false,
            };
        default:
            return state;
    }
}
