import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{
      padding: '20px',
      margin: '20px auto',
      textAlign: 'center',
    }}>
      <h2 style={{ color: '#ffffff', fontSize: '48px' }}>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
