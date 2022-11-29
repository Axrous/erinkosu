import { React } from "react";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar({ auth }) {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className=" flex container mx-auto text-white py-2 pt-2">
      <span className="w-6/12 md:w-3/12 text-2xl my-auto font-semibold tracking-widest">
        <Link href="/">ErinKosu</Link>
      </span>
      <div
        className={`md:w-6/12 my-auto md:block ${navbar ? "block" : "hidden"}`}
        id="navbar-default"
      >
        <ul className="flex md:justify-evenly text-base flex-col px-5 py-4 right-4 top-10 bg-[#548CA8] md:bg-inherit mt-4 rounded-lg md:flex-row md:p-0 md:mt-0 md:border-0 absolute md:static">
          <li className="mb-3 md:mb-0">
            <Link href="/">Home</Link>
          </li>
          <li className="mb-3 md:mb-0">
            <Link href="/services">Services</Link>
          </li>
          <li className="mb-4 md:mb-0">
            <Link href="/about">About</Link>
          </li>
          <li className="md:hidden">
            <button type="button" className="border rounded-full text-base">
              {auth ? (
                <Link href="/logout" className="py-2 px-10 inline-block">
                  Logout
                </Link>
              ) : (
                <Link href="/login" className="py-2 px-10 inline-block">
                  Login
                </Link>
              )}
            </button>
          </li>
        </ul>
      </div>
      <div className="w-3/12 text-end hidden md:block ">
        <button type="button" className="border rounded-full text-base">
          {auth ? (
            <Link href="/logout" className="py-2 px-10 inline-block">
              Logout
            </Link>
          ) : (
            <Link href="/login" className="py-2 px-10 inline-block">
              Login
            </Link>
          )}
        </button>
      </div>
      <div className="w-6/12 md:hidden flex align-middle justify-end">
        <button
          type="button"
          data-collapse-toggle="navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <AiOutlineClose size={35} />
          ) : (
            <AiOutlineMenu size={35} className="" />
          )}
        </button>
      </div>
    </nav>
  );
}
