import { email, github, linkedin, telegram, twitter } from "@/lib/socials";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col-reverse gap-4 py-8 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Wubshet Zeleke</p>
        <SocialLinks
          size="sm"
          socials={[email, linkedin, github, twitter, telegram]}
        />
      </div>
    </footer>
  );
};

export default Footer;
