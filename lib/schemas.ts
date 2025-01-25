import { z } from "zod";

export const taskFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  columnId: z.number(),
});

export type TaskFormValues = z.infer<typeof taskFormSchema>;

export const columnFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

export type ColumnFormValues = z.infer<typeof columnFormSchema>;
