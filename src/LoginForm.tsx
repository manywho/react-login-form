import * as React from 'react';
import ILoginProps from './interfaces/ILoginProps';

interface ILoginState {
    username?: string;
    password?: string;
    usernameError?: string;
    passwordError?: string;
    loading?: {
        message: string;
    };
    faults?: null;
}

class LoginForm extends React.Component<ILoginProps, ILoginState> {

    constructor(props) {
        super(props);

        this.state = {
            username: props.username || '',
            password: '',
            usernameError: '',
            passwordError: '',
            faults: null,
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.dismiss = this.dismiss.bind(this);
    }

    
    onEnter(e) {
        if (e.keyCode && e.keyCode === 13) {
            this.props.onSubmit();
        }
    }
    
    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    dismiss() {
        this.setState({ faults: null });
    }

    render() {
        let faults = null;
        if (this.state.faults) {
            faults = (
                <ul className="center-notifications notifications">
                    <li>
                        <div className="notification alert alert-danger">
                            <button className="close" onClick={this.dismiss}>
                                <span>{'\u00D7'}</span>
                            </button>
                            <span>{this.state.faults}</span>
                        </div>
                    </li>
                </ul>
            );
        }

        let usernameClassName = 'form-group';
        let passwordClassName = 'form-group';

        if (!this.state.usernameError) {
            usernameClassName += ' has-error';
        }

        if (!this.state.passwordError) {
            passwordClassName += ' has-error';
        }

        return (
            <div>
                <div className="modal-backdrop full-height" />
                <div className="modal show">
                    <div className="modal-dialog" onKeyUp={this.onEnter}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Login</h4>
                            </div>
                            <div className="modal-body">
                                <p>
                                    Directory:
                                    <strong>{this.props.directoryName}</strong>
                                </p>
                                <div className={usernameClassName}>
                                    <label>
                                        Username
                                        <span className="input-required"> *</span>
                                    </label>
                                    <input
                                        type="text"
                                        maxLength={255}
                                        size={60}
                                        className="form-control"
                                        value={this.state.username || ''}
                                        onChange={this.handleUsernameChange}
                                        id="mw-username"
                                    />
                                    <span className="help-block">
                                        {this.state.usernameError}
                                    </span>
                                </div>
                                <div className={passwordClassName}>
                                    <label>
                                        Password
                                        <span className="input-required"> *</span>
                                    </label>
                                    <input
                                        type="password"
                                        maxLength={255}
                                        size={60}
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={this.handlePasswordChange}
                                        id="mw-password"
                                    />
                                    <span className="help-block">
                                        {this.state.passwordError}
                                    </span>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                            {faults}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
