import { Link, useState } from "@inertiajs/inertia-react";

export default function Navbar({ auth }) {
  return (
    <nav className="flex container mx-auto text-white py-2">
      <span className="w-3/12 text-2xl my-auto font-semibold tracking-widest">
        <Link href="/">ErinKosu</Link>
      </span>
      <div className="w-6/12 my-auto">
        <ul className="flex justify-evenly text-base">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="w-3/12 text-end">
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
    </nav>
  );
}
