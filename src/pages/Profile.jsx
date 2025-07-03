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
    <div className="p-6 bg-[#0B1C39] text-white">
      <h3 className="text-2xl font-bold text-yellow-400 mb-6">
        Generate API Key for eSign
      </h3>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Generate Button (Always visible) */}
        <button
          onClick={generateApiKey}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-lg px-6 py-2 rounded shadow hover:opacity-90 transition"
        >
          Generate API Key
        </button>

        {/* Copy Button (Only visible if API key is generated) */}
        {apiKey && (
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 text-white text-lg px-6 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Copy to Clipboard
          </button>
        )}
      </div>

      {/* API Key Display */}
      {apiKey && (
        <div className="mt-6 border border-yellow-500 rounded-lg p-4">
          <p className="text-yellow-300 font-mono break-all">
            <strong>API Key:</strong> {apiKey}
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile;
