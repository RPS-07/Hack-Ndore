import React, { useState } from 'react';
import Receipt from './Receipt';

const Receipt1= () => {
  const [propertyId, setPropertyId] = useState(''); // State to hold the property ID input
  const [showReceipt, setShowReceipt] = useState(false); // State to control when to show the receipt

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReceipt(true); // Show the receipt after submitting the form
  };

  return (
    <div className="App">
      <h1>Property Payment Receipt</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Property ID:
          <input
            type="text"
            value={propertyId}
            onChange={(e) => setPropertyId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Get Receipt</button>
      </form>

      {showReceipt && <Receipt pid={propertyId} />}
    </div>
  );
};
export default Receipt1;
