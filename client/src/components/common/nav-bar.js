import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./button";
import styles from "./nav-bar.module.css";
import "./nav-bar.global.css";

import logo from "../../assets/images/logo.png";
import WalletManager from "./wallet-manager";
import shortedAddress from "../../utils/shortenAddress";
import { useDapp } from "../../providers/DappProvider/DappProvider";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  let { walletAddress } = useDapp();

  function closeModal() {
    setIsDialogOpen(false);
  }

  function openModal() {
    setIsDialogOpen(true);
  }

  return (
    <>
      <div className={`${styles.nav_container}`}>
        <div className={`${styles.nav_wrapper}`}>
          <NavLink to="/">
            <img
              className={styles.logo}
              src={logo}
              height="33"
              alt="Logo"
            />
          </NavLink>

          <div className={styles.nav_mobile}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={` ${styles.mobile_menu} ${
                isOpen ? styles.opened : ""
              }`}
              aria-label="Main Menu"
              aria-expanded={isOpen}
            >
              <svg className="fill-current h-8 w-8" viewBox="0 0 38 34">
                <g fillRule="nonzero">
                  <g
                    id="close"
                    className={`${styles.svgGroups} ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <path d="m6.326 25.671 21.508-21.508c1.134-1.135 2.904-1.192 3.968-0.128s1.007 2.834-0.128 3.968l-21.508 21.508c-1.134 1.135-2.904 1.192-3.968 0.128s-1.007-2.834 0.128-3.968z" />
                    <path d="m6.326 8.003 21.508 21.508c1.134 1.135 2.904 1.192 3.968 0.128s1.007-2.834-0.128-3.968l-21.508-21.508c-1.134-1.135-2.904-1.192-3.968-0.128s-1.007 2.834 0.128 3.968z" />
                  </g>
                  <g
                    id="open"
                    className={`${isOpen ? "opacity-0" : "opacity-100"}`}
                  >
                    <path d="m3.792 3.258h30.416c1.605 0 2.897 1.211 2.897 2.716s-1.292 2.716-2.897 2.716h-30.416c-1.605-0-2.897-1.211-2.897-2.716s1.292-2.716 2.897-2.716z" />
                    <path d="m3.234 14.121h30.417c1.605 0 2.897 1.211 2.897 2.716s-1.292 2.716-2.897 2.716h-30.417c-1.605-0-2.897-1.211-2.897-2.716s1.292-2.716 2.897-2.716z" />
                    <path d="m3.792 24.984h30.416c1.605 0 2.897 1.211 2.897 2.716s-1.292 2.716-2.897 2.716h-30.416c-1.605-0-2.897-1.211-2.897-2.716s1.292-2.716 2.897-2.716z" />
                  </g>
                </g>
              </svg>
            </button>
          </div>

          <div
            className={` ${isOpen ? styles.opened : ""} ${styles.nav_content} `}
          >
            <ul className={styles.nav_content_ul}>
              <li>
              <NavLink to="/" className={`${styles.navLink}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dapp" className={`${styles.navLink}`}>
                  Dapp
                </NavLink>
              </li>
              <li>
                <Button
                  type="outlined"
                  className="capitalize xl:px-5 xl:py-2 px-5 py-2 text-sm"
                  onClick={openModal}
                >
                  {walletAddress
                    ? shortedAddress(walletAddress)
                    : `Connect Wallet`}
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <WalletManager isOpen={isDialogOpen} onCloseModal={closeModal} />
    </>
  );
}

export default NavBar;
