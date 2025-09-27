'use server'
export async function sendContact(formData: FormData) {
  const values = Object.fromEntries(formData.entries())
  console.log('SERVER ACTION: contact submission', values)
  return { ok: true, received: values }
}
