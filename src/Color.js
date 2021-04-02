import React, {} from 'react';
import { connect } from 'react-redux'

const Color = (props) => {
    const divStyle = {
        margin: '0 auto',
        overflow: 'hidden',
        maxWidth: '500px',
        maxHeight: '500px'
    }

    const imgStyle = {
        minWidth: '100%', 
        minHeight: '100%'
    }

    return (
        <div style={divStyle} className="color-display">
            {props.color && <img style={imgStyle} src={props.color} alt="dog"/>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        color: state
    }
}

export default connect(mapStateToProps)(Color);


