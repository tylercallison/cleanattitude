import Image from "next/future/image";

const Social = () => {
  return (
    <div className="w-20 mt-6">
      <div className="grid grid-cols-2 items-center gap-6">
        <a href="https://www.linkedin.com/in/tyler-callison/">
          <Image
            src="/logos/linkedin.svg"
            alt="Linkedin"
            width={25}
            height={25}
            className="w-full"
          />
        </a>
        <a href="https://github.com/tylercallison">
          <Image
            src="/logos/github.svg"
            alt="Github"
            width={25}
            height={25}
            className="w-full"
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
