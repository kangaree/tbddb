import axios from 'axios';

export const getBirthday = (month, day) => {
    return axios.get(`/api/birthdays/${month}/${day}`);
};