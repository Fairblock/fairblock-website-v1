// icons
import { FaXTwitter, FaDiscord, FaGithub } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:px-8 my-12 mx-auto max-w-[1920px]">
      <img
        className="h-8 sm:h-14 w-fit"
        src="/common/fairblock-logo.svg"
        alt="fairblock-logo"
      />
      <div className="flex items-center gap-6 text-primary-blue text-2xl sm:text-3xl">
        <a href="https://x.com/0xfairblock" rel="noopener noreferrer" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://discord.com/invite/fairblock" rel="noopener noreferrer" target="_blank">
          <FaDiscord />
        </a>
        <a href="https://t.me/+HvfLo4NFTvw3NTU0" rel="noopener noreferrer" target="_blank">
          <RiTelegram2Fill />
        </a>
        <a href="https://github.com/Fairblock" rel="noopener noreferrer" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://ballistic-sail-a4e.notion.site/Fairblock-Brand-Kit-4602243ba91c44b385dfdc9fccc426dc"
          rel="noopener noreferrer"
          target="_blank"
          className="text-sm sm:text-base font-light"
        >
          Brandkit
        </a>
      </div>
      <p className="text-sm sm:text-base opacity-50">
        © 2026 Fairblock. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
