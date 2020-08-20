import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useContext(AuthContext)

  function handleSignOut() {
    signOut()
  }

  return (
    <div className="container">
      <button onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  )
}

export default Dashboard;