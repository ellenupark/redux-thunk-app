import React from 'react';
import Color from './Color';
import { changeColor } from './actions/index';
import { connect } from 'react-redux'

const ColorContainer = (props) => {
    const styles = {
        margin: '0 auto'
    }

    return (
        <div style={styles}>
            <Color />
            <button onClick={props.changeColor} >Change Image</button>
        </div>
    );
};

export default connect(null, { changeColor })(ColorContainer);