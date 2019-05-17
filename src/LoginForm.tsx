import * as React from 'react';
import ILoginProps from './interfaces/ILoginProps';

const LoginForm: React.SFC<ILoginProps> = ({ directoryName, error, onSubmit }) => {

    const username = React.createRef<HTMLInputElement>();
    const password = React.createRef<HTMLInputElement>();
    
    const onLogin = () => {
        const loginPayload = {
            username: username.current.value,
            password: password.current.value,
        };
 
        onSubmit(loginPayload);
    };

    return (
        <div>
            <div className="modal-backdrop full-height" />
            <div className="modal show">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Login</h4>
                        </div>
                        <div className="modal-body">
                            <p>
                                Directory: 
                                <strong>
                                    {directoryName}
                                </strong>
                            </p>
                            {error ? 
                                (
                                    <div className="center-notifications notifications">
                                        <div className="notification alert alert-danger">
                                            <button className="close">
                                                <span>{'\u00D7'}</span>
                                            </button>
                                            <span>{error}</span>
                                        </div>
                                    </div>
                                )
                                : null
                            }
                            <div>
                                <label>
                                    Username
                                    <span className="input-required"> *</span>
                                </label>
                                <input
                                    type="text"
                                    maxLength={255}
                                    size={60}
                                    className="form-control"
                                    id="mw-username"
                                    ref={username}
                                />
                                <span className="help-block" />
                            </div>
                            <div>
                                <label>
                                    Password
                                    <span className="input-required"> *</span>
                                </label>
                                <input
                                    type="password"
                                    maxLength={255}
                                    size={60}
                                    className="form-control"
                                    id="mw-password"
                                    ref={password}
                                />
                                <span className="help-block" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={onLogin}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
