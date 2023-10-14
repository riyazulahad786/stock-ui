import React from 'react';

const StockSelector = ({ selectedStock, setSelectedStock, stockData }) => {
  const handleChange = (e) => {
    setSelectedStock(e.target.value);
  };

  return (
    <div className='d-flex justify-content-center mt-3'>
      <label>Select a stock: </label>
      <select value={selectedStock} onChange={handleChange}>
        {stockData.map((stock) => (
          <option key={stock._id} value={stock.symbol}>
            {stock.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StockSelector;
