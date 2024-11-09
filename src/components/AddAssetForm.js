import React, { useState } from 'react';

function AddAssetForm({ addAsset }) {
  const [name, setName] = useState('');
  const [initialValue, setInitialValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAsset({ name, initialValue: parseFloat(initialValue), currentValue: parseFloat(currentValue) });
    setName('');
    setInitialValue('');
    setCurrentValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Asset Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Initial Value" value={initialValue} onChange={(e) => setInitialValue(e.target.value)} required />
      <input placeholder="Current Value" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} required />
      <button type="submit">Add Asset</button>
    </form>
  );
}

export default AddAssetForm;
