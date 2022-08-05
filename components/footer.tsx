import { PropsWithChildren } from "react";
import Container from "./container";
import Image from "next/future/image";

const Footer = (props: PropsWithChildren) => {
  return (
    <footer className="py-12">
      <Container>
        <div className="self-start col-span-2">
          <a href="https://cleanattitude.net/" className="flex items-center">
            <Image
              src="/logos/ca-icon.webp"
              alt="logo"
              width={30}
              height={30}
              className="mr-2"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Clean Attitude
            </span>
          </a>
        </div>
        <div className="col-span-10 flex items-center justify-end">
          <div className="flex flex-col text-right">
            <div>
              <h1>Contact Us</h1>
              <a href="tel:+1(619) 843-4747">{"(619) 843-4747"}</a>
            </div>
            <div className="mt-2">
              <h1>Hours of Operation</h1>
              <span>{"Monday - Friday, 8am - 6pm"}</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
