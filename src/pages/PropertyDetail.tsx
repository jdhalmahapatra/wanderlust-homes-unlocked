
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Star, Users, Bed, Bath, Home, MapPin, Share, Heart, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Sample property data - in a real app, you would fetch this based on the ID
const properties = [
  {
    id: "1",
    title: "Luxury Beachfront Villa",
    description: "Enjoy this beautiful beachfront villa with amazing ocean views. This spacious property features 4 bedrooms, a private pool, and direct beach access. Perfect for family gatherings or a relaxing getaway with friends.",
    location: "Malibu, California",
    price: 349,
    rating: 4.9,
    reviews: 245,
    beds: 4,
    baths: 3,
    guests: 8,
    host: {
      name: "Jennifer",
      image: "https://i.pravatar.cc/150?img=1",
      isSuperhost: true,
      joinedDate: "January 2018"
    },
    amenities: [
      "Wifi", "Kitchen", "Free parking", "Pool", "Hot tub", "Beach access",
      "BBQ grill", "AC", "TV", "Washer/Dryer"
    ],
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    ],
  },
  {
    id: "2",
    title: "Modern Downtown Apartment",
    description: "Contemporary apartment in the heart of downtown. Walking distance to restaurants, shops, and entertainment. Features a fully-equipped kitchen and modern amenities.",
    location: "New York City, New York",
    price: 219,
    rating: 4.8,
    reviews: 180,
    beds: 2,
    baths: 1,
    guests: 4,
    host: {
      name: "Michael",
      image: "https://i.pravatar.cc/150?img=8",
      isSuperhost: true,
      joinedDate: "March 2019"
    },
    amenities: [
      "Wifi", "Kitchen", "Gym access", "Washer/Dryer", "AC", "TV",
      "Workspace", "Elevator", "Doorman"
    ],
    images: [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    ],
  },
  // More properties...
];

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id) || properties[0]; // Default to the first property if not found

  // Sample booking state
  const [checkInDate, setCheckInDate] = React.useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = React.useState<Date | undefined>(undefined);
  const [guests, setGuests] = React.useState(1);

  // Calculate total price
  const nights = checkInDate && checkOutDate
    ? Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  const totalPrice = property.price * (nights || 1);
  const serviceFee = totalPrice * 0.12;
  const cleaningFee = 85;
  const finalTotal = totalPrice + serviceFee + cleaningFee;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Property Title Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-current text-primary" />
                <span className="ml-1 font-medium">{property.rating}</span>
                <span className="ml-1 text-gray-600">({property.reviews} reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="ml-1 text-gray-600">{property.location}</span>
              </div>
              <div className="flex items-center ml-auto gap-2">
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Share className="h-4 w-4 mr-1" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          </div>

          {/* Property Images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden">
            <div className="md:col-span-2 md:row-span-2">
              <AspectRatio ratio={1} className="bg-muted">
                <img 
                  src={property.images[0]} 
                  alt={property.title}
                  className="object-cover w-full h-full" 
                />
              </AspectRatio>
            </div>
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index}>
                <AspectRatio ratio={1} className="bg-muted">
                  <img 
                    src={image} 
                    alt={`${property.title} - image ${index + 1}`}
                    className="object-cover w-full h-full" 
                  />
                </AspectRatio>
              </div>
            ))}
          </div>

          {/* Property Details and Booking Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: Property details */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    Hosted by {property.host.name}
                    {property.host.isSuperhost && (
                      <span className="text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full ml-2">
                        Superhost
                      </span>
                    )}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {property.beds} beds · {property.baths} baths · Up to {property.guests} guests
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={property.host.image} 
                      alt={property.host.name}
                      className="w-14 h-14 rounded-full object-cover" 
                    />
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Key features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-start">
                  <Home className="h-6 w-6 text-gray-700 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Entire home</h3>
                    <p className="text-sm text-gray-600">You'll have the place to yourself.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="h-6 w-6 text-gray-700 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Self check-in</h3>
                    <p className="text-sm text-gray-600">Check yourself in with the keypad.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gray-700 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Great location</h3>
                    <p className="text-sm text-gray-600">90% of recent guests gave the location a 5-star rating.</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />
              
              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <Separator className="my-6" />

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: Booking widget */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>${property.price} night</span>
                    <div className="flex items-center text-sm font-normal">
                      <Star className="h-4 w-4 fill-current text-primary mr-1" />
                      <span>{property.rating} · {property.reviews} reviews</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="border rounded-tl-md rounded-bl-md p-2">
                        <div className="text-xs font-medium mb-1">CHECK-IN</div>
                        <Calendar
                          mode="single"
                          selected={checkInDate}
                          onSelect={setCheckInDate}
                          className="p-0"
                          disabled={(date) => date < new Date()}
                        />
                      </div>
                      <div className="border rounded-tr-md rounded-br-md p-2">
                        <div className="text-xs font-medium mb-1">CHECKOUT</div>
                        <Calendar
                          mode="single"
                          selected={checkOutDate}
                          onSelect={setCheckOutDate}
                          className="p-0"
                          disabled={(date) => !checkInDate || date <= checkInDate}
                        />
                      </div>
                    </div>

                    <div className="border rounded-md p-3">
                      <div className="text-xs font-medium mb-2">GUESTS</div>
                      <div className="flex items-center justify-between">
                        <span>{guests} guest{guests > 1 ? 's' : ''}</span>
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            disabled={guests <= 1}
                            onClick={() => setGuests(guests - 1)}
                          >
                            -
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            disabled={guests >= property.guests}
                            onClick={() => setGuests(guests + 1)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      {checkInDate && checkOutDate ? 'Reserve' : 'Check availability'}
                    </Button>

                    {checkInDate && checkOutDate && (
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">${property.price} x {nights} nights</span>
                          <span>${totalPrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Cleaning fee</span>
                          <span>${cleaningFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Service fee</span>
                          <span>${serviceFee.toFixed(0)}</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>${finalTotal.toFixed(0)}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
