import { connect } from 'react-redux';
import { fetchBirthday } from '../../actions/birthday_actions';
import Birthday from './birthday';

const mapStateToProps = (state) => {
    return {
        birthday: Object.values(state.birthdays.birthday)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBirthday: (month, day) => dispatch(fetchBirthday(month, day))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Birthday);