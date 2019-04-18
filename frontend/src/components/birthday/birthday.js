import React from 'react';
import { withRouter } from 'react-router-dom';
import Person from '../people/person';
import "./birthday.css";


class Birthday extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        };
    }

    componentWillMount() {
        this.props.fetchBirthday(this.props.match.params.month, this.props.match.params.day);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.month !== this.props.match.params.month || prevProps.match.params.day !== this.props.match.params.day) {
            this.props.fetchBirthday(this.props.match.params.month, this.props.match.params.day);
        }
    }

    componentWillReceiveProps(newState) {
        this.setState({ people: newState.birthday });
    }

    render() {

        if (this.state.people.length === 0) {
            return (<div>Gathering birthdays...</div>)
        } else {

            let today = new Date(Date.now());

            return (
              <>
                <h2>{parseInt(this.props.match.params.month) === parseInt(today.getMonth()) + 1 && parseInt(this.props.match.params.day) === parseInt(today.getDate()) + 1 ? "Happy Birthday" : this.props.match.params.month + "/" + this.props.match.params.day }</h2>
                <div className="birthdayWrapper">
                        {this.state.people.slice(0,100).map(person => (
                            <Person key={person._id} name={person.name} description={person.description} image={person.image}/>
                        ))}
                </div>
              </>
            );
        };
    }
}

export default withRouter(Birthday);