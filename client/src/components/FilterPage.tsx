import { Button } from "./ui/button";
import { useRestaurantStore } from "@/store/useRestaurantStore";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export type FilterOptionsState = {
  id: string;
  label: string;
};

const filterOptions: FilterOptionsState[] = [
  { id: "burger", label: "Burger" },
  { id: "pizza", label: "Pizza" },
  { id: "biryani", label: "Biryani" },
  { id: "momos", label: "Momos" },
];

export const FilterPage = () => {
  const { setAppliedFilter, appliedFilter, resetAppliedFilter } =
    useRestaurantStore();

  const appliedFilterHandler = (value: string) => {
    setAppliedFilter(value);
  };

  return (
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg">Filter by cuisines</h1>
        <Button variant="link" onClick={resetAppliedFilter}>
          Reset
        </Button>
      </div>

      {filterOptions.map((option) => (
        <div key={option.id} className="flex items-center space-x-2 my-5">
          <Checkbox
            id={option.id}
            checked={appliedFilter.includes(option.label)}
            onChange={() => appliedFilterHandler(option.label)}
          />
          <Label
            htmlFor={option.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  );
};
