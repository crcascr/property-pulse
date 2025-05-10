import { ReactNode } from "react";
import "@/assets/styles/globals.css";
import { Metadata } from "next";

interface Props {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: "Property Pulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords:
    "rental, find rental, property, real estate, apartment, house, flat, home, land, property manager, real estate agent, real estate broker, rental agent, rental broker, property broker, property manager, property agent, apartment manager",
};

export default function MainLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
