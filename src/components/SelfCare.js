import React, { Component, Fragment } from 'react';

import Header from './Header';
import NavBar from './NavBar';


class Main extends Component {
    render(){
        // console.log('user id', this.props.userId);
        return(
            <Fragment>
                <Header />
                <NavBar />
                <div>
                    <ul></ul>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Main)
