import React from "react";
import { useMoralis } from "react-moralis";

import "./App.css";

function App() {
  const {
    isInitializing,
    isInitialized,
    authenticate,
    user,
    authError,
    isAuthenticated,
    isAuthenticating,
    logout,
  } = useMoralis();

  if (isInitializing) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!isInitialized) {
    <h1>!Failed</h1>;
  }

  return (
    <div className="App">
      <h1 className="text-xl">Good to Go!</h1>
      <p>Your Truffle Box is installed and ready.</p>
      <h2>Smart Contract Example</h2>
      {isAuthenticated ? (
        <div>
          <button onClick={() => logout()}>Logout</button>
        </div>
      ) : (
        <>
          <div>
            <button onClick={() => authenticate()}>Authenticate</button>
          </div>
          <div>
            <button onClick={() => authenticate({ provider: "walletconnect" })}>
              Authenticate Walletconnect
            </button>
          </div>
        </>
      )}

      <code>
        {JSON.stringify(
          {
            user,
            isAuthenticated,
            isAuthenticating,
            authError,
          },
          null,
          2
        )}
      </code>
    </div>
  );
}
export default App;
