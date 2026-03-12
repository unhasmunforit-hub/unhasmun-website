import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'UNHAS MUN Contact Form <onboarding@resend.dev>',
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
    } catch (error) {
        console.error('Error sending email via Resend:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { message: 'Failed to send message', error: errorMessage },
            { status: 500 }
        );
    }
}
