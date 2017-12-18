import _ from 'lodash'
import { FETCH_DEBTS } from '../actions'

export default function (state = {}, action) {

    switch(action.type) {

        case FETCH_DEBTS:
            return _.mapKeys(action.payload, 'id')

        // case FETCH_POST:
        //     const post = action.payload.data;
        //     return { ...state, [post.id]: post }

        // case DELETE_POST:
        //     return _.omit(state, action.payload);

        default:
            return state;
    }
}