
import React, { useState, useEffect } from 'react';
import StockSelector from './StockSelector';
import PriceDisplay from './priceDisplay';
import axios from 'axios';

function StockTracker () {
  const [selectedStock, setSelectedStock] = useState('AAPL');
  const [stockData, setStockData] = useState([]);

  // Function to fetch stock data   https://backend-app-dd2t.onrender.com/,  http://localhost:3001
  const fetchStockData = () => {
    axios.get('https://backend-app-dd2t.onrender.com/api/stocks')
      .then((response) => {
        setStockData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching stock data:', error);
      });
  };

  useEffect(() => {
    // Fetch stock data from the API when the component mounts
    fetchStockData();
  }, []);

  useEffect(() => {
    // Set up a timer to periodically fetch updated stock data
    const timer = setInterval(() => {
      fetchStockData();
    }, 60000); // Fetch every minute

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <h1 className='d-flex justify-content-center mt-4'>Mini Stock Price Tracker</h1>
      <StockSelector selectedStock={selectedStock} setSelectedStock={setSelectedStock} stockData={stockData} />
      <PriceDisplay selectedStock={selectedStock} stockData={stockData} />
    </div>
  );
}

export default StockTracker;

