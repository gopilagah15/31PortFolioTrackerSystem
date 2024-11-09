import React, { useState } from 'react';
import AddAssetForm from './components/AddAssetForm';
import AssetList from './components/AssetList';
import PerformanceReport from './components/PerformanceReport';

function App() {
  const [assets, setAssets] = useState([]);

  const addAsset = (asset) => {
    setAssets([...assets, asset]);
  };

  const calculatePerformance = () => {
    return assets.reduce((total, asset) => total + asset.currentValue - asset.initialValue, 0);
  };

  return (
    <div>
      <h1>Portfolio Tracker</h1>
      <AddAssetForm addAsset={addAsset} />
      <AssetList assets={assets} />
      <PerformanceReport performance={calculatePerformance()} />
    </div>
  );
}

export default App;
