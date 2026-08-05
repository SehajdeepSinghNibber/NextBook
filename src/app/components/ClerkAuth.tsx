"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function ClerkAuth() {
  const { isSignedIn } = useUser();

  return (
    <div className="m-10">
      {!isSignedIn ? (
        <SignInButton mode="modal">
          <button className="btn btn-primary">Sign in</button>
        </SignInButton>
      ) : (
        <UserButton />
      )}
    </div>
  );
}
