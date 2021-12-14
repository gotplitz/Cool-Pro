import { ADD_EMAIL, EMAIL_ERROR, GET_EMAILS } from '../actions/types';

const initialState = {
    emails: [],
    email: null,
    loading: true,
    error: {},
};

export default function email(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_EMAIL:
            return {
                ...state,
                emails: [payload, ...state.emails],
                loading: false,
            };

        case GET_EMAILS:
            return {
                ...state,
                emails: payload,
                loading: false,
            };

        case EMAIL_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };

        default:
            return state;
    }
}
