import { useState, type FormEvent } from 'react'
import { siteContent } from '@/data/siteContent'
import { IconArrow } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function QuoteForm({ className }: { className?: string }) {
  const { form } = siteContent.hero
  const [status, setStatus] = useState<Status>('idle')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const entries = Object.fromEntries(data.entries())
    setStatus('submitting')

    // Local/mock fallback — opens mailto with the captured lead data.
    window.setTimeout(() => {
      const body = Object.entries(entries)
        .map(([key, value]) => `${key}: ${String(value)}`)
        .join('\n')
      const mailto = `mailto:${siteContent.footer.contact.email}?subject=${encodeURIComponent(
        'Solicitud de cotización — PB Machinery',
      )}&body=${encodeURIComponent(body)}`
      window.location.href = mailto
      setStatus('success')
      event.currentTarget.reset()
    }, 450)
  }

  return (
    <form
      id="contacto"
      onSubmit={onSubmit}
      className={cn('card-surface p-5 sm:p-6', className)}
      noValidate
    >
      <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{form.title}</h2>
      <p className="mt-1 text-sm text-on-surface-muted">{form.subtitle}</p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {form.fields.map((field) => {
          const span = field.colSpan === 2 ? 'sm:col-span-2' : ''
          const common =
            'w-full rounded-xl border border-border bg-white px-3 py-2.5 text-sm text-on-surface outline-none transition placeholder:text-on-surface-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20'
          return (
            <label key={field.id} className={cn('block text-left', span)}>
              <span className="mb-1.5 block text-xs font-semibold text-on-surface">
                {field.label}
                {field.required ? ' *' : ''}
              </span>
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  required={field.required}
                  defaultValue=""
                  className={common}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className={common}
                  autoComplete={
                    field.type === 'email' ? 'email' : field.type === 'tel' ? 'tel' : 'on'
                  }
                />
              )}
            </label>
          )
        })}
      </div>

      <button type="submit" className="btn-primary mt-5 w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Enviando…' : form.submitLabel}
        <IconArrow className="h-4 w-4" />
      </button>

      {status === 'success' && (
        <p className="mt-3 text-sm font-medium text-primary" role="status">
          Gracias. Se abrirá tu correo para enviar la solicitud.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm font-medium text-red-600" role="alert">
          No se pudo enviar. Intenta de nuevo o escríbenos por correo.
        </p>
      )}

      <p className="mt-3 text-xs leading-relaxed text-on-surface-muted">{form.footnote}</p>
    </form>
  )
}
