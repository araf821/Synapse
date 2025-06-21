import { signOutAction } from "@/server/actions/auth";
import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <form action={signOutAction} className="w-full">
      <button
        type="submit"
        className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-white"
      >
        <LogOut className="size-4" />
        <span>Sign Out</span>
      </button>
    </form>
  );
}
