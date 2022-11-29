import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function CustomersLayout({ children }) {
  const { auth } = usePage().props;
  return (
    <>
      <div className="top-0 left-0 sticky bg-[#476072] z-10 px-4 xl:px-0">
        <Navbar auth={auth} />
      </div>
      <div className="">{children}</div>
      <Footer />
    </>
  );
}
