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
        id: 2,
        originalDoc: 'Agreement.pdf',
        signedDoc: 'Signed Agreement.pdf',
        signedTime: '2025-07-01 11:00 AM',
        sentTime: '2025-07-01 10:30 AM',
    },
];

const Transactions = () => {
    return (
        <div className="p-6 text-white">
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">Transaction History</h2>

            <div className="space-y-4">
                {transactions.map((tx) => (
                    <div
                        key={tx.id}
                        className="bg-[#0E2A47] border border-yellow-500 rounded-lg shadow-md px-6 py-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center"
                    >
                        {/* Original Document Button */}
                        <div>
                            <p className="text-sm text-gray-300 mb-1">Original Document:</p>
                            <h2
                                className=" text-blue-300 font-medium "
                            >
                                {tx.originalDoc}
                            </h2>
                        </div>

                        {/* Sent Time */}
                        <div>
                            <p className="text-sm text-gray-300 mb-1">Sent Time:</p>
                            <p className="text-white">{tx.sentTime}</p>
                        </div>

                        {/* Signed Time */}
                        <div>
                            <p className="text-sm text-gray-300 mb-1">Signed Time:</p>
                            <p className="text-white">{tx.signedTime}</p>
                        </div>

                        {/* Signed Document */}
                        <div>
                            <p className="text-sm text-gray-300 mb-1">Signed Document:</p>
                            <p className="text-green-400 font-semibold text-sm truncate w-48">{tx.signedDoc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transactions;
