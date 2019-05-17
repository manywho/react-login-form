import * as React from 'react';
import classNames from 'classnames';

const TextInput = React.forwardRef<HTMLInputElement, any>(({ label, type, maxLength, size, errorText }, ref) => {

    const [displayError, toggleErrorDisplay] = React.useState(null);

    const validate = (e) => {
        if (e.target.value.length < 2) {
            toggleErrorDisplay(errorText);
        } else {
            toggleErrorDisplay('');
        }
    };

    const classes = classNames(
        { 'form-group': true, 'has-error': displayError },
    );

    return (
        <div className={classes}>
            <label>
                {label}
                <span className="input-required"> *</span>
            </label>
            <input
                required
                onKeyUp={validate}
                type={type}
                maxLength={maxLength}
                size={size}
                className="form-control"
                ref={ref}
            />
            <span className="help-block">{displayError}</span>
        </div>
    );
});

TextInput.displayName = 'Input Field';
export default TextInput;
