import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react"
import { locations } from "@/lib/data"

export const metadata = {
  title: "Our Locations | Balkan Bäckerei",
  description: "Find a Balkan Bäckerei near you. Visit our bakeries in Offenbach, Dreieich, and Hanau for fresh bread and traditional pastries."
}

export default function LocationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Locations
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three bakeries, one tradition. Visit us at any of our convenient locations in the Frankfurt-Rhein-Main area.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {locations.map((location, index) => (
              <Card 
                key={location.id} 
                className={`overflow-hidden border-none shadow-lg ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image/Logo Side */}
                  <div className={`bg-muted p-12 flex items-center justify-center ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}>
                    <Image
                      src={location.logo || "/placeholder.svg"}
                      alt={`${location.name} Logo`}
                      width={350}
                      height={200}
                      className="max-w-full h-auto"
                    />
                  </div>
                  
                  {/* Content Side */}
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {location.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {location.shortDescription}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{location.address}</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{location.phone}</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{location.hours}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="group">
                        <Link href={`/locations/${location.id}`}>
                          View Menu & Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                          <MapPin className="w-4 h-4 mr-2" />
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
            Can&apos;t Visit Us in Person?
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            Have questions about our products or want to place a special order? Get in touch with us!
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
