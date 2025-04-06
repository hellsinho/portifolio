import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Configure o transporter do nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou outro serviço
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulário de Contato" <${process.env.EMAIL_USER}>`,
      to: process.env.YOUR_EMAIL, // Seu e-mail
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Erro ao enviar mensagem' },
      { status: 500 }
    );
  }
}