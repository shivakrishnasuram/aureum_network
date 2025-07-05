import React from 'react';

const transactions = [
  {
    id: 1,
    originalDoc: 'sale_Agreement A.pdf',
    signedDoc: 'Signed A.pdf',
    signedTime: '2025-07-01 10:15 AM',
    sentTime: '2025-07-01 09:45 AM',
  },
  {
    id: 2,
    originalDoc: 'Agreement.pdf',
    signedDoc: 'Signed Agreement.pdf',
    signedTime: '2025-07-01 11:00 AM',
    sentTime: '2025-07-01 10:30 AM',
  },
  {
    id: 3,
    originalDoc: 'Agreement B.pdf',
    signedDoc: 'Signed B.pdf',
    signedTime: '2025-07-01 12:00 PM',
    sentTime: '2025-07-01 11:30 AM',
  },
];

const Transactions = () => {
  return (
    <div className="p-6 bg-gray-50 text-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Transaction History</h2>
      
      <div className="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="bg-white border border-gray-300 rounded-lg shadow-md px-6 py-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center"
          >
            {/* Original Document */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Original Document:</p>
              <p className="text-blue-600 font-medium break-all">{tx.originalDoc}</p>
            </div>

            {/* Sent Time */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Sent Time:</p>
              <p className="text-gray-800">{tx.sentTime}</p>
            </div>

            {/* Signed Time */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Signed Time:</p>
              <p className="text-gray-800">{tx.signedTime}</p>
            </div>

            {/* Signed Document */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Signed Document:</p>
              <p className="text-green-600 font-semibold text-sm break-all">{tx.signedDoc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
