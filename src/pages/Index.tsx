
import React from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import PropertyList from "@/components/PropertyList";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bed, House, MapPin } from "lucide-react";

const Index = () => {
  // Category tabs for property types
  const categories = [
    { icon: House, label: "Houses" },
    { icon: Bed, label: "Apartments" },
    { icon: MapPin, label: "Near beach" },
    { icon: House, label: "Cabins" },
    { icon: House, label: "Tiny homes" },
    { icon: Bed, label: "Unique stays" },
    { icon: House, label: "Countryside" },
    { icon: House, label: "Luxury" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-pattern bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find your perfect getaway
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover unique places to stay and memorable experiences around the world.
              </p>
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Property Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="Houses">
              <div className="overflow-x-auto pb-3">
                <TabsList className="h-auto p-1">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.label} 
                      value={category.label}
                      className="flex flex-col items-center px-4 py-2 gap-2"
                    >
                      <category.icon className="h-5 w-5" />
                      <span className="text-xs">{category.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {categories.map((category) => (
                <TabsContent key={category.label} value={category.label}>
                  <PropertyList />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Featured Experiences */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
              Travel inspiration for your next adventure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Explore unique cities",
                  description: "Find hidden gems in popular destinations",
                  image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
                },
                {
                  title: "Escape to nature",
                  description: "Unplug and reconnect in beautiful settings",
                  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
                },
                {
                  title: "Unforgettable experiences",
                  description: "Activities hosted by locals who know their cities best",
                  image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
                },
              ].map((card, index) => (
                <div key={index} className="group hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p className="text-sm opacity-90">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Host CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Become a host
                </h2>
                <p className="text-lg mb-6">
                  Earn extra income sharing your space with travelers. You're in full control of your availability, prices, and house rules.
                </p>
                <Button size="lg">
                  Learn more
                </Button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                  alt="Become a host" 
                  className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
