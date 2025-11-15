import { NextResponse } from "next/server";

const WHATSAPP_API_URL =
  "https://graph.facebook.com/v22.0/719265351278653/messages";
const ACCESS_TOKEN =
  "EAAQKi4POSjEBPc7enwqvBecW37oZC71XaWC4rHFCTbeki9ZAHGqVkikNZBkleLnAUHST4f7TiGFOXy4b1nE9XcaHgbanVUR4XTCdaZCTMmmSeZAOfNYASgfPuL8pfQwrXDrsvZBkWM4vkTmbS2pyoCdZAa4AcuuPbZAdMTzjKIJdjVsoVlEdDhClUCL4MFCH0Hv4ZAybkJ3Q56hTGWSTuiB9pF8weXZC7XgYhmWHTKd8klLtgZD";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, templateName = "booking", time } = body;

    const payload = {
      messaging_product: "whatsapp",
      to: "919910197196",
      type: "template",
      template: {
        name: templateName,
        language: {
          code: "en",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: time,
              },
            ],
          },
        ],
      },
    };

    const response = await fetch(WHATSAPP_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to send WhatsApp message", details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: "WhatsApp message sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
