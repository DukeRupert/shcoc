import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().max(50),
	email: z.string().email().max(50),
	tel: z.string().max(50).optional(),
	message: z.string().max(500)
});

export type FormSchema = typeof formSchema;
