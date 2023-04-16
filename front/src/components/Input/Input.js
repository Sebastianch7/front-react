import React from 'react';

function Input({ label = '', field = '', valor }) {
    return (
        <div className="form-group">
            <label for={field} className="form-label">{label}</label>
            <input type="text" className="form-input" name={field} id={field} placeholder={"Enter your "+label} 
            
            value={valor ? valor : null }
            
            />
        </div>
    );
}

export default Input;