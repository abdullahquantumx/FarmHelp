'use client'

import React, { useState } from 'react';

const CropPrediction = () => {
  const [inputData, setInputData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const labels = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Prevent negative values
    const sanitizedValue = value < 0 ? '' : value;
    setInputData({
      ...inputData,
      [name]: sanitizedValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const inputDataArray = labels.map(label => inputData[label]);
      const response = await fetch(`http://localhost:5000/predict?inputData=${inputDataArray.join(',')}`);
      console.log(response);
      const data = await response.json();

      // Check the prediction result
      if (response.ok) {
        setSubmitMessage(`Predicted crops: ${data.yield_prediction}`);
        // Optionally, you can scroll to the result here if needed.
      } else {
        setSubmitMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error during API call:', error);
      setSubmitMessage('Error during API call. Please try again.');
    }
  };

  return (
    <div className="w-screen h-min-screen bg-gray-50 dark:bg-green-900 flex justify-center items-center">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Crop Prediction</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {labels.map((label, index) => (
            <div key={index}>
              <label htmlFor={label} className="block font-medium text-white">{label}</label>
              <input 
                type="number" 
                id={label} 
                name={label} 
                value={inputData[label]} 
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 bg-green-300"
                required 
              />
            </div>
          ))}
          <button type="submit" className="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
        {submitMessage && (
          <div className="mt-4 p-3 rounded bg-green-200 text-green-800">
            <p className="font-semibold">Prediction Result:</p>
            <p>{submitMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropPrediction;
