import * as z from "zod";
export const formSchema = z.object({
    prompt:z.string().min(2, {
        message:"Title is required",
    }),
});