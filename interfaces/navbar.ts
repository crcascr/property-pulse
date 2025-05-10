import { ReactNode } from "react";

export interface NavItemProps {
  href: string;
  text: string;
  selected?: boolean;
  icon?: ReactNode;
}


