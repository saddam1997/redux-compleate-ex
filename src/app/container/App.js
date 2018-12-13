import React from "react";

import { connect } from "react-redux";

import { User } from '../components/User';
import { Main } from '../components/Main';

import { setName } from "../actions/userActions"

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Annaaa")} />
                <User username={this.props.user.userName} />
            </div>
        );
    }
}

const mapsStateToProps = (state) => {

    return {
        user: state.user,
        math: state.math
    }
}

const mapsDispatchToProps = (dispatch) => {

    return {
        setName: (name) => {
            dispatch(setName(name))
        }
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(App);