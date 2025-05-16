import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

export const InformationCard = ({ title, children }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {title && <h3 className="text-xl font-bold mb-6">{title}</h3>}
      {children}
    </div>
  );
};
