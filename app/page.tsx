import Image from "next/image";
import { getCurrentUser } from "@/server/lib/auth";
import { SignInGoogle, SignInDiscord } from "@/components/auth/sign-in";
import { SignOut } from "@/components/auth/sign-out";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="text-center">
        <Image
          className="mx-auto mb-8 dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="mb-4 text-3xl font-bold">Welcome to Synapse</h1>
        <p className="mb-8 text-gray-600">
          A Next.js application with Auth.js authentication
        </p>
      </div>

      <div className="w-full max-w-md space-y-4">
        {user ? (
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 text-center">
              <h2 className="text-xl font-semibold">Welcome back!</h2>
              <div className="mt-2 flex items-center justify-center gap-3">
                {user.image && (
                  <Image
                    src={user.image}
                    alt={user.name || "User avatar"}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div className="text-left">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <SignOut />
            </div>
          </div>
        ) : (
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-center text-xl font-semibold">
              Sign in to continue
            </h2>
            <div className="space-y-3">
              <SignInGoogle />
              <SignInDiscord />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
