import { useParams } from "react-router-dom";
import { FilterPage } from "./FilterPage";
import { Input } from "./ui/input";
import { useState } from "react";
import { useRestaurantStore } from "@/store/useRestaurantStore";
import { Button } from "./ui/button";

export const SearchPage = () => {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const {
    loading,
    searchedRestaurant,
    searchRestaurant,
    setAppliedFilter,
    appliedFilter,
  } = useRestaurantStore();

  const param = useParams();
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage />
        <div className="flex-1">
          {/* Search Input Field  */}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={searchQuery}
              placeholder="Search by restaurant & cuisines"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              onClick={() =>
                searchRestaurant(params.text!, searchQuery, appliedFilter)
              }
              className="bg-orange hover:bg-hoverOrange"
            >
              Search
            </Button>
          </div>
          {/* Searched Items display here  */}
        </div>
      </div>
    </div>
  );
};
