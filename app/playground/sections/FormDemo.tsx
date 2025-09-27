'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendContact } from '@/app/actions'

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
})
type FormValues = z.infer<typeof Schema>

export default function FormDemo() {
  const { register, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(Schema) })
  return (
    <section className="card">
      <h2 className="text-xl font-semibold">Forms: RHF + Zod + Server Actions</h2>
      <form className="space-y-3" action={async (fd) => {
        const res = await sendContact(fd)
        alert('Submitted! ' + JSON.stringify(res))
        reset()
      }}>
        <div>
          <input className="w-full px-3 py-2 rounded-xl bg-slate-800/70" placeholder="Name" {...register('name')} />
          {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <input className="w-full px-3 py-2 rounded-xl bg-slate-800/70" placeholder="Email" {...register('email')} />
          {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <textarea className="w-full px-3 py-2 rounded-xl bg-slate-800/70" rows={4} placeholder="Message" {...register('message')} />
          {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
        </div>
        <button className="btn" disabled={isSubmitting} type="submit">{isSubmitting ? 'Sending…' : 'Send'}</button>
      </form>
    </section>
  )
}
