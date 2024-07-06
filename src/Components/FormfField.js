import React from 'react';

const FormField = ({ label, name, value, onChange, error }) => {
  return (
    <div>
      <p className={error ? 'input-error' : ''}>{label} *</p>
      <input
        className={`input-texto ${error ? 'input-error' : ''}`}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        required
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormField;
