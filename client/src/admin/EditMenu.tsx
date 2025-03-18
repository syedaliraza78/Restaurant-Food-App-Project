import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MenuItem } from "@/types/restaurantType";
import { Dispatch, SetStateAction } from "react";

export const EditMenu = ({
  selectedMenu,
  editOpen,
  setEditOpen,
}: {
  selectedMenu: MenuItem;
  editOpen: boolean;
  setEditOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Menu</DialogTitle>
          <DialogDescription>
            Update your menu to keep your offerings fresh and exciting!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
