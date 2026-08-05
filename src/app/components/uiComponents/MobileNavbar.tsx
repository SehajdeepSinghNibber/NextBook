"use client";

import Link from "next/link";
import { useState } from "react";
import {
  useAuth,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import {
  BellIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import ModeToggle from "./ModeToggle";

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <div className="relative flex items-center space-x-2 md:hidden">
      <ModeToggle />

      <button
        onClick={() => setShowMobileMenu((prev) => !prev)}
        className="rounded-full p-2 transition hover:bg-base-200"
        aria-label="Toggle Menu"
      >
        <MenuIcon size={22} />
      </button>

      {showMobileMenu && (
        <div className="absolute right-0 top-14 z-50 w-72 overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-2xl">
          {isSignedIn && (
            <div className="flex items-center gap-3 border-b border-base-300 p-5">
              <UserButton afterSignOutUrl="/" />
              <div>
                <p className="font-semibold">My Account</p>
                <p className="text-sm opacity-60">
                  Manage your profile
                </p>
              </div>
            </div>
          )}

          <nav className="p-3">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-base-200"
            >
              <HomeIcon size={18} />
              <span>Home</span>
            </Link>

            {isSignedIn ? (
              <>
                <Link
                  href="/notifications"
                  className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-base-200"
                >
                  <BellIcon size={18} />
                  <span>Notifications</span>
                </Link>

                <Link
                  href="/profile"
                  className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-base-200"
                >
                  <UserIcon size={18} />
                  <span>Profile</span>
                </Link>

                <div className="my-3 border-t border-base-300" />

                <SignOutButton>
                  <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-error transition hover:bg-error/10">
                    <LogOutIcon size={18} />
                    Logout
                  </button>
                </SignOutButton>
              </>
            ) : (
              <div className="pt-2">
                <SignInButton mode="modal">
                  <button className="btn btn-primary w-full rounded-xl">
                    Sign In
                  </button>
                </SignInButton>
              </div>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileNavbar;