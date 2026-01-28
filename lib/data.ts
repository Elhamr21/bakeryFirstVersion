export interface Location {
  id: string
  name: string
  city: string
  logo: string
  shortDescription: string
  fullDescription: string
  address: string
  phone: string
  hours: string
  googleMapsUrl: string
  products: Product[]
}

export interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
}

export const locations: Location[] = [
  {
    id: "offenbach",
    name: "Balkan Bäckerei Offenbach",
    city: "Offenbach",
    logo: "/images/logooffenbach.png",
    shortDescription: "Our flagship bakery in the heart of Offenbach, serving fresh bread and pastries since the beginning.",
    fullDescription: "Welcome to our flagship Offenbach location, where tradition meets quality every day. Our skilled bakers start their work before dawn, crafting each loaf and pastry with the same dedication that has defined Balkan baking for generations. This location features our full range of traditional breads, sweet pastries, and savory delights, all made with authentic recipes passed down through our family. Visit us to experience the warm aroma of freshly baked goods and the friendly service that makes us feel like home.",
    address: "Frankfurter Str. 123, 63065 Offenbach am Main",
    phone: "+49 69 123 4567",
    hours: "Monday - Saturday: 6:00 - 19:00, Sunday: 7:00 - 14:00",
    googleMapsUrl: "https://maps.google.com/?q=Frankfurter+Str.+123,+63065+Offenbach+am+Main",
    products: [
      {
        id: "somun-off",
        name: "Somun Bread",
        description: "Traditional Bosnian flatbread, soft and fluffy, perfect for any meal.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
        category: "Bread"
      },
      {
        id: "burek-off",
        name: "Burek with Meat",
        description: "Flaky phyllo pastry filled with seasoned ground beef, a Balkan classic.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
        category: "Pastry"
      },
      {
        id: "kiflice-off",
        name: "Kiflice",
        description: "Crescent-shaped rolls, buttery and light, ideal for breakfast.",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
        category: "Bread"
      },
      {
        id: "pita-off",
        name: "Pita with Cheese",
        description: "Spiral phyllo pie filled with creamy feta cheese and herbs.",
        image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
        category: "Pastry"
      },
      {
        id: "pogaca-off",
        name: "Pogača",
        description: "Soft, savory bread topped with sesame seeds, traditionally served warm.",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
        category: "Bread"
      },
      {
        id: "tulumba-off",
        name: "Tulumba",
        description: "Deep-fried dough soaked in sweet syrup, crispy outside and soft inside.",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=300&fit=crop",
        category: "Sweets"
      }
    ]
  },
  {
    id: "dreieich",
    name: "Balkan Bäckerei Dreieich",
    city: "Dreieich",
    logo: "/images/logodreieich.png",
    shortDescription: "A cozy neighborhood bakery bringing authentic Balkan flavors to Dreieich.",
    fullDescription: "Our Dreieich bakery has quickly become a beloved neighborhood gem, known for its cozy atmosphere and exceptional baked goods. Located conveniently in the town center, this location specializes in our signature bread varieties and traditional pastries. Our friendly team takes pride in knowing our regular customers by name and always having their favorites ready. Whether you're grabbing a quick coffee and pastry or stocking up on bread for the week, our Dreieich bakery offers the perfect blend of convenience and authentic taste.",
    address: "Hauptstraße 45, 63303 Dreieich",
    phone: "+49 6103 123 456",
    hours: "Monday - Saturday: 6:30 - 18:30, Sunday: 8:00 - 13:00",
    googleMapsUrl: "https://maps.google.com/?q=Hauptstraße+45,+63303+Dreieich",
    products: [
      {
        id: "lepinja-drei",
        name: "Lepinja Bread",
        description: "Round, soft bread with a slightly crispy crust, perfect for sandwiches.",
        image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=400&h=300&fit=crop",
        category: "Bread"
      },
      {
        id: "sirnica-drei",
        name: "Sirnica",
        description: "Cheese-filled phyllo pastry, golden and delicious.",
        image: "https://images.unsplash.com/photo-1620921568482-bf70b47ddd79?w=400&h=300&fit=crop",
        category: "Pastry"
      },
      {
        id: "kroasan-drei",
        name: "Balkan Croissant",
        description: "Our take on the classic, with a unique Balkan twist.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
        category: "Pastry"
      },
      {
        id: "razni-drei",
        name: "Raženi Hleb",
        description: "Traditional rye bread, dense and flavorful with a dark crust.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
        category: "Bread"
      },
      {
        id: "baklava-drei",
        name: "Baklava",
        description: "Layers of phyllo, walnuts, and honey syrup, a sweet masterpiece.",
        image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop",
        category: "Sweets"
      },
      {
        id: "zeljanica-drei",
        name: "Zeljanica",
        description: "Spinach and cheese pie, healthy and satisfying.",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop",
        category: "Pastry"
      }
    ]
  },
  {
    id: "hanau",
    name: "Balkan Bäckerei Hanau",
    city: "Hanau",
    logo: "/images/logohanau.png",
    shortDescription: "Our newest location in Hanau, bringing the same quality and tradition to a new community.",
    fullDescription: "Our Hanau bakery represents the latest chapter in our growing story, bringing authentic Balkan baking traditions to this historic city. This modern location combines our time-honored recipes with a contemporary, welcoming space where families and friends can gather. We've quickly become a favorite among locals who appreciate our commitment to quality and authenticity. From early morning fresh bread to afternoon treats, our Hanau team is dedicated to making every visit memorable. Come discover why our customers keep coming back!",
    address: "Langstraße 78, 63450 Hanau",
    phone: "+49 6181 987 654",
    hours: "Monday - Saturday: 6:00 - 19:00, Sunday: 7:30 - 14:00",
    googleMapsUrl: "https://maps.google.com/?q=Langstraße+78,+63450+Hanau",
    products: [
      {
        id: "somun-han",
        name: "Somun Bread",
        description: "Our signature Bosnian flatbread, baked fresh throughout the day.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
        category: "Bread"
      },
      {
        id: "krompiruša-han",
        name: "Krompiruša",
        description: "Potato-filled phyllo pastry, comfort food at its finest.",
        image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop",
        category: "Pastry"
      },
      {
        id: "pecivo-han",
        name: "Pecivo Mix",
        description: "Assorted small pastries, perfect for sharing or sampling.",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
        category: "Pastry"
      },
      {
        id: "peksimiti-han",
        name: "Peksimiti",
        description: "Crispy twice-baked bread, traditional and satisfying.",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
        category: "Bread"
      },
      {
        id: "hurmasice-han",
        name: "Hurmašice",
        description: "Syrup-soaked cookie dough dessert with walnuts, sweet perfection.",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=300&fit=crop",
        category: "Sweets"
      },
      {
        id: "burek-han",
        name: "Burek Trio",
        description: "Three classic burek varieties: meat, cheese, and spinach.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
        category: "Pastry"
      }
    ]
  }
]

export function getLocationById(id: string): Location | undefined {
  return locations.find(location => location.id === id)
}
