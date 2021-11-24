import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useMoralis } from "react-moralis";
import style from "./wallet-manager.module.css";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import metamask from "../../assets/images/metamask.png";
import walletconnect from "../../assets/images/walletConnect.svg";
import Button from "./button";
import shortedAddress from "../../utils/shortenAddress";
import { useDapp } from "../../providers/DappProvider/DappProvider";

const providers = [
  {
    options: {},
    displayName: "MetaMask",
    icon: metamask,
  },
  {
    options: { provider: "walletconnect" },
    displayName: "WalletConnect",
    icon: walletconnect,
  },
];

function WalletManager({ isOpen, onCloseModal }) {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const { walletAddress} = useDapp();
  const [copied, setCopied] = useState(false);

  const addressCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <Transition appear show={isOpen && !isAuthenticated} as={Fragment}>
        <Dialog as="div" className={style.wallet_dialog} onClose={onCloseModal}>
          <div className={style.wallet_dailog_containter}>
            <Dialog.Overlay className={style.wallet_dialog_overlay} />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className={style.wallet_dialog_containter_spacer}
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={style.wallet_dialog_content}>
                <div className={style.wallet_dialog_header}>
                  <Dialog.Title as="h3" className={style.wallet_dialog_title}>
                    Connect your wallet
                  </Dialog.Title>

                  <span
                    onClick={onCloseModal}
                    className={style.wallet_dialog_close}
                  >
                    &times;
                  </span>
                </div>

                <div className={style.wallet_dialog_body}>
                  <div className={style.wallet_dialog_notice}>
                    <p>
                      By connecting a wallet, you agree to This Dapp's
                      <Link className="dapp_link" to="/terms">
                        {" "}
                        Terms of Service
                      </Link>{" "}
                      and acknowledge that you have read and understand the
                      Dapps's Disclaimer.
                    </p>
                  </div>
                </div>

                <div className={style.wallet_dialog_providers}>
                  <ul className={style.wallet_dialog_providers_list}>
                    {providers.map(({ options, displayName, icon }, key) => (
                      <li key={key}>
                        <button onClick={() => authenticate(options)}>
                          <img src={icon} alt={displayName} />
                          <span>{displayName}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOpen && isAuthenticated} as={Fragment}>
        <Dialog as="div" className={style.wallet_dialog} onClose={onCloseModal}>
          <div className={style.wallet_dailog_containter}>
            <Dialog.Overlay className={style.wallet_dialog_overlay} />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className={style.wallet_dialog_containter_spacer}
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={style.wallet_dialog_content}>
                <div className={style.wallet_dialog_header}>
                  <Dialog.Title as="h3" className={style.wallet_dialog_title}>
                    Account
                  </Dialog.Title>

                  <span
                    onClick={onCloseModal}
                    className={style.wallet_dialog_close}
                  >
                    &times;
                  </span>
                </div>

                <div className={style.wallet_dialog_body}>
                  <div className={style.wallet_dialog_provider}>
                    <p>Connected with X</p>
                    <Button
                      type="outlined"
                      handleClick={logout}
                      className={style.wallet_dialog_disconnect}
                    >
                      Disconnect
                    </Button>
                  </div>

                  <div className={style.wallet_dialog_address}>
                    <p>{shortedAddress(walletAddress, 6, 6)}</p>
                    <div className={style.wallet_dialog_address_copy_etherscan}>
                      <CopyToClipboard
                        text={walletAddress}
                        onCopy={() => addressCopied()}
                      >
                        <p className={style.wallet_dialog_bottom_text}>
                          <img
                            src={require("../../assets/images/copy.svg")}
                            alt="etherscan"
                          />
                          <span>Copy address</span>
                          {copied ? (
                            <span className={style.tooltip}>Copied.</span>
                          ) : null}
                        </p>
                      </CopyToClipboard>

                      <p className={style.wallet_dialog_bottom_text}>
                        <a
                          href={`https://etherscan.io/address/${walletAddress}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={require("../../assets/images/xternal-link.svg")}
                            alt="etherscan"
                          />
                          <span>View on Etherscan</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default WalletManager;
