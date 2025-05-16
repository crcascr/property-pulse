import { ReactNode } from "react";

interface Props {
  amenity: number;
  label: string;
  icon: ReactNode;
}

export const Amenity = ({ amenity, label, icon }: Props) => {
  return (
    <p className="flex items-center">
      {icon} {amenity}{" "}
      <span className="md:hidden lg:inline ml-0.5">{label}</span>
    </p>
  );
};
