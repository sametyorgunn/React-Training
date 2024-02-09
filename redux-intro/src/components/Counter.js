import React, { Component } from 'react';
import {connect} from "react-redux";

class Counter extends Component {
    render() {
        return (
            <div>
                <h1></h1>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter);