"use server";

import { signIn, signOut } from "@/auth";

export async function signInWithGoogle() {
  await signIn("google", {
    redirectTo: "/dashboard",
  });
}

export async function signInWithDiscord() {
  await signIn("discord", {
    redirectTo: "/dashboard",
  });
}

export async function signOutAction() {
  await signOut();
}
