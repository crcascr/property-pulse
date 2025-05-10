import { InfoBoxProps } from "@/interfaces";
import Link from "next/link";

export const InfoBox = ({
  title,
  description,
  buttonText,
  href,
  variant,
}: InfoBoxProps) => {
  const cardStyle = () => {
    const baseStyle = "p-6 rounded-lg shadow-md";
    if (variant === "primary") {
      return `${baseStyle} bg-blue-100`;
    } else if (variant === "secondary") {
      return `${baseStyle} bg-gray-100`;
    }
    return baseStyle;
  };

  const buttonStyle = () => {
    const baseStyle = "inline-block text-white rounded-lg px-4 py-2";
    if (variant === "primary") {
      return `${baseStyle} bg-blue-500 hover:bg-blue-600`;
    } else if (variant === "secondary") {
      return `${baseStyle} bg-black hover:bg-gray-700`;
    }
    return baseStyle;
  };

  return (
    <div className={cardStyle()}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <Link href={href} className={buttonStyle()}>
        {buttonText}
      </Link>
    </div>
  );
};
