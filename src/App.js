import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Login from "./Login";
import config from "./config";

// Configure Amplify
Auth.configure(config.Auth);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          console.log(user);
          setLoggedIn(true);
          setCurrentUser(user);
        }
      } catch (err) {
        console.error(err);
        console.error("User is not logged in.");
      }
    };

    init();
  }, []);

  const handleLoggedIn = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setLoggedIn(true);
      setCurrentUser(user);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = () => {
    Auth.signOut();
    setLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Your App</h1>
      </header>
      <main>
        {loggedIn ? (
          <>
            <code>
              {JSON.stringify({
                id: currentUser.attributes.sub,
                username: currentUser.username
              })}
            </code>
            <br />
            <button onClick={handleSignOut} style={{ marginTop: 16 }}>
              Sign Out
            </button>
          </>
        ) : (
          <Login onLoggedIn={handleLoggedIn} />
        )}
      </main>
    </div>
  );
}

export default App;
