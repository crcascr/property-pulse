import { FaXmark } from "react-icons/fa6";

interface Props {
  label: string;
  rate?: number;
}

export const Rate = ({ label, rate }: Props) => {
  const isAvailable = typeof rate === "number";

  const formattedRate = isAvailable
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(rate!)
    : null;

  return (
    <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
      <div className="text-gray-500 mr-2 font-bold">{label}</div>
      {isAvailable ? (
        <div className="text-2xl font-bold text-blue-500">{formattedRate}</div>
      ) : (
        <div className="text-2xl font-bold">
          <FaXmark className="text-red-700" />
        </div>
      )}
    </div>
  );
};
