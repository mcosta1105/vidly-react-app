import React from "react";

const Select = ({ name, label, items, error }) => {
  return (
    <div className="form-group">
      <label for={name}>{label}</label>
      <select className="form-control" id={name}>
        {items.map(item => (
          <option>{item.name}</option>
        ))}
      </select>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </div>
  );
};

export default Select;
