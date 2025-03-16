import { useRestaurantStore } from "@/store/useRestaurantStore";
import { Badge } from "./ui/badge";
import { Timer } from "lucide-react";
import { AvailableMenu } from "./AvailableMenu";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const RestaurantDeails = () => {
  const params = useParams();
  const { singleRestaurant, getSingleRestaurant } = useRestaurantStore();

  useEffect(() => {
    getSingleRestaurant(params.id!);
  }, [params.id]);

  return (
    <div>
      <div>
        <div>
          <img
            src={singleRestaurant?.imageUrl || "Loading..."}
            alt="res_image"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <div>
            <h1 className="font-medium text-xl">
              {singleRestaurant?.restaurantName || "Loading..."}
            </h1>
            <div>
              {singleRestaurant?.cuisines.map(
                (cuisine: string, idx: number) => (
                  <Badge key={idx}>{cuisine}</Badge>
                )
              )}
            </div>
            <div className="flex md:flex-row flex-col gap-2 my-5">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <h1 className="flex items-center gap-2 font-medium">
                  Delivery Time:{" "}
                  <span className="text-[#D19254]">
                    {singleRestaurant?.deliveryTime || "NA"} mins
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {singleRestaurant?.menus && (
          <AvailableMenu menus={singleRestaurant?.menus!} />
        )}
      </div>
    </div>
  );
};
