import React from "react";

import { connect } from "react-redux";

import { User } from './User';
import { Main } from './Main';


class App extends React.Component {
    // constructor() {
    //     super();
    // }
    // changeUsername(newName) {
    // }
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
            dispatch({
                type: "SET_NAME",
                payload: name
            })
        }
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(App);