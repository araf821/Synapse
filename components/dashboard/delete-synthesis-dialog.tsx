"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2, AlertTriangle } from "lucide-react";
import { deleteSynthesis } from "@/server/actions/synthesis/delete-synthesis";

interface DeleteSynthesisDialogProps {
  synthesisId: string;
  synthesisTitle: string;
  trigger: React.ReactNode;
}

export function DeleteSynthesisDialog({
  synthesisId,
  synthesisTitle,
  trigger,
}: DeleteSynthesisDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteSynthesis(synthesisId);
        setOpen(false);
      } catch (error) {
        console.error("Failed to delete synthesis:", error);
        // TODO: Add toast notification for error
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        autoFocus={false}
        className="border-border/50 bg-card/95 backdrop-blur-sm sm:max-w-md"
      >
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-destructive/5 blur-xl"></div>
          <div className="absolute bottom-6 left-6 h-12 w-12 rounded-full bg-destructive/8 blur-lg"></div>
        </div>

        <DialogHeader className="relative space-y-6">
          {/* Warning Icon */}
          <div className="flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="size-6 text-destructive" />
            </div>
          </div>

          <div className="space-y-2">
            <DialogTitle className="text-center font-serif text-xl font-bold text-card-foreground sm:text-2xl">
              Delete Synthesis
            </DialogTitle>
            <DialogDescription className="text-center font-sans text-base text-muted-foreground">
              Are you sure you want to delete{" "}
              <span className="font-medium text-foreground">
                "{synthesisTitle}"
              </span>
              ? This action cannot be undone and all your work will be
              permanently lost.
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="relative flex flex-col gap-3 py-6">
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
            className="gap-2"
          >
            {isPending ? (
              <>
                <div className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="size-4" />
                Yes, Delete Synthesis
              </>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isPending}
          >
            Cancel
          </Button>
        </div>

        {/* Footer note */}
        <div className="relative text-center">
          <p className="text-xs text-muted-foreground">
            This will permanently remove all stages of your synthesis including
            your brain dump, challenges, and final work.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
