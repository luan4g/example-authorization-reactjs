import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  function handleSignIn() {
    signIn();
  }

  return (
    <div className="container">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <button onClick={handleSignIn}>
        Sign in
      </button>
    </div>
  )
}

export default SignIn;