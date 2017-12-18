import React, { Component } from 'react'
import { connect } from 'react-redux'

class Friends extends Component {

    onSubmit(values) {
        
    }

    render() {
        return (
            <div className="container">
                Friends
            </div>
        )
    }
}

export default connect()(Friends);