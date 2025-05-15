
import React from "react";
import PropertyCard from "./PropertyCard";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Malibu, California",
    price: 349,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    ],
  },
  {
    id: 2,
    title: "Modern Downtown Apartment",
    location: "New York City, New York",
    price: 219,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23"
    ],
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 189,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    ],
  },
  {
    id: 4,
    title: "Downtown Loft with City Views",
    location: "San Francisco, California",
    price: 279,
    rating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    ],
  },
  {
    id: 5,
    title: "Lakeside Retreat",
    location: "Lake Tahoe, Nevada",
    price: 249,
    rating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    ],
  },
  {
    id: 6,
    title: "Historic Brownstone",
    location: "Boston, Massachusetts",
    price: 229,
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    ],
  },
];

const PropertyList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Popular places to stay</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
