import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContainerInput from './ContainerInput'
import DecryptedContainerItem from './DecryptedContainerItem'
import actions from '../actions/actions'
const logoImage = require('../res/images/logo.png');

class App extends Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <h2><img  className="header-logo" src={logoImage}/></h2>
                </div>
                <div className="container">
                    <div className="col-md-8">
                        {
                            this.props.containers.hasErrors ?
                                <div className="alert alert-danger" role="alert">
                                    {this.props.containers.errorsMsg}
                                </div>
                            : null
                        }
                    </div>
                </div>
                <div className="container">
                    <ContainerInput decryptContainer={this.props.actions.decryptContainer}/>
                </div>
                <div className="container">
                    {
                        this.props.containers.showDecryptedContainer ?
                        <DecryptedContainerItem
                            containers={this.props.containers}
                        />
                        : null
                    }
                </div>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)