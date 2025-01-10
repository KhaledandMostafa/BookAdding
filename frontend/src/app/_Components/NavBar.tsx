"use client";
import Link from "next/link";
import { useContext } from "react";
import { MainContext } from "../_Contexts/MainContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  let Path = usePathname();
  const { setSec } = useContext(MainContext);

  function handleSec(event) {
    setSec(event.target.value);
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className=" text-xl">LOGO</a>
          <Link href={"/"}>
            <span className="btn btn-ghost text-sm ">Home</span>
          </Link>

          <Link href={"/About"}>
            <span className="btn btn-ghost text-sm ">About</span>
          </Link>
          <Link href={"/Dashbord"}>
            <span className="btn btn-ghost text-sm ">Dashbord</span>
          </Link>
        </div>
        <div className="flex-none gap-2">
          {Path == "/" ? (
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                onChange={handleSec}
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          ) : null}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
