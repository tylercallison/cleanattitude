type CardProps = {
  className?: string;
  children: React.ReactElement; // image
  description: string;
  title: string;
};

const Card = ({ description, title, children }: CardProps) => {
  return (
    <div className="col-span-4 border drop-shadow rounded-md justify-start text-left flex h-min bg-white hover:drop-shadow-md mb-0 self-center flex-col p-4">
      <h2 className="text-lg font-medium mb-2">{title}</h2>
      {children}
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

export default Card;
