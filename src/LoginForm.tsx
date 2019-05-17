import * as React from 'react';
import InputField from './form_fields/InputField';
import ILoginProps from './interfaces/ILoginProps';

const LoginForm: React.SFC<ILoginProps> = ({ directoryName, error, onSubmit, fieldConfig }) => {

    const InputRefs = {};

    const [displayError, toggleErrorDisplay] = React.useState(error || false);

    const fields = fieldConfig ? fieldConfig.map((field, index) => {
        const ref = React.createRef<HTMLInputElement>();
        InputRefs[field.type] = ref;
        return (
            <InputField
                key={index}
                type={field.type}
                label={field.label}
                maxLength={field.maxLength}
                size={field.size}
                ref={ref}
            />
        );
    }) : null;
    
    const onLogin = (e) => {
        e.preventDefault();
        const loginPayload = InputRefs;
        onSubmit(loginPayload);
    };

    return (
        <div>
            <div className="modal-backdrop full-height" />
            <div className="modal show">
                <div className="modal-dialog">
                    <form onSubmit={onLogin} className="modal-content">
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
                            {error && displayError ? 
                                (
                                    <div className="center-notifications notifications">
                                        <div className="notification alert alert-danger">
                                            <button onClick={() => toggleErrorDisplay(false)} className="close">
                                                <span>{'\u00D7'}</span>
                                            </button>
                                            <span>{error}</span>
                                        </div>
                                    </div>
                                )
                                : null
                            }
                            {fields}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
