import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

type SidebarUser = {
  name: string | null;
  username: string | null;
  image?: string | null;
  bio?: string | null;
  location?: string | null;
  website?: string | null;
  _count: {
    following: number;
    followers: number;
  };
};

const UnAuthenticatedSidebar = () => (
  <div className="sticky top-20 w-full">
    <div className="mx-auto w-full max-w-xs rounded-lg border border-gray-700 bg-neutral-900 p-4">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-white">Welcome Back!</h2>
        <p className="mt-1 text-sm text-gray-400">
          Sign in to view your profile and follow people.
        </p>
      </div>

      <div className="mt-4 space-y-2">
        <SignInButton mode="modal">
          <button className="btn btn-outline btn-block">Sign in</button>
        </SignInButton>

        <SignUpButton mode="modal">
          <button className="btn btn-primary btn-block">Create account</button>
        </SignUpButton>
      </div>
    </div>
  </div>
);

function AuthenticatedSidebar({ user }: { user: SidebarUser }) {
  const displayName = user.name ?? "Anonymous";
  return (
    <div className="sticky top-20 w-full">
      <div className="mx-auto w-full max-w-xs rounded-lg border border-gray-700 bg-neutral-900 p-4">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-20 rounded-full ring-2 ring-gray-800 ring-offset-2 ring-offset-black overflow-hidden">
                {user.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={user.image}
                    alt={displayName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-800 text-2xl font-semibold text-white">
                    {displayName.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name / Username / Bio */}
          <div className="mt-3 text-center">
            <h3 className="text-white text-base font-semibold truncate">
              {displayName}
            </h3>
            <p className="mt-1 text-sm text-gray-400 truncate">
              {user.username}
            </p>
            {user.bio && (
              <p className="mt-2 text-sm text-gray-400">{user.bio}</p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="my-3 h-px bg-gray-800" />

        {/* Stats: following / followers */}
        <div className="flex items-center justify-between text-center">
          <div className="flex-1">
            <div className="text-white text-lg font-medium">
              {user._count.following}
            </div>
            <div className="text-xs text-gray-400">Following</div>
          </div>

          <div className="w-px bg-gray-800 mx-2 h-8" />

          <div className="flex-1">
            <div className="text-white text-lg font-medium">
              {user._count.followers}
            </div>
            <div className="text-xs text-gray-400">Followers</div>
          </div>
        </div>

        <div className="my-3 h-px bg-gray-800" />

        {/* Location / Website rows */}
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">📍</span>
            <span className="truncate">{user.location ?? "No location"}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400">🔗</span>
            {user.website ? (
              <a
                href={user.website}
                className="truncate text-gray-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
            ) : (
              <span className="truncate">No website</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

async function Sidebar() {
  const authUser = await currentUser();
  const { userId } = await auth();

  if (!authUser || !userId) {
    return <UnAuthenticatedSidebar />;
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    select: {
      name: true,
      image: true,
      username: true,
      bio: true,
      location: true,
      website: true,
      _count: {
        select: {
          following: true,
          followers: true,
        },
      },
    },
  });

  if (!dbUser) {
    return <UnAuthenticatedSidebar />;
  }

  return <AuthenticatedSidebar user={dbUser as SidebarUser} />;
}

export default Sidebar;
