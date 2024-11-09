import React from 'react';

function AssetList({ assets }) {
  return (
    <div>
      <h2>Assets</h2>
      <ul>
        {assets.map((asset, index) => (
          <li key={index}>
            {asset.name}: Initial Value: ${asset.initialValue}, Current Value: ${asset.currentValue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssetList;
