import * as React from 'react';

const TextInput = React.forwardRef<HTMLInputElement, any>((props, ref) => (
    <React.Fragment>
        <label>
            {props.label}
            <span className="input-required"> *</span>
        </label>
        <input
            required
            type={props.type}
            maxLength={props.maxLength}
            size={props.size}
            className="form-control"
            ref={ref}
        />
        <span className="help-block" />
    </React.Fragment>
));

TextInput.displayName = 'Input Field';
export default TextInput;
