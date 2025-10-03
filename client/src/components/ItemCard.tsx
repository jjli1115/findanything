import { MapPin, Pencil, Trash2 } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface ItemCardProps {
  id: string;
  name: string;
  storeName: string;
  location?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function ItemCard({
  name,
  storeName,
  location,
  onEdit,
  onDelete,
}: ItemCardProps) {
  return (
    <Card className="p-4" data-testid={`card-item-${name}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-base mb-1">{name}</h4>
          <p className="text-sm text-muted-foreground mb-1">{storeName}</p>
          {location && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
          )}
        </div>
        <div className="flex gap-1 shrink-0">
          {onEdit && (
            <Button
              size="icon"
              variant="ghost"
              onClick={onEdit}
              data-testid="button-edit-item"
            >
              <Pencil className="h-4 w-4" />
            </Button>
          )}
          {onDelete && (
            <Button
              size="icon"
              variant="ghost"
              onClick={onDelete}
              data-testid="button-delete-item"
            >
              <Trash2 className="h-4 w-4 text-destructive" />
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
