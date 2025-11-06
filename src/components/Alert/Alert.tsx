type AlertProps = {
  type: "success" | "error" | "warning";
  message: string;
};

const Alert = ({ type, message }: AlertProps) => {
  const color =
    type === "success"
      ? "text-green-600"
      : type === "error"
      ? "text-red-600"
      : "text-yellow-600";

  return (
    <div role="alert" className={`p-2 ${color}`}>
      {message}
    </div>
  );
};

export default Alert;
