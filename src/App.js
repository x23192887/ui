import React from 'react';
import UserList from './components/user';
import backgroundImage from "./assets/background.jpg";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <UserList ></UserList>
    </div>
  );
}

export default App;
