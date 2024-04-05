'use client';

import React, { useState } from 'react';

const ChatGPT = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/generate_text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
      });

      if (response.ok) {
        const data = await response.json();
        setOutputText(data.generated_text);
      } else {
        setOutputText('Error occurred while generating text.');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutputText('Error occurred while generating text.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">ChatGPT</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <textarea
                id="input-text"
                name="input-text"
                rows="3"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your message..."
                value={inputText}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
        {outputText && (
          <div className="rounded-md bg-white shadow p-4">
            <p className="text-lg font-semibold">Generated Response:</p>
            <p className="mt-2 text-gray-600">{outputText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatGPT;
