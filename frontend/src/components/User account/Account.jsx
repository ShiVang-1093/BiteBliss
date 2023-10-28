import React, { useState } from 'react';
import Profile from './Profile';
import Coupens from './Coupens';
import Orders from './Orders';
// import Logout from './Logout';

const Account = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClick = () => {
    setShowPopup(!showPopup);
  };


  return (
    <div>
      <button onClick={handlePopupClick}>Account</button>
      {showPopup && (
        <div>
          <button>{<Profile/>}</button>
          <button>{<Coupens/>}</button>
          <button>{<Orders/>}</button>
          {/* <button ><Logout/></button> */}
        </div>
      )}
    </div>
  );
};

export default Account;
