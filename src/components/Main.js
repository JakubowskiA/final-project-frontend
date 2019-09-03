import React, { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';

import StressLevelTracker from './StressLevelTracker';
import StressLevels from './StressLevels'
import EntryForm from './EntryForm';
import Entries from './Entries'

class Main extends Component {
    render(){
        // console.log('user id', this.props.userId);
        return(
            <Fragment>
                <Header />
                <NavBar />
                <Route
                    path='/main/new-entry'
                    render={() => (
                        <EntryForm
                        userId={this.props.userId}
                        user={this.props.user}
                        />
                    )}
                />
                <Route
                    path='/main/entries'
                    render={() => (
                        <Entries
                        userId={this.props.userId}
                        user={this.props.user}
                        />
                    )}
                />
                <Route
                    path='/main/stress-level-tracker'
                    render={() => (
                        <StressLevelTracker
                        userId={this.props.userId}
                        user={this.props.user}
                        />
                    )}
                />
                <Route
                    path='/main/stress-levels'
                    render={() => (
                        <StressLevels />
                    )}
                />
            </Fragment>
        )
    }
}

export default withRouter(Main)
