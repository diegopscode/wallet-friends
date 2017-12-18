import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchDebts } from '../actions'

class Home extends Component {
    componentDidMount() {
        this.props.fetchDebts()
    }

    renderDebts() {
        return _.map(this.props.debts, debt => {
            return (
                <li className="list-group-item" key={debt.id}>
                    <span>{debt.name}</span>    
                    <span className="text-success">+ R$ 500,00</span>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="container container-page">
                <div className="content-header">
                    <h1>Debts List</h1>
                    <div className="actions">
                        <Link className="btn btn-block" to='/value/new'>+ Value</Link>
                        <Link className="btn btn-block" to='/friend/new'>+ User</Link>
                    </div>
                </div>

                <ul className="list-group">
                    { this.renderDebts() }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { debts: state.debts }
}

export default connect(mapStateToProps, { fetchDebts })(Home);