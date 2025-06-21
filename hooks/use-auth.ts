"use client";

import { useSession } from "next-auth/react";

/**
 * Client-side hook to get the current user session
 * Use this in client components
 */
export function useAuth() {
  const { data: session, status } = useSession();

  return {
    user: session?.user ?? null,
    session,
    isLoading: status === "loading",
    isAuthenticated: !!session?.user,
  };
}
