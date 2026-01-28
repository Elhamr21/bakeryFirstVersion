import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, ExternalLink, ArrowLeft } from "lucide-react"
import { locations, getLocationById } from "@/lib/data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.id,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const location = getLocationById(slug)
  
  if (!location) {
    return {
      title: "Location Not Found | Balkan Bäckerei"
    }
  }

  return {
    title: `${location.name} | Balkan Bäckerei`,
    description: location.shortDescription
  }
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params
  const location = getLocationById(slug)

  if (!location) {
    notFound()
  }

  const categories = [...new Set(location.products.map(p => p.category))]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/locations" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Locations
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={location.logo || "/placeholder.svg"}
                alt={`${location.name} Logo`}
                width={400}
                height={220}
                className="max-w-full h-auto"
                priority
              />
            </div>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {location.name}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {location.fullDescription}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">{location.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Opening Hours</p>
                    <p className="text-muted-foreground">{location.hours}</p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg">
                <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Menu Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Menu
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our selection of freshly baked goods, made daily with traditional recipes.
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-8 border-b border-border pb-4">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {location.products
                  .filter(product => product.category === category)
                  .map((product) => (
                    <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className="relative h-48">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                          {product.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {product.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Visit Us Today
                </h3>
                <p className="text-muted-foreground mb-6">
                  We look forward to welcoming you at our {location.city} bakery. Come experience the warmth and authentic flavors that make Balkan Bäckerei special.
                </p>
                <div className="space-y-3 mb-8">
                  <p className="flex items-center gap-2 text-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    {location.address}
                  </p>
                  <p className="flex items-center gap-2 text-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    {location.hours}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&h=600&fit=crop"
                  alt="Bakery interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            Our Other Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations
              .filter(loc => loc.id !== location.id)
              .map((loc) => (
                <Card key={loc.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center gap-6">
                    <Image
                      src={loc.logo || "/placeholder.svg"}
                      alt={`${loc.name} Logo`}
                      width={100}
                      height={60}
                      className="w-24 h-auto object-contain flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                        {loc.city}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-1">
                        {loc.address}
                      </p>
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/locations/${loc.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
