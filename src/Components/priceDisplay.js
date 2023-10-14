import React from 'react';

const PriceDisplay = ({ selectedStock, stockData }) => {
  const stock = stockData.find((stock) => stock.symbol === selectedStock);

  if (!stock) {
    return <div className='d-flex justify-content-center'>Loading...</div>;
  }

  return (
    <div className='d-flex justify-content-center mt-3'>
      <h2>Current Price for {stock.symbol}:</h2>
      <p>${stock.price.toFixed(2)}</p>
    </div>
  );
};

export default PriceDisplay;
