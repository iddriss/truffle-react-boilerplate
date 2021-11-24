import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import DappContext from "./context";

function DappProvider({ children }) {
  const { web3, Moralis, user } = useMoralis();
  const [walletAddress, setWalletAddress] = useState();
  const [chainId, setChainId] = useState();
  useEffect(() => {
    Moralis.onChainChanged(function (chain) {
      setChainId(chain);
    });

    Moralis.onAccountsChanged(function (address) {
      setWalletAddress(address[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setChainId(web3.givenProvider?.chainId));

  useEffect(
    () =>
      setWalletAddress(
        web3.givenProvider?.selectedAddress || user?.get("ethAddress")
      ),
    [web3, user]
  );

  return (
    <DappContext.Provider value={{ walletAddress, chainId }}>
      {children}
    </DappContext.Provider>
  );
}

function useDapp() {
  const context = React.useContext(DappContext);
  if (context === undefined) {
    throw new Error("useDapp must be used within a DappProvider");
  }
  return context;
}

export { DappProvider, useDapp };
