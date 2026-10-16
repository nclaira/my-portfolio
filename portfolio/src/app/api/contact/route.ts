import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

// Recipient email — set RESEND_TO_EMAIL in your .env.local
const TO_EMAIL = process.env.RESEND_TO_EMAIL ?? "nclaire981@gmail.com"

const ContactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .trim()
    .max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be 2000 characters or fewer"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const parsed = ContactSchema.safeParse(body)

    if (!parsed.success) {
      const errors = parsed.error.format()
      const fieldErrors: Record<string, string | undefined> = {}

      for (const key of Object.keys(errors)) {
        const fieldError = (errors as Record<string, unknown>)[key]
        if (fieldError && typeof fieldError === "object" && "_errors" in fieldError) {
          const errs = (fieldError as { _errors?: string[] })._errors
          if (errs && errs.length > 0) {
            fieldErrors[key] = errs[0]
          }
        }
      }

      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: fieldErrors,
        },
        { status: 400 }
      )
    }

    const { name, email, message } = parsed.data

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `New message from ${name} via your portfolio site`,
      replyTo: email,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6;">
          <h2 style="color: #f59e0b;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr style="border: 1px solid #334155; margin: 20px 0;" />
          <p style="color: #94a3b8; font-size: 14px;">Sent from your portfolio contact form.</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email. Please try again later.",
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        data,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Unexpected error in contact route:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    )
  }
}

// Reject all non-POST methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405 }
  )
}
