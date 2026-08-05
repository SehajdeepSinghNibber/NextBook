"use client";

import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";

export default function DesktopNavbar() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />

      <Link href="/" className="btn btn-ghost flex items-center gap-2">
        <HomeIcon className="w-4 h-4" />
        <span className="hidden lg:inline">Home</span>
      </Link>

      {isSignedIn && user ? (
        <>
          <Link
            href="/notifications"
            className="btn btn-ghost flex items-center gap-2"
          >
            <BellIcon className="w-4 h-4" />
            <span className="hidden lg:inline">Notifications</span>
          </Link>

          {/* <Link
            href={`/profile/${
              user.username ??
              user.emailAddresses?.[0]?.emailAddress?.split("@")[0]
            }`}
            className="btn btn-ghost flex items-center gap-2"
          >
            <UserIcon className="w-4 h-4" />
            <span className="hidden lg:inline">Profile</span>
          </Link> */}

          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
          <button className="btn btn-primary">Sign In</button>
        </SignInButton>
      )}
    </div>
  );
}
