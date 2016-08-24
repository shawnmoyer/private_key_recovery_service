import React, { Component } from 'react'

class DecryptedContainerItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            type: 'password',
            class: 'glyphicon glyphicon-eye-open'
        }
    }


    showHidePrivateKey(event){
        event.preventDefault();
        this.setState({
            type: this.state.type === 'input' ? 'password' : 'input',
            class: this.state.class === 'glyphicon glyphicon-eye-open' ?
                'glyphicon glyphicon-eye-close' :
                'glyphicon glyphicon-eye-open'
        })
    }

    render() {
        return (
            <div className="col-md-8">
                    <br/>
                    <label htmlFor="privateKeyShow">Private key:</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            type={ this.state.type }
                            value={ this.props.containers.decryptedContainer.privateKey }
                            aria-describedby="privatekey_show"
                            id="privateKeyShow"
                            readOnly
                        />
                        <span className="input-group-btn">
                            <button onClick={this.showHidePrivateKey.bind(this)}
                                    className="btn btn-default"
                                    type="button">
                                <span
                                      className={ this.state.class }
                                      id="password_show">
                                </span>
                            </button>
                        </span>
                    </div>
                    <br/>
                <label htmlFor="publickKeyShow">Public key:</label>
                <div className="input-group">
                    <input
                        className="form-control"
                        type='input'
                        value={ this.props.containers.decryptedContainer.publicKey }
                        id="publickKeyShow"
                        readOnly
                    />
                </div>
                <br/>
                <label htmlFor="addressShow">Address:</label>
                <div className="input-group">
                    <input
                        className="form-control"
                        type='input'
                        value={ this.props.containers.decryptedContainer.address }
                        readOnly
                        id="addressShow"
                    />
                </div>
                <br/>
            </div>

        )
    }

}

export default DecryptedContainerItem
