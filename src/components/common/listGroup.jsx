import React from "react";

const ListGroup = ({ items, valueProperty, textProperty, onItemSelect, selectedItem }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={item === selectedItem ? "clickable list-group-item active":"clickable list-group-item"}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};
export default ListGroup;
