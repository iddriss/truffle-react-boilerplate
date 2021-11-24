import React from "react";
import style from "./footer.module.css";
import telegram from "../../assets/images/telegram.svg";
import reddit from "../../assets/images/reddit.svg";
import discord from "../../assets/images/discord.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";

const socials = [
  {
    icon: telegram,
    name: "Telegram",
    link: "https://t.me/",
  },
  {
    icon: reddit,
    name: "Reddit",
    link: "https://www.reddit.com/r/",
  },
  {
    icon: discord,
    name: "Discord",
    link: "https://discord.gg/",
  },
  {
    icon: twitter,
    name: "Twitter",
    link: "https://www.twitter.com/",
  },
  {
    icon: instagram,
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
];

function Footer() {
  return (
    <>
      <div className={style.footer_container}>
        <div className={`${style.footer_wrapper}`}>
          <div className={style.footer_cright}>
            <div className={style.footer_cright_container}>
              <p>
                Dapp &copy; {new Date().getFullYear()}. All rights
                reserved.
              </p>
              <span className=" text-sm pt-0 pb-2">
                Built by{" "}
                <a
                  className=" text-yellow-300"
                  href="https://t.me/OnChainDetective"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Embrace Tech
                </a>
              </span>
            </div>
          </div>

          <div className={style.footer_socials}>
            {socials.map(({ icon, name, link }, indx) => {
              return (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={indx}
                  className="p-2"
                >
                  <img
                    className=""
                    src={icon}
                    height="27"
                    width="27"
                    alt={name}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
