
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ReviewSource = "all" | "google" | "facebook" | "site";

interface ReviewsFilterProps {
  onFilterChange: (source: ReviewSource) => void;
  currentFilter: ReviewSource;
}

const ReviewsFilter = ({ onFilterChange, currentFilter }: ReviewsFilterProps) => {
  return (
    <div className="mb-8">
      <Tabs 
        defaultValue={currentFilter} 
        onValueChange={(value) => onFilterChange(value as ReviewSource)}
        className="w-full max-w-md mx-auto"
      >
        <TabsList className="grid grid-cols-4 w-full bg-roofing-charcoal/10">
          <TabsTrigger 
            value="all" 
            className={`${currentFilter === "all" ? "bg-roofing-teal text-white" : ""}`}
          >
            All
          </TabsTrigger>
          <TabsTrigger 
            value="google" 
            className={`${currentFilter === "google" ? "bg-roofing-teal text-white" : ""}`}
          >
            Google
          </TabsTrigger>
          <TabsTrigger 
            value="facebook" 
            className={`${currentFilter === "facebook" ? "bg-roofing-teal text-white" : ""}`}
          >
            Facebook
          </TabsTrigger>
          <TabsTrigger 
            value="site" 
            className={`${currentFilter === "site" ? "bg-roofing-teal text-white" : ""}`}
          >
            Website
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ReviewsFilter;
