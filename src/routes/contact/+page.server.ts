import type { Actions, PageServerLoad } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { client } from '$lib/postmark.js';
import { EMAIL_FROM, EMAIL_TO, ORIGIN } from '$env/static/private';

export const load: PageServerLoad = async () => {
    const form = await superValidate(zod(formSchema));

    // Always return { form } in load functions
    return { form };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(formSchema));
        console.log('POST', form);

        // Check honeypot field - if filled, it's likely spam
        if (form.data.website && form.data.website.trim() !== '') {
            console.log('Spam detected via honeypot:', form.data);
            // Silently reject - don't give feedback to the bot
            return fail(400, { form });
        }

        // Convenient validation check:
        if (!form.valid) {
            // Again, return { form } and things will just work.
            return fail(400, { form });
        }

        // Email to church staff
        const Notification = await client.sendEmail({
            "From": "no-reply@southhillscoc.org",
            "To": EMAIL_TO,
            "Subject": "New Contact Form Submission",
            "TextBody": `
        New contact form submission received:
        
        Name: ${form.data.name}
        Email: ${form.data.email}
        Phone: ${form.data.tel || 'Not provided'}
        
        Message:
        ${form.data.message}
        
        This message was sent through the South Hills Church of Christ website contact form.
            `
        });

        // Confirmation email to sender
        const Confirmation = await client.sendEmail({
            "From": "no-reply@southhillscoc.org",
            "To": form.data.email,
            "Subject": "Thank you for contacting South Hills Church of Christ",
            "TextBody": `
Dear ${form.data.name},

Thank you for reaching out to South Hills Church of Christ. We have received your message and will get back to you soon.

Your message:
${form.data.message}

Our office information:
Address: 2294 Deerfield Ln, Helena, MT 59601
Phone: (406) 442-8950
Email: ${EMAIL_TO}

Sunday Service Times:
Bible Class - 9:30 AM
Worship Service - 10:30 AM

We look forward to connecting with you!

Blessings,
South Hills Church of Christ
    `
        });

        if (Notification.ErrorCode !== 0 || Confirmation.ErrorCode !== 0) {
            // Notify me
            await client.sendEmail({
                From: EMAIL_FROM,
                To: EMAIL_TO,
                Subject: ORIGIN + ' contact form error',
                TextBody: JSON.stringify(Notification.Message + Confirmation.Message)
            });
            // Return error
            return message(form, { type: 'error', text: 'Something went wrong. Please try calling us instead.' });
        }

        throw redirect(301, '/success');
    }
};