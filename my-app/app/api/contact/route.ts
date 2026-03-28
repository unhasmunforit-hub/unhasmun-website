import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/** Escape HTML special characters to prevent XSS in email templates */
function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
    try {
        // Initialize Resend client inside handler so the build doesn't fail
        // when the API key isn't set in the environment
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { name, email, phone, comment } = await request.json();

        // Basic validation
        if (!name || !email || !comment) {
            return NextResponse.json(
                { message: 'Name, email, and comment are required fields.' },
                { status: 400 }
            );
        }

        // Sanitize user input before embedding in HTML
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safePhone = escapeHtml(phone || 'Not provided');
        const safeComment = escapeHtml(comment).replace(/\n/g, '<br/>');

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'UNHAS MUN Contact Form <onboarding@resend.dev>',
            to: ['unhasmunforit@gmail.com'], // The email where you want to receive messages
            replyTo: email,
            subject: `New Contact Message from ${safeName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Phone:</strong> ${safePhone}</p>
                <hr />
                <h3>Message/Comment:</h3>
                <p>${safeComment}</p>
            `,
        });

        return NextResponse.json(
            { message: 'Message sent successfully', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email via Resend:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { message: 'Failed to send message', error: errorMessage },
            { status: 500 }
        );
    }
}
