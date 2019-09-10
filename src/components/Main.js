import React, { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';

import NavBar from './NavBar';

import StressLevelTracker from './StressLevelTracker';
import StressLevels from './StressLevels'
import EntryForm from './EntryForm';
import Entries from './Entries';
import SelfCare from './SelfCare';
import Schedule from './Schedule'

class Main extends Component {
    render(){
        return(
            <Fragment>
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
                <Route
                    path='/main/self-care'
                    render={() => (
                        <SelfCare />
                    )}
                />
                <Route
                    path='/main/schedule'
                    render={() => (
                        <Schedule 
                        userId={this.props.userId}
                        />
                    )}
                />
            </Fragment>
        )
    }
}

export default withRouter(Main)
