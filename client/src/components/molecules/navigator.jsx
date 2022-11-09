import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
const navigation = [
  { name: "About", href: "#" },
  { name: "Service", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Contact", href: "#" },
];

export const Nav = (props) => {
  return (
    <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="font-medium text-gray-500 hover:text-gray-900"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};
