import React, { Component } from 'react'

class ContainerInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            inputText: '',
            inputPassword: '',
            type: 'password',
            class: 'glyphicon glyphicon-eye-open'
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.decryptContainer(this.state.inputText, this.state.inputPassword);
    }
    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
    }
    handlePasswordChange(event){
        this.setState({
            inputPassword: event.target.value
        })
    }

    showHidePassword(event){
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
                <form className="bs-example bs-example-form" onSubmit={this.handleSubmit.bind(this)}>

                    <div className="input-group">
                        <label htmlFor="containerInput">Enter your container here:</label>
                        <textarea
                            className="form-control"
                            value={this.state.inputText}
                            onChange={this.handleChange.bind(this)}
                            id="containerInput"
                            rows="10"
                            cols="100"
                        >
                        </textarea>
                    </div>

                    <br/>
                    <label htmlFor="passwordInput">Enter your password here:</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            type={this.state.type}
                            value={this.state.inputPassword}
                            onChange={this.handlePasswordChange.bind(this)}
                            aria-describedby="password_show"
                            id="passwordInput"
                        />
                        <span className="input-group-btn">
                            <button onClick={this.showHidePassword.bind(this)}
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
                    <input type='submit' value="Decrypt" className="btn btn-default"/>
                </form>
            </div>

        )
    }

}

export default ContainerInput
