import { signOutAction } from "@/server/actions/auth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <form action={signOutAction}>
      <Button
        type="submit"
        variant="ghost"
        size="sm"
        className="h-8 px-3 text-muted-foreground hover:text-foreground"
      >
        <LogOut className="size-4" />
        <span className="sr-only">Sign out</span>
      </Button>
    </form>
  );
}
