import { z } from 'zod';
import validator from 'validator';

export const formSchema = z.object({
    name: z.string().min(1).max(50),
    email: z.string().email().max(50),
    tel: z.string().refine(validator.isMobilePhone),
    message: z.string().min(40).max(500),
    website: z.string().max(0, 'This field should be empty') // Honeypot validation
});

export type FormSchema = typeof formSchema;