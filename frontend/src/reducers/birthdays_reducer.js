import { RECEIVE_BIRTHDAY } from '../actions/birthday_actions';

const BirthdaysReducer = (state = { all: {}, birthday: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_BIRTHDAY:
            newState.birthday = action.birthday.data;
            return newState;
        default:
            return state;
    }
};

export default BirthdaysReducer; 