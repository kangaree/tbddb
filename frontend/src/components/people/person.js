import React from 'react';

class Person extends React.Component {
    render() {
        return (
            <div className="person">
                <a href={"https://en.wikipedia.org/wiki/" + this.props.name}>
                    <img src={this.props.image + "?width=100"} alt={this.props.name} title={this.props.description} ></img>
                    <h3 className="person-name">{this.props.name}</h3>                
                </a>
            </div>
        );
    }
}

export default Person;