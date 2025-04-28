import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search fruits..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '10px',
        width: '300px',
        marginBottom: '20px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '16px'
      }}
    />
  );
};

export default SearchBar;