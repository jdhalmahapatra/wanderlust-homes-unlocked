
import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  rating,
  images,
}) => {
  return (
    <Link to={`/property/${id}`} className="block">
      <div className="property-card rounded-xl overflow-hidden bg-white">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <AspectRatio ratio={4/3}>
                  <img
                    src={image}
                    alt={`${title} - image ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        <div className="p-4">
          <div className="flex justify-between">
            <h3 className="font-medium text-lg truncate">{title}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current text-primary" />
              <span className="ml-1">{rating}</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">{location}</p>
          <p className="mt-2">
            <span className="font-semibold">${price}</span>{" "}
            <span className="text-gray-500">night</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
