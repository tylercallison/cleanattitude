import { PropsWithChildren } from "react";

const Footer = (props: PropsWithChildren) => {
  return (
    <div className="container grid grid-cols-12 mx-auto p-4">
      {props.children}
    </div>
  );
};

export default Footer;
