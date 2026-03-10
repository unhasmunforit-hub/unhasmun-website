import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend client with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, phone, comment } = await request.json();

        // Basic validation
        if (!name || !email || !comment) {
            return NextResponse.json(
                { message: 'Name, email, and comment are required fields.' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'UNHAS MUN Contact Form <onboarding@resend.dev>', // Update to your verified domain in production (e.g., info@unhasmun.org)
            // Email pribadi Anda untuk testing:
            to: ['imam.fadhil28@gmail.com'], // The email where you want to receive messages
            replyTo: email,
            subject: `New Contact Message from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <hr />
                <h3>Message/Comment:</h3>
                <p>${comment.replace(/\n/g, '<br/>')}</p>
            `,
        });

        return NextResponse.json(
            { message: 'Message sent successfully', data },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error sending email via Resend:', error);
        return NextResponse.json(
            { message: 'Failed to send message', error: error.message || 'Unknown error' },
            { status: 500 }
        );
    }
}
