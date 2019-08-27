import React, { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';

import StressLevelTracker from './StressLevelTracker';
import EntryForm from './EntryForm';
import Entries from './Entries'

class Main extends Component {
    render(){
        console.log('user id', this.props.userId);
        return(
            <Fragment>
                <Header />
                <NavBar />
                <Route
                    path='/new-entry'
                    render={() => (
                        <EntryForm
                        />
                    )}
                />
                <Route
                    path='/entries'
                    render={() => (
                        <Entries
                        />
                    )}
                />
                <Route
                    path='/stress-level-tracker'
                    render={() => (
                        <StressLevelTracker
                        />
                    )}
                />
                {/* <Route
                    path='/'
                    render={() => (
                        <Main />
                    )}
                /> */}
            </Fragment>
        )
    }
}

export default withRouter(Main)
