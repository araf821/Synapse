import { signOutAction } from "@/server/actions/auth";
import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <form action={signOutAction} className="w-full">
      <button
        type="submit"
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
      >
        <LogOut className="size-4" />
        <span>Sign Out</span>
      </button>
    </form>
  );
}
