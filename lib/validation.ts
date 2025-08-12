/**
 * Valida un email con múltiples criterios
 */
export function validateEmail(email: string): { isValid: boolean; error?: string } {
  // Verificar que no esté vacío
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'El email es requerido' }
  }

  // Verificar longitud mínima
  if (email.length < 5) {
    return { isValid: false, error: 'El email es demasiado corto' }
  }

  // Verificar longitud máxima
  if (email.length > 254) {
    return { isValid: false, error: 'El email es demasiado largo' }
  }

  // Verificar formato básico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Formato de email inválido. Ejemplo: usuario@dominio.com' }
  }

  // Verificar que tenga un dominio válido
  const parts = email.split('@')
  if (parts.length !== 2) {
    return { isValid: false, error: 'El email debe contener exactamente un símbolo @' }
  }

  const [localPart, domain] = parts

  // Verificar parte local
  if (localPart.length === 0) {
    return { isValid: false, error: 'La parte antes del @ no puede estar vacía' }
  }

  if (localPart.length > 64) {
    return { isValid: false, error: 'La parte antes del @ es demasiado larga' }
  }

  // Verificar dominio
  if (domain.length === 0) {
    return { isValid: false, error: 'El dominio no puede estar vacío' }
  }

  if (domain.length > 253) {
    return { isValid: false, error: 'El dominio es demasiado largo' }
  }

  // Verificar que el dominio tenga al menos un punto
  if (!domain.includes('.')) {
    return { isValid: false, error: 'El dominio debe contener al menos un punto (.)' }
  }

  // Verificar que el dominio no termine en punto
  if (domain.endsWith('.')) {
    return { isValid: false, error: 'El dominio no puede terminar en punto' }
  }

  // Verificar que no tenga espacios
  if (email.includes(' ')) {
    return { isValid: false, error: 'El email no puede contener espacios' }
  }

  // Verificar caracteres especiales problemáticos
  const invalidChars = /[<>()[\]\\,;:\s"]/
  if (invalidChars.test(localPart)) {
    return { isValid: false, error: 'El email contiene caracteres no permitidos' }
  }

  return { isValid: true }
}

/**
 * Valida el nombre
 */
export function validateName(name: string): { isValid: boolean; error?: string } {
  if (!name || name.trim() === '') {
    return { isValid: false, error: 'El nombre es requerido' }
  }

  if (name.trim().length < 2) {
    return { isValid: false, error: 'El nombre debe tener al menos 2 caracteres' }
  }

  if (name.trim().length > 100) {
    return { isValid: false, error: 'El nombre es demasiado largo' }
  }

  return { isValid: true }
}

/**
 * Valida el mensaje
 */
export function validateMessage(message: string): { isValid: boolean; error?: string } {
  if (!message || message.trim() === '') {
    return { isValid: false, error: 'El mensaje es requerido' }
  }

  if (message.trim().length < 10) {
    return { isValid: false, error: 'El mensaje debe tener al menos 10 caracteres' }
  }

  if (message.trim().length > 2000) {
    return { isValid: false, error: 'El mensaje es demasiado largo (máximo 2000 caracteres)' }
  }

  return { isValid: true }
}
