
import React, { useState } from "react";
import { Search, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", location);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className={`bg-white rounded-full shadow-lg transition-all duration-300 ${isExpanded ? 'p-8' : 'p-4'}`}>
        <form onSubmit={handleSearch}>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search destinations"
                  className="pl-10 pr-4 py-6 rounded-full border-gray-300"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => setIsExpanded(true)}
                  onBlur={() => setIsExpanded(false)}
                />
              </div>
            </div>

            {isExpanded && (
              <>
                <div className="flex-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Check in - Check out</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <div className="p-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Select dates</h4>
                          <p className="text-sm text-gray-500">
                            Calendar would go here
                          </p>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Users className="mr-2 h-4 w-4" />
                        <span>Add guests</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <div className="p-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Add guests</h4>
                          <div className="flex justify-between items-center">
                            <span>Adults</span>
                            <div className="flex items-center">
                              <Button variant="outline" size="sm">-</Button>
                              <span className="px-4">0</span>
                              <Button variant="outline" size="sm">+</Button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Children</span>
                            <div className="flex items-center">
                              <Button variant="outline" size="sm">-</Button>
                              <span className="px-4">0</span>
                              <Button variant="outline" size="sm">+</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </>
            )}

            <Button type="submit" className={`rounded-full ${isExpanded ? 'px-6' : 'w-auto'}`}>
              <Search className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Search</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
