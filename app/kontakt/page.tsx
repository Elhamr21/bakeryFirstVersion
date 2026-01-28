"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { locations } from "@/lib/data"

export default function KontaktPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-secondary overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 animate-fade-in">
              Sprechen Sie mit uns
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in-up">
              Kontakt
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards', opacity: 0 }}>
              Haben Sie Fragen, Anregungen oder möchten Sie eine Bestellung aufgeben? Wir freuen uns auf Ihre Nachricht!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-card">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Contact Form */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Nachricht Senden
                </h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 animate-scale-in">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Vielen Dank!</h3>
                    <p className="text-muted-foreground">Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Ihr Name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="ihre@email.de"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+49 123 456789"
                          value={formState.phone}
                          onChange={handleChange}
                          className="bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Betreff *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Worum geht es?"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="bg-muted/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Ihre Nachricht an uns..."
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="bg-muted/50 border-border focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full btn-shine shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Nachricht Senden
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Allgemeine Anfragen
                </h2>
                <p className="text-muted-foreground mb-6">
                  Für allgemeine Anfragen können Sie uns jederzeit per E-Mail oder Telefon erreichen.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">E-Mail</p>
                      <a href="mailto:info@balkanbackerei.de" className="text-foreground font-medium hover:text-primary transition-colors">
                        info@balkanbackerei.de
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Telefon</p>
                      <a href="tel:+4969123456789" className="text-foreground font-medium hover:text-primary transition-colors">
                        +49 69 123 456 789
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Erreichbarkeit</p>
                      <p className="text-foreground font-medium">Mo-Sa: 6:00 - 19:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Quick Access */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-muted relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto relative">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4">
              Unsere Filialen
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Besuchen Sie Uns Persönlich
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Kommen Sie vorbei und erleben Sie die Balkan Bäckerei hautnah.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {locations.map((location) => (
              <Card key={location.id} className="bg-card border-none shadow-md card-glow hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 relative shrink-0">
                      <Image
                        src={location.logo || "/placeholder.svg"}
                        alt={location.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground">{location.city}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{location.address}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      {location.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {location.hours.split(',')[0]}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                      <Link href={`/standorte/${location.id}`}>Details</Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-1" />
                        Route
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Großbestellungen & Events
          </h2>
          <p className="text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Planen Sie eine Feier oder ein Event? Wir bieten maßgeschneiderte Catering-Lösungen mit unseren authentischen Balkan-Spezialitäten.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <a href="tel:+4969123456789">
              <Phone className="w-5 h-5 mr-2" />
              Jetzt Anrufen
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
