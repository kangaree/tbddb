import { getBirthday } from '../util/birthday_api_util';

export const RECEIVE_BIRTHDAY = "RECEIVE_BIRTHDAY";

export const receiveBirthday = birthday => ({
    type: RECEIVE_BIRTHDAY,
    birthday
});

export const fetchBirthday = (month, day) => dispatch => (
    getBirthday(month, day)
        .then(birthday => dispatch(receiveBirthday(birthday)))
        .catch(err => console.log(err))
);