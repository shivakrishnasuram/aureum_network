import React from 'react';
import Profile from './Profile';
import Transactions from './Transactions';

function Main() {
  return (
    <div className=" bg-[#0B1C39] text-white">
      <div className="h-full flex flex-col">
        <Profile />
        <Transactions />
      </div>
    </div>
  );
}
export default Main;
