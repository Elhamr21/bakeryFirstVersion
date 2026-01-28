import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Leaf } from "lucide-react"

export const metadata = {
  title: "About Us | Balkan Bäckerei",
  description: "Learn about Balkan Bäckerei's story, our commitment to traditional baking, and our passion for bringing authentic Balkan flavors to Germany."
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of tradition, passion, and the love for authentic Balkan baking.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop"
                  alt="Traditional bread baking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden shadow-lg hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop"
                  alt="Fresh pastries"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                From the Balkans to Germany
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Balkan Bäckerei was born from a deep love for traditional baking and a desire to share the rich flavors of the Balkans with our German community. What started as a small family dream has grown into three beloved bakeries serving the Frankfurt-Rhein-Main area.
                </p>
                <p>
                  Our story begins with recipes passed down through generations, each one carrying memories of home, family gatherings, and the simple joy of fresh bread. We brought these treasures with us when we made Germany our new home, and we knew we had to share them.
                </p>
                <p>
                  Today, our skilled bakers continue this tradition, waking before dawn to prepare each loaf, pastry, and sweet treat by hand. We believe that great baking takes time, patience, and above all, love - and that is what you taste in every bite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from the ingredients we choose to the way we welcome our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality",
                description: "We never compromise on quality. Only the finest ingredients make it into our products."
              },
              {
                icon: Heart,
                title: "Tradition",
                description: "Every recipe tells a story. We honor our heritage with every batch we bake."
              },
              {
                icon: Users,
                title: "Community",
                description: "Our bakeries are gathering places where everyone is welcome like family."
              },
              {
                icon: Leaf,
                title: "Freshness",
                description: "Everything is baked fresh daily. No shortcuts, no compromises."
              }
            ].map((value, index) => (
              <Card key={index} className="bg-card border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Bakers, Our Family
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Behind every golden loaf and flaky pastry is a team of dedicated bakers who treat their craft as an art form. Many of our team members have been with us since the beginning, and some even learned the recipes from their own grandparents.
                </p>
                <p>
                  We believe in nurturing talent and passing on knowledge. Our experienced bakers work alongside apprentices, ensuring that these precious traditions will continue for generations to come.
                </p>
                <p>
                  When you visit any of our three locations, you are not just a customer - you are a guest in our extended family. We take pride in knowing many of our regulars by name and having their favorites ready.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop"
                  alt="Our baking team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Come Taste the Tradition
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
            We invite you to visit one of our bakeries and experience the warmth, flavors, and hospitality that define Balkan Bäckerei. Your table is always ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/locations">Find a Location</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
