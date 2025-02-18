export const runtime = "nodejs";


import { NextResponse } from "next/server";
import { env } from "@/config";

export async function POST(req: Request) {
    try {
        const nodemailer = await import("nodemailer"); // Import dinámico

        const { name, email, message, subject } = await req.json();

        console.log("Response: ",name, email, message, subject)

        if (!name || !email || !message || !subject) {
            return NextResponse.json(
                { success: false, error: "Faltan datos necesarios para enviar el correo" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: email,
            to: env.emailUser,
            subject: subject,
            html: `<p>${message}</p>
                   <br/>
                   <br/>
                   <br/>
                   <p><strong>${name}</strong><br>${email}</p>`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Correo enviado" });
    } catch (error) {
        console.error("Error enviando correo:", error);
        return NextResponse.json({ success: false, error: "Error al enviar el correo" }, { status: 500 });
    }
}
