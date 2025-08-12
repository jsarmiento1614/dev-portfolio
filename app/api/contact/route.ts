import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build')

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Verificar que tenemos una API key válida
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy_key_for_build') {
      console.error('RESEND_API_KEY no configurada:', {
        hasKey: !!process.env.RESEND_API_KEY,
        keyValue: process.env.RESEND_API_KEY ? '***' : 'undefined'
      })
      return NextResponse.json(
        { error: 'API key de Resend no configurada' },
        { status: 500 }
      )
    }

    // Log para debugging
    console.log('Intentando enviar email con Resend:', {
      hasApiKey: !!process.env.RESEND_API_KEY,
      from: 'onboarding@resend.dev',
      to: ['jsarmiento1614@gmail.com'],
      subject: `Nuevo mensaje de ${name} desde tu portafolio`
    })

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['jsarmiento1614@gmail.com'],
      subject: `Nuevo mensaje de ${name} desde tu portafolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Nuevo Mensaje de Contacto</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Desde tu portafolio jsarmiento.dev</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 25px;">
              <h2 style="color: #1e40af; margin: 0 0 10px 0; font-size: 18px;">Información del Contacto</h2>
              <p style="margin: 5px 0; color: #374151;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 5px 0; color: #374151;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1e40af;">${email}</a></p>
            </div>
            
            <div>
              <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Mensaje</h2>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; border-left: 4px solid #1e40af;">
                <p style="margin: 0; line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                Este mensaje fue enviado desde el formulario de contacto de tu portafolio.
              </p>
              <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">
                Fecha: ${new Date().toLocaleString('es-ES', { 
                  timeZone: 'America/Tegucigalpa',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Error enviando email con Resend:', {
        error: error,
        message: error.message,
        name: error.name
      })
      return NextResponse.json(
        { 
          error: 'Error al enviar el mensaje. Por favor, intenta de nuevo.',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error en API route:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
