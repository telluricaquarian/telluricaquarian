import Image from "next/image";

type LaunchUILogoProps = {
  className?: string;
};

const LaunchUI = ({ className }: LaunchUILogoProps) => {
  return (
    <Image
      src="/tlrc-logo.svg"   // your new logo in /public
      alt="TLRC Logo"
      width={1862}           // from your Figma export
      height={485}
      className={className}
      priority
    />
  );
};

export default LaunchUI;
