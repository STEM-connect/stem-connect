'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MapPin, Briefcase, Clock, X, ArrowUpRight, Star } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button, ButtonLink } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/ui/reveal'
import {
  roles,
  specialties,
  getEmploymentTypeLabel,
  getWorkModelLabel,
  type EmploymentType,
  type WorkModel,
} from '@/content'
import { cn, formatSalary, formatDateShort } from '@/lib/utils'

// Filter option lists derived from the data so they never drift out of sync.
const employmentTypes = Array.from(
  new Set(roles.map((r) => r.employmentType))
) as EmploymentType[]
const workModels = Array.from(
  new Set(roles.map((r) => r.workModel))
) as WorkModel[]

function FilterChip({
  active,
  onClick,
  primary = false,
  children,
}: {
  active: boolean
  onClick: () => void
  primary?: boolean
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-body-sm transition-colors',
        primary
          ? active
            ? 'border-transparent bg-accent font-semibold text-accent-ink'
            : 'border-border text-muted hover:border-border-strong hover:text-ink'
          : active
            ? 'border-border-strong bg-surface-2 font-medium text-ink'
            : 'border-border text-muted hover:border-border-strong hover:text-ink'
      )}
    >
      {children}
    </button>
  )
}

export default function RolesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [specialty, setSpecialty] = useState('all')
  const [employmentType, setEmploymentType] = useState('all')
  const [workModel, setWorkModel] = useState('all')

  const filteredRoles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return roles.filter((role) => {
      const matchesSearch =
        q === '' ||
        role.title.toLowerCase().includes(q) ||
        role.company.toLowerCase().includes(q) ||
        role.overview.toLowerCase().includes(q) ||
        role.location.toLowerCase().includes(q) ||
        role.tags.some((tag) => tag.toLowerCase().includes(q))

      const matchesSpecialty = specialty === 'all' || role.specialty === specialty
      const matchesType = employmentType === 'all' || role.employmentType === employmentType
      const matchesWork = workModel === 'all' || role.workModel === workModel

      return matchesSearch && matchesSpecialty && matchesType && matchesWork
    })
  }, [searchQuery, specialty, employmentType, workModel])

  const activeCount =
    (specialty !== 'all' ? 1 : 0) +
    (employmentType !== 'all' ? 1 : 0) +
    (workModel !== 'all' ? 1 : 0) +
    (searchQuery.trim() !== '' ? 1 : 0)

  const clearFilters = () => {
    setSearchQuery('')
    setSpecialty('all')
    setEmploymentType('all')
    setWorkModel('all')
  }

  return (
    <>
      {/* ---------------------------------------------------------------- Header */}
      <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <Container className="relative">
          <div className="max-w-3xl">
            <Reveal y={12}>
              <Label tick>Live search · {roles.length} open roles</Label>
            </Reveal>
            <h1
              className="rise-in mt-6 text-display-xl md:text-display-2xl text-ink text-balance"
            >
              Open roles across Canadian tech.
            </h1>
            <p
              className="rise-in rise-in-d1 mt-6 max-w-xl text-body-lg text-muted text-pretty"
            >
              Senior mandates we&rsquo;re actively running &mdash; Product, Design,
              Engineering, Data, and Go-to-Market. Every one is a real search with a
              named hiring team, not a scraped listing.
            </p>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------------- Filter bar */}
      <div className="sticky top-18 z-30 border-y border-border bg-bg/85 backdrop-blur-md">
        <Container className="py-5">
          <div className="flex flex-col gap-5">
            {/* Search + count */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-faint"
                  aria-hidden
                />
                <Input
                  type="text"
                  aria-label="Search roles"
                  placeholder="Search roles, companies, skills…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11"
                />
              </div>
              <p className="hidden shrink-0 text-body-sm text-muted sm:block">
                <span className="font-mono text-ink">{filteredRoles.length}</span>
                <span className="text-faint"> / {roles.length}</span>
              </p>
            </div>

            {/* Specialty — the primary filter (lime = active) */}
            <div className="scrollbar-hide -mx-1 flex items-center gap-2 overflow-x-auto px-1">
              <FilterChip primary active={specialty === 'all'} onClick={() => setSpecialty('all')}>
                All specialties
              </FilterChip>
              {specialties.map((s) => (
                <FilterChip
                  key={s.id}
                  primary
                  active={specialty === s.slug}
                  onClick={() => setSpecialty(s.slug)}
                >
                  {s.name}
                </FilterChip>
              ))}
            </div>

            {/* Refine — secondary filters + clear */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="label-mono mr-1 text-faint">Type</span>
                <FilterChip active={employmentType === 'all'} onClick={() => setEmploymentType('all')}>
                  All
                </FilterChip>
                {employmentTypes.map((t) => (
                  <FilterChip
                    key={t}
                    active={employmentType === t}
                    onClick={() => setEmploymentType(t)}
                  >
                    {getEmploymentTypeLabel(t)}
                  </FilterChip>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="label-mono mr-1 text-faint">Work</span>
                <FilterChip active={workModel === 'all'} onClick={() => setWorkModel('all')}>
                  All
                </FilterChip>
                {workModels.map((w) => (
                  <FilterChip key={w} active={workModel === w} onClick={() => setWorkModel(w)}>
                    {getWorkModelLabel(w)}
                  </FilterChip>
                ))}
              </div>

              {activeCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto">
                  Clear{' '}
                  <span className="font-mono text-faint">({activeCount})</span>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* ---------------------------------------------------------------- Results */}
      <section className="py-section-sm">
        <Container>
          {filteredRoles.length > 0 ? (
            <div className="grid gap-4">
              {filteredRoles.map((role) => (
                <Link
                  key={role.id}
                  href={`/roles/${role.slug}`}
                  className="reveal group block rounded-card border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-2 md:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span className="label-mono text-accent">{role.company}</span>
                      {role.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-body-xs text-muted">
                          <Star className="h-3 w-3 fill-current" aria-hidden /> Featured
                        </span>
                      )}
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>

                  <h2 className="mt-2 text-display-sm text-ink transition-colors group-hover:text-accent">
                    {role.title}
                  </h2>

                  <p className="mt-3 max-w-2xl line-clamp-2 text-body-md text-muted text-pretty">
                    {role.overview}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-faint" aria-hidden /> {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4 text-faint" aria-hidden />
                      {getEmploymentTypeLabel(role.employmentType)}
                    </span>
                    <span className="font-mono text-ink">
                      {formatSalary(role.salaryMin, role.salaryMax)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-faint">
                      <Clock className="h-4 w-4" aria-hidden /> Posted {formatDateShort(role.postedDate)}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                    {role.tags.length > 4 && (
                      <span className="self-center font-mono text-body-xs text-faint">
                        +{role.tags.length - 4}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-md rounded-card border border-border bg-surface px-6 py-16 text-center">
              <p className="label-mono text-faint">No matches</p>
              <h2 className="mt-4 text-display-sm text-ink text-balance">
                Nothing open on those terms &mdash; yet.
              </h2>
              <p className="mt-3 text-body-md text-muted text-pretty">
                Loosen the filters, or tell us what you&rsquo;re after and we&rsquo;ll reach
                out when the right search opens.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button variant="outline" onClick={clearFilters}>
                  Clear filters
                </Button>
                <ButtonLink href="/contact">Register your interest</ButtonLink>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
