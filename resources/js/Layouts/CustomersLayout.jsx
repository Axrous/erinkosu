import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function CustomersLayout({ children }) {
  const { auth } = usePage().props;
  return (
    <>
      <div className="bg-[#b08968]">
        <Navbar auth={auth} />
      </div>
      <div className="">{children}</div>
    </>
  );
}
