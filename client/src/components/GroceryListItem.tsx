import { Checkbox } from "./ui/checkbox";
import { MapPin } from "lucide-react";

interface GroceryListItemProps {
  id: string;
  name: string;
  location?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function GroceryListItem({
  id,
  name,
  location,
  checked,
  onCheckedChange,
}: GroceryListItemProps) {
  return (
    <div
      className="flex items-start gap-3 py-3 px-4 hover-elevate rounded-lg"
      data-testid={`list-item-${id}`}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-0.5"
        data-testid={`checkbox-${id}`}
      />
      <label
        htmlFor={id}
        className={`flex-1 cursor-pointer ${checked ? "line-through text-muted-foreground" : ""}`}
      >
        <div className="font-medium text-sm mb-0.5">{name}</div>
        {location && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        )}
      </label>
    </div>
  );
}
