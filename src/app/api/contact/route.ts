export const runtime = "nodejs";


import { NextResponse } from "next/server";
import { env } from "@/config";

export async function POST(req: Request) {
    try {
        const nodemailer = await import("nodemailer"); // Import dinámico

        const { name, email, message, subject } = await req.json();

        if (!name || !email || !message || !subject) {
            return NextResponse.json(
                { success: false, error: "Faltan datos necesarios para enviar el correo" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: env.emailUser,
                pass: env.emailPassword,
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
        try {
            await transporter.sendMail(mailOptions);
        } catch {
            return NextResponse.json({ success: false, error: "Error al enviar el correo" }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Correo enviado" });
    } catch (error) {
        console.error("Error enviando correo:", error);
        return NextResponse.json({ success: false, error: "Error al enviar el correo" }, { status: 500 });
    }
}
