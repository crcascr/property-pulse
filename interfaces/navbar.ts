import { Session } from "next-auth";
import { ReactNode } from "react";

export interface NavItemProps {
  href: string;
  text: string;
  selected?: boolean;
  show?: Session | null;
  icon?: ReactNode;
}
