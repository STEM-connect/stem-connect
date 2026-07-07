'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { Linkedin, Twitter } from '@/components/ui/social-icons'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/content'

const intents = [
  {
    value: 'hiring',
    label: "I'm hiring",
    hint: 'Start a search',
  },
  {
    value: 'looking',
    label: "I'm looking",
    hint: 'Explore roles',
  },
] as const

const contactSchema = z.object({
  intent: z.enum(['hiring', 'looking'], {
    message: 'Tell us which one applies.',
  }),
  firstName: z.string().trim().min(1, 'First name is required.'),
  lastName: z.string().trim().min(1, 'Last name is required.'),
  email: z.string().trim().min(1, 'Email is required.').email('Enter a valid email.'),
  company: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(10, 'A sentence or two helps us route you to the right person.'),
})

type ContactValues = z.infer<typeof contactSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { intent: undefined, firstName: '', lastName: '', email: '', company: '', message: '' },
  })

  const intent = watch('intent')

  // No backend: static-export site. We validate client-side and show a
  // success state. `onSubmit` never touches a server.
  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 400))
  }

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <Container className="relative">
          <div className="max-w-3xl">
            <Reveal>
              <Label tick>Contact</Label>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-display-2xl text-ink text-balance">
                Start a real conversation.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-body-lg text-muted text-pretty md:text-body-xl">
                Hiring a critical role or weighing your next move — tell us which
                and a few details. A real person replies within one business day.
                No auto-responders, no keyword screens.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Form + rail */}
      <Section padding="default" className="pt-4 md:pt-6">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              {isSubmitSuccessful ? (
                <div className="rounded-card border border-border bg-surface p-8 md:p-10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink">
                    <Check className="h-6 w-6" strokeWidth={2.5} />
                  </span>
                  <h2 className="mt-6 text-display-sm font-semibold text-ink">
                    Message received.
                  </h2>
                  <p className="mt-3 max-w-md text-body-md text-muted text-pretty">
                    Thanks for reaching out. Expect a reply from a real person on
                    our team within one business day.
                  </p>
                  <Button
                    type="button"
                    variant="secondary"
                    className="mt-8"
                    onClick={() => reset()}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
                  {/* Intent — two clear paths */}
                  <fieldset>
                    <legend className="text-body-sm font-medium text-ink">
                      What brings you here?
                    </legend>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {intents.map((opt) => {
                        const selected = intent === opt.value
                        return (
                          <label
                            key={opt.value}
                            className={cn(
                              'flex cursor-pointer items-center justify-between gap-3 rounded-card border bg-surface px-4 py-3.5 transition-colors',
                              selected
                                ? 'border-border-strong bg-surface-2'
                                : 'border-border hover:border-border-strong'
                            )}
                          >
                            <input
                              type="radio"
                              value={opt.value}
                              className="sr-only"
                              {...register('intent')}
                            />
                            <span>
                              <span className="block text-body-md font-medium text-ink">
                                {opt.label}
                              </span>
                              <span className="block text-body-xs text-muted">
                                {opt.hint}
                              </span>
                            </span>
                            <span
                              className={cn(
                                'grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors',
                                selected
                                  ? 'border-accent bg-accent text-accent-ink'
                                  : 'border-border-strong'
                              )}
                              aria-hidden
                            >
                              {selected && <Check className="h-3 w-3" strokeWidth={3} />}
                            </span>
                          </label>
                        )
                      })}
                    </div>
                    {errors.intent && (
                      <p className="mt-2 text-body-xs text-red-500">
                        {errors.intent.message}
                      </p>
                    )}
                  </fieldset>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Input
                      label="First name"
                      autoComplete="given-name"
                      error={errors.firstName?.message}
                      {...register('firstName')}
                    />
                    <Input
                      label="Last name"
                      autoComplete="family-name"
                      error={errors.lastName?.message}
                      {...register('lastName')}
                    />
                  </div>

                  <Input
                    label="Email"
                    type="email"
                    autoComplete="email"
                    error={errors.email?.message}
                    {...register('email')}
                  />

                  <Input
                    label="Company"
                    placeholder="Optional"
                    autoComplete="organization"
                    error={errors.company?.message}
                    {...register('company')}
                  />

                  <Textarea
                    label="Message"
                    rows={5}
                    placeholder={
                      intent === 'looking'
                        ? 'What kind of role are you looking for, and what would make it worth the move?'
                        : 'What are you hiring for, and what does great look like?'
                    }
                    error={errors.message?.message}
                    {...register('message')}
                  />

                  <div className="pt-2">
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending…' : 'Send message'}
                      {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                    </Button>
                    <p className="mt-4 text-body-xs text-faint">
                      By reaching out you agree we can contact you about your
                      inquiry. We never share your details.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Rail */}
            <aside className="lg:col-span-5 lg:pl-4">
              <div className="rounded-card border border-border bg-surface p-6 md:p-8">
                <div className="flex items-center gap-2.5 text-accent">
                  <Clock className="h-4 w-4" />
                  <span className="text-body-sm font-medium text-ink">
                    Reply within one business day
                  </span>
                </div>
                <p className="mt-3 text-body-sm text-muted text-pretty">
                  Every serious inquiry gets a real response — often the same day.
                  Prefer to skip the form? Reach us directly.
                </p>

                <dl className="mt-8 space-y-6 border-t border-border pt-8">
                  <div>
                    <dt className="label-mono">Email</dt>
                    <dd className="mt-1.5">
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="link-underline font-mono text-body-sm text-ink hover:text-accent"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="label-mono">Phone</dt>
                    <dd className="mt-1.5">
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, '')}`}
                        className="link-underline font-mono text-body-sm text-ink hover:text-accent"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="label-mono">Based in</dt>
                    <dd className="mt-1.5 font-mono text-body-sm text-ink">
                      {siteConfig.contact.address}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 border-t border-border pt-8">
                  <span className="label-mono">Follow</span>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Stem Connect on LinkedIn"
                      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-bg text-muted transition-colors hover:border-border-strong hover:text-ink"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Stem Connect on X"
                      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-bg text-muted transition-colors hover:border-border-strong hover:text-ink"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
