'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Briefcase, DollarSign, Clock, Filter, X, ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectItem } from '@/components/ui/select'
import { roles, specialties } from '@/content'
import { cn, formatSalary } from '@/lib/utils'
import type { Metadata } from 'next'

const jobTypes = ['All Types', 'Full-time', 'Contract', 'Part-time']
const locations = ['All Locations', 'Toronto', 'Remote', 'Hybrid']

export default function RolesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties')
  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [showFilters, setShowFilters] = useState(false)

  const filteredRoles = useMemo(() => {
    return roles.filter((role) => {
      const matchesSearch =
        searchQuery === '' ||
        role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesSpecialty =
        selectedSpecialty === 'All Specialties' || role.specialty === selectedSpecialty

      const matchesType =
        selectedType === 'All Types' || role.employmentType === selectedType

      const matchesLocation =
        selectedLocation === 'All Locations' ||
        role.location.toLowerCase().includes(selectedLocation.toLowerCase())

      return matchesSearch && matchesSpecialty && matchesType && matchesLocation
    })
  }, [searchQuery, selectedSpecialty, selectedType, selectedLocation])

  const featuredRoles = roles.filter((role) => role.featured)
  const activeFiltersCount = [selectedSpecialty, selectedType, selectedLocation]
    .filter((f) => !f.startsWith('All')).length

  const clearFilters = () => {
    setSelectedSpecialty('All Specialties')
    setSelectedType('All Types')
    setSelectedLocation('All Locations')
    setSearchQuery('')
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
              {roles.length} Open Positions
            </Badge>
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold mb-4">
              Find your next opportunity
            </h1>
            <p className="text-body-lg text-muted">
              Browse our current openings at Toronto&apos;s most innovative companies. From
              seed-stage startups to established scale-ups, we have roles for every stage of
              your career.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Search and Filters */}
      <Section className="py-8 border-b border-border sticky top-20 z-30 bg-background/95 backdrop-blur-md">
        <Container>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <Input
                type="text"
                placeholder="Search roles, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-3">
              <Select
                value={selectedSpecialty}
                onValueChange={setSelectedSpecialty}
                className="w-44"
              >
                <SelectItem value="All Specialties">All Specialties</SelectItem>
                {specialties.map((s) => (
                  <SelectItem key={s.id} value={s.name}>
                    {s.name}
                  </SelectItem>
                ))}
              </Select>

              <Select
                value={selectedType}
                onValueChange={setSelectedType}
                className="w-36"
              >
                {jobTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </Select>

              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
                className="w-36"
              >
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </Select>

              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear ({activeFiltersCount})
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="accent" size="sm" className="ml-2">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <Select
                    value={selectedSpecialty}
                    onValueChange={setSelectedSpecialty}
                    label="Specialty"
                  >
                    <SelectItem value="All Specialties">All Specialties</SelectItem>
                    {specialties.map((s) => (
                      <SelectItem key={s.id} value={s.name}>
                        {s.name}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select
                    value={selectedType}
                    onValueChange={setSelectedType}
                    label="Job Type"
                  >
                    {jobTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                    label="Location"
                  >
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </Select>

                </div>

                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="mt-4"
                  >
                    Clear all filters
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Section>

      {/* Results */}
      <Section>
        <Container>
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-body-md text-muted">
              Showing <span className="text-foreground font-medium">{filteredRoles.length}</span>{' '}
              {filteredRoles.length === 1 ? 'role' : 'roles'}
            </p>
          </div>

          {/* Roles Grid */}
          {filteredRoles.length > 0 ? (
            <div className="grid gap-4">
              {filteredRoles.map((role, index) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/roles/${role.slug}`}>
                    <Card hover className="group">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                          {/* Main Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <p className="text-body-sm text-accent font-medium">
                                {role.company}
                              </p>
                              {role.featured && (
                                <Badge variant="accent" size="sm">Featured</Badge>
                              )}
                            </div>
                            <h3 className="text-display-sm font-display font-semibold mb-2 group-hover:text-accent transition-colors">
                              {role.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-body-sm text-muted">
                              <span className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                {role.location}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Briefcase className="w-4 h-4" />
                                {role.employmentType}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <DollarSign className="w-4 h-4" />
                                {formatSalary(role.salaryMin, role.salaryMax)}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {role.postedDate}
                              </span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 lg:justify-end">
                            {role.tags.slice(0, 4).map((tag) => (
                              <Badge key={tag} variant="secondary" size="sm">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-display-sm font-display font-semibold mb-2">
                No roles found
              </p>
              <p className="text-body-md text-muted mb-6">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}
