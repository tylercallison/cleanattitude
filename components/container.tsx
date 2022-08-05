import clsx from "clsx";

type ContainerProps = {
  className?: string;
  children?: React.ReactElement | React.ReactElement[];
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx([className, "w-full"])}>
      <div className="grid grid-cols-12 mx-auto container">{children}</div>
    </div>
  );
};

export default Container;
