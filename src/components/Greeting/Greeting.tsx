type GreetingProps = {
  name: string;
  isMorning?: boolean;
};

const Greeting = ({ name, isMorning = true }: GreetingProps) => {
  return (
    <h1 className="text-xl font-semibold text-gray-700">
      {isMorning ? `Good morning, ${name}!` : `Good evening, ${name}!`}
    </h1>
  );
};

export default Greeting;
