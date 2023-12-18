import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../FemilerCom/Button/Button';
import Header from '../../FemilerCom/Header/Header'
function ResetPasswordForAdmin ()  {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetSubmit = async (event) => {
    event.preventDefault();

    // Call your backend API to initiate the password reset process
    try {
      const response = await fetch('https://reqres.in/api/users?page=2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setResetSent(true);
      } else {
        // Handle error, show message to the user
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Header />
                <div className="LogInBoxAdmin">
                <div className="LogInForAdminText">
                    <h1 className="H1tex">Reset Password</h1>
                </div>
                {resetSent ? (
                  <p>Password reset instructions sent to your email.</p>
                ) :
                (
                  <form className="SupmitForm" action="" onSubmit={handleResetSubmit}>
                  <div className="InptCont">
                          <div className="ImgAndTilte">
                              <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                              <div className="title">Email</div>
                              <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className='RegInput'
                              />                        
                              </div>
                      </div>
                          <div className="LogInForAdminBtns">
                              <div  id="HR" className="Contaner">
                                  <button type="submit" className="RegsBTN" >Send</button>
                                  <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                              </div>
                          </div>
                  </form>
                )}
            </div> 
    </>
  );
};

export default ResetPasswordForAdmin;
