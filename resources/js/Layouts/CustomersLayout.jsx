import Navbar from "@/Components/Navbar";
import React from "react";

export default function CustomersLayout({ auth, children }) {
  return (
    <>
      <div className="bg-[#b08968]">
        <Navbar auth={auth} />
      </div>
      <div className="">{children}</div>
    </>
  );
}
