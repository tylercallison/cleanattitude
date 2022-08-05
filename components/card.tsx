type CardProps = {
  className?: string;
  children: React.ReactElement; // image
  description: string;
  title: string;
};

const Card = ({ description, title, children }: CardProps) => {
  return (
    <div className="col-span-4 border rounded-md justify-start text-left flex bg-white hover:drop-shadow-md flex flex-col p-4">
      <h2 className="text-lg font-medium">{title}</h2>
      {children}
      <p className="text-sm ">{description}</p>
    </div>
  );
};

export default Card;
