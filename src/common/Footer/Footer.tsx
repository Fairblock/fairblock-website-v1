import { Link } from "react-router-dom";
// icons
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex items-start justify-between p-4 sm:px-8 my-12 mx-auto max-w-[1920px]">
      <div className="flex flex-col gap-6">
        <div className="flex gap-2 sm:gap-4 items-center">
          <img
            className="h-8 sm:h-14"
            src="/common/fairblock-logo.svg"
            alt="fairblock-logo"
          />
        </div>
        <p className="text-base sm:text-2xl">
          © 2025 Fairblock. All rights reserved.
        </p>
        <div className="flex gap-6 text-primary-blue text-2xl sm:text-3xl">
          <a
            href="https://x.com/0xfairblock"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://discord.com/invite/fairblock"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaDiscord />
          </a>
          <a href="https://t.me/+HvfLo4NFTvw3NTU0" rel="noopener noreferrer" target="_blank">
            <RiTelegram2Fill />
          </a>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-8 sm:pr-4 font-light text-primary-blue text-sm sm:text-base">
        <div className="flex flex-col gap-4">
          {/* <a
            href="https://docs.fairblock.network/docs/welcome/Vision"
            rel="noopener noreferrer"
            target="_blank"
          >
            Docs
          </a> */}
          <a
            href="https://github.com/Fairblock"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <Link to="/articles">News</Link>
          <a
            href="https://ballistic-sail-a4e.notion.site/Fairblock-Brand-Kit-4602243ba91c44b385dfdc9fccc426dc"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brandkit
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/careers">Careers</Link>
          <a
            href="https://fairblock.notion.site/Fairblock-Builders-Program-RFP-List-69cd0c7747904e89bd27257a359a80f1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Building&ensp;
            <br className="sm:hidden" />
            program
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
