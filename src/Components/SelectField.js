import React from 'react';

const SelectField = ({ label, name, value, onChange, options, error }) => {
  return (
    <div>
      <p className={error ? 'input-error' : ''}>{label} *</p>
      <select
        name={name}
        className={`input-texto-esencial-select ${error ? 'input-error' : ''}`}
        value={value}
        onChange={onChange}
        required
      >
        <option value="">Seleccione una opción</option>
        {options.map((option, key) => (
          <option key={key} value={option}>{option}</option>
        ))}
      </select>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default SelectField;
