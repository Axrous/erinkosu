import { React } from "react";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { removeCookie } from "react-cookie";

export default function Navbar({ auth }) {
  const [navbar, setNavbar] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  function deleteCookies() {
    removeCookie("roomId", { path: "/" });
  }
  return (
    <nav className=" flex container mx-auto text-white py-2 items-center">
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
          <li className="mb-3 md:mb-0">
            <Link href="/about">About</Link>
          </li>
          {auth ? (
            <>
              <li className="mb-3 md:hidden">
                <Link href="/user">Profile</Link>
              </li>
              <li className="mb-3 md:hidden">
                <Link href="/services/transaction-history">Transaction</Link>
              </li>
            </>
          ) : null}
          <li className="md:hidden">
            <button type="button" className="border rounded-full text-base">
              {auth ? (
                <Link
                  href="/logout"
                  className="py-2 px-10 inline-block"
                  onClick={deleteCookies}
                >
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
      <div className="w-3/12 text-end hidden md:block relative">
        {auth ? (
          <button className="" onClick={() => setDropDown(!dropDown)}>
            {auth.first_name}
            <svg
              className="w-5 h-5 ml-1 inline-block"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        ) : (
          <button type="button" className="border rounded-full text-base">
            <Link href="/login" className="py-2 px-10 inline-block">
              Login
            </Link>
          </button>
        )}
        {dropDown == true ? (
          <div className="z-10 font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-0 top-10">
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <Link href="/user" className="block px-4 py-2">
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/services/transaction-history"
                  className="block px-4 py-2"
                >
                  Transaction
                </Link>
              </li>
            </ul>
            <div className="py-1">
              <Link
                href="/logout"
                className="py-2 px-4 inline-block"
                onClick={deleteCookies}
              >
                Logout
              </Link>
            </div>
          </div>
        ) : null}
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
