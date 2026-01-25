'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, Twitter, Send, Check } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectItem } from '@/components/ui/select'
import { siteConfig } from '@/content'

const inquiryTypes = [
  { value: 'employer', label: "I'm looking to hire" },
  { value: 'candidate', label: "I'm looking for a job" },
  { value: 'partnership', label: 'Partnership inquiry' },
  { value: 'other', label: 'Something else' },
]

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 bg-surface">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge variant="accent" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold mb-6">
              Let&apos;s start a conversation
            </h1>
            <p className="text-body-lg text-muted">
              Whether you&apos;re looking to hire, searching for your next role, or just want
              to learn more about what we do, we&apos;d love to hear from you.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                        <Check className="w-8 h-8 text-accent" />
                      </div>
                      <h2 className="text-display-sm font-display font-semibold mb-2">
                        Message sent!
                      </h2>
                      <p className="text-body-md text-muted mb-6">
                        Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <Select
                        value={inquiryType}
                        onValueChange={setInquiryType}
                        label="What brings you here?"
                        placeholder="Select an option..."
                      >
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </Select>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input label="First Name" name="firstName" required />
                        <Input label="Last Name" name="lastName" required />
                      </div>

                      <Input label="Email" name="email" type="email" required />

                      <Input label="Company" name="company" placeholder="Optional" />

                      <Input label="Phone" name="phone" type="tel" placeholder="Optional" />

                      <Textarea
                        label="Message"
                        name="message"
                        rows={5}
                        placeholder="Tell us how we can help..."
                        required
                      />

                      <div className="pt-4">
                        <Button type="submit" size="lg" className="w-full sm:w-auto">
                          Send Message
                          <Send className="w-5 h-5" />
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Address */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-display-xs font-display font-semibold mb-1">
                        Office
                      </h3>
                      <p className="text-body-md text-muted">{siteConfig.contact.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-display-xs font-display font-semibold mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-body-md text-accent hover:text-accent/80 transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-display-xs font-display font-semibold mb-1">
                        Phone
                      </h3>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-body-md text-accent hover:text-accent/80 transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-display-xs font-display font-semibold mb-4">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-display-xs font-display font-semibold mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-body-md">
                    <div className="flex justify-between">
                      <span className="text-muted">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Saturday - Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  )
}
