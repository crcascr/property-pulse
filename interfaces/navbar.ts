import { ReactNode } from "react";

export interface NavItemProps {
  href: string;
  text: string;
  selected?: boolean;
  show?: boolean | null;
  icon?: ReactNode;
}
