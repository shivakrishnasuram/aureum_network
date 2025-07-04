import React, { useState } from 'react';

const AadhaarESign = () => {
  const [checkboxes, setCheckboxes] = useState({
    terms: false,
    consent: false,
  });

  const handleCheckboxChange = (e) => {
    setCheckboxes({
      ...checkboxes,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSign = () => {
    if (!checkboxes.terms || !checkboxes.consent) {
      alert('Please accept both checkboxes to proceed.');
      return;
    }
    alert('Document signed successfully!');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
        {/* Header with logos */}
        <div className="flex justify-between items-center">
          <img src="/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMGXA0b7AfiEVrUFNGYHGbbS6Q-Xo4qudQg&s" alt="Aadhaar Logo" className="h-12" />
          <img src="/aureum-logo.png" alt="Aureum Network" className="h-10" />
        </div>

        <h2 className="text-center text-lg font-semibold text-gray-600">
          Welcome to Aadhaar eSign
        </h2>

        {/* Document Preview */}
        <div className="w-full h-64 bg-gray-300 rounded-lg shadow-inner"></div>

        {/* Download link */}
        <p className="text-center italic text-sm text-gray-600">
          click here to download document
        </p>

        {/* Checkboxes */}
        <div className="space-y-3 text-sm text-gray-800">
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="terms"
              checked={checkboxes.terms}
              onChange={handleCheckboxChange}
              className="mt-1"
            />
            <span>
              I have read and understood the terms & conditions of Aureum Network Aadhaar eSign services.
            </span>
          </label>

          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="consent"
              checked={checkboxes.consent}
              onChange={handleCheckboxChange}
              className="mt-1"
            />
            <span>
              I confirm that I have received the document on my email address <b>xyz@abc.com</b> and I further
              confirm that I have read the document and I hereby give my consent to sign the document using my Aadhaar eSign.
            </span>
          </label>
        </div>

        {/* Sign Button */}
        <div className="text-center pt-4">
          <button
            onClick={handleSign}
            className={`px-6 py-2 rounded-md text-white font-semibold ${
              checkboxes.terms && checkboxes.consent
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!(checkboxes.terms && checkboxes.consent)}
          >
            Sign Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default AadhaarESign;
