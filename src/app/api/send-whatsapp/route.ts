import { NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.ACC_SID;
const authToken = process.env.AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(request: Request) {
    const { message } = await request.json();

    try {
        await client.messages
            .create({
                from: 'whatsapp:+14155238886',
                contentSid: process.env.CONTENT_SID ?? "",
                contentVariables: `{"1":"${message.service}","2":"${message.date}", "3":"${message.time}", "4":"${message.name}"}`,
                to: 'whatsapp:+919910197196'
            })

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Failed to send WhatsApp message' });
    }
}
