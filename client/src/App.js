import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useMoralis } from "react-moralis";

import "./App.css";

import TermsOfService from "./pages/common/tos";
import PrivacyPolicy from "./pages/common/privacy";
import NotFound404 from "./pages/common/not-found";
import AppLoading from "./components/common/app-loading";
import NavBar from "./components/common/nav-bar";
import Footer from "./components/common/footer";
import SomePageScope from "./pages/some_page_scope";

function App() {
  const {
    isInitializing,
    isInitialized,
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
  } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  if (isInitializing) {
    return <AppLoading />;
  }

  if (!isInitialized) {
    return <h1>Failed</h1>;
  }

  return (
    <div className="App">
      <div className="app__wrapper">
        <Router>
          <NavBar />
          <div className="app__content">
            <Routes>
              <Route path="*" element={<NotFound404 />} />

              <Route
                exact
                path="/"
                element={<Navigate replace to="/dapp" />}
              />
              <Route path="/dapp" element={<SomePageScope />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
        </Router>

        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
