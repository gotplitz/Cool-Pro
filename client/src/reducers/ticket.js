import {
    GET_TICKETS,
    TICKET_ERROR,
    ADD_TICKET,
    GET_TICKET,
    ADD_DISCUSSION,
} from '../actions/types';

const initialState = {
    tickets: [],
    ticket: null,
    loading: true,
    error: {},
};

export default function ticket(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_TICKETS:
            return {
                ...state,
                tickets: payload,
                loading: false,
            };
        case GET_TICKET:
            return {
                ...state,
                ticket: payload,
                loading: false,
            };
        case ADD_TICKET:
            return {
                ...state,
                tickets: [payload, ...state.tickets],
                loading: false,
            };
        case TICKET_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case ADD_DISCUSSION:
            return {
                ...state,
                ticket: { ...state.ticket, discussions: payload },
                loading: false,
            };
        default:
            return state;
    }
}
