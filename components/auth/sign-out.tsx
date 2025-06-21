import { signOutAction } from "@/server/actions/auth";
import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <form action={signOutAction} className="w-full">
      <button
        type="submit"
        className="group flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
      >
        <LogOut className="mr-2 size-4 group-hover:text-white" />
        <span className="font-medium">Sign Out</span>
      </button>
    </form>
  );
}
