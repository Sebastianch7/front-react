import React from 'react';

function Input({ label = '', field = '', value = '' }) {
    return (
        <div className="form-group">
            <label for={field} className="form-label">{label}</label>
            <input type="text" className="form-input" name={field} id={field} placeholder={"Enter your "+label} value={value} />
        </div>
    );
}

export default Input;