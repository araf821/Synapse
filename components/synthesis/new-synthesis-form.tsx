"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus } from "lucide-react";
import {
  newSynthesisSchema,
  type NewSynthesisFormData,
} from "@/lib/validations/synthesis";
import { createSynthesis } from "@/server/actions/synthesis";

export function NewSynthesisForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<NewSynthesisFormData>({
    resolver: zodResolver(newSynthesisSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (data: NewSynthesisFormData) => {
    startTransition(async () => {
      await createSynthesis(data.title || undefined);
    });
  };

  const handleQuickStart = () => {
    startTransition(async () => {
      await createSynthesis();
    });
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Synthesis Title (Optional)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g., The Future of Remote Work"
                    className="h-12"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" disabled={isPending} className="h-12 flex-1">
              <Plus className="mr-2 size-5" />
              {isPending ? "Creating..." : "Create Synthesis"}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleQuickStart}
              disabled={isPending}
              className="h-12"
            >
              Quick Start
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
