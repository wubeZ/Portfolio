import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Social } from "./types";

export const email: Social = {
  title: "Email",
  link: "mailto:wubezeleke@gmail.com",
  icon: <MdEmail />,
};

export const linkedin: Social = {
  title: "LinkedIn",
  link: "https://www.linkedin.com/in/wubshet-zeleke",
  icon: <FaLinkedin />,
};

export const github: Social = {
  title: "GitHub",
  link: "https://www.github.com/wubeZ",
  icon: <FaGithub />,
};

export const twitter: Social = {
  title: "X (Twitter)",
  link: "https://www.twitter.com/wube_Z",
  icon: <FaXTwitter />,
};

export const telegram: Social = {
  title: "Telegram",
  link: "https://t.me/wube_z",
  icon: <FaTelegram />,
};
