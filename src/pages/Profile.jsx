import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Profile() {
  const [apiKey, setApiKey] = useState('');

  const generateApiKey = () => {
    const randomKey = 'key_' + Math.random().toString(36).substr(2, 16);
    setApiKey(randomKey);
    toast.success('API Key Generated!');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="p-6 bg-white text-gray-900">
      <h3 className="text-2xl font-bold text-blue-600 mb-6">
        Generate API Key for eSign
      </h3>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Generate Button (Always visible) */}
        <button
          onClick={generateApiKey}
          className="bg-blue-600 text-white text-lg px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Generate API Key
        </button>

        {/* Copy Button (Only visible if API key is generated) */}
        {apiKey && (
          <button
            onClick={copyToClipboard}
            className="bg-green-600 text-white text-lg px-6 py-2 rounded shadow hover:bg-green-700 transition"
          >
            Copy to Clipboard
          </button>
        )}
      </div>

      {/* API Key Display */}
      {apiKey && (
        <div className="mt-6 border border-blue-400 rounded-lg p-4 bg-gray-50">
          <p className="text-blue-700 font-mono break-words">
            <strong>API Key:</strong> {apiKey}
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile;
