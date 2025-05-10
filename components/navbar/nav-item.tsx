import { NavItemProps } from "@/interfaces/navbar";
import Link from "next/link";

// Main NavItem component
const NavItem = ({ href, text, selected, show = true, icon }: NavItemProps) => {
  if (!show) return null;
  return (
    <Link
      href={href}
      className={`text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ${
        selected ? "bg-black" : ""
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </Link>
  );
};

// Desktop variant
const Desktop = ({ href, text, selected, show = true, icon }: NavItemProps) => {
  return (
    <NavItem
      href={href}
      text={text}
      selected={selected}
      show={show}
      icon={icon}
    />
  );
};

// Mobile variant with different styling
const Mobile = ({ href, text, selected, show = true, icon }: NavItemProps) => {
  if (!show) return null;
  return (
    <Link
      href={href}
      className={`${
        selected ? "bg-gray-900 text-white" : "text-gray-300"
      } hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </Link>
  );
};

// Attach subcomponents to the main component
NavItem.Desktop = Desktop;
NavItem.Mobile = Mobile;

export default NavItem;
