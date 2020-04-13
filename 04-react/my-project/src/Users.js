import React, { Component } from 'react';

export class Users extends Component {
    state = {
        usersList: ['Rafael Braga', 'Elon Musk', 'Steve Jobs', 'Bill Gates'],
        givenPropIsAnUser: undefined,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchFor !== this.props.searchFor) {
            console.log('prop is changed!');
            if(this.state.usersList.includes(this.props.searchFor)) {
                this.setState({
                    givenPropIsAnUser: true
                })
            } else {
                this.setState({
                    givenPropIsAnUser: false
                })
            }
        }
    }

    render() {
        if (this.state.givenPropIsAnUser === true) {
            return (
                <h1>User is found!</h1>
            )
        }
        
        if (this.state.givenPropIsAnUser === false) {
            return (
                <h1>User is not found!</h1>
            )
        }

        return (
            <h1>We don't have user yet</h1>
        )
    }
}