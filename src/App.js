import React, { useState } from 'react';

function ItemListManager() {
  const [items, setItems] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  const handleAddItem = () => {
    if (inputValue.trim() === '') {
      return; 
    }
    setItems([...items, inputValue.trim()]); 
    setInputValue(''); 
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '50px auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Item List</h1>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        onClick={handleAddItem}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Item
      </button>
      <ul style={{ marginTop: '20px', padding: '0', listStyle: 'none', textAlign: 'left' }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              backgroundColor: '#f8f8f8',
              padding: '10px',
              margin: '5px 0',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;