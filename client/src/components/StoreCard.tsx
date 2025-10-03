import { MapPin, ChevronRight, Navigation } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface StoreCardProps {
  id: string;
  name: string;
  address: string;
  distance?: number;
  itemCount?: number;
  onClick?: () => void;
  onNavigate?: () => void;
}

export default function StoreCard({
  name,
  address,
  distance,
  itemCount = 0,
  onClick,
  onNavigate,
}: StoreCardProps) {
  return (
    <Card
      className="p-4 hover-elevate cursor-pointer"
      onClick={onClick}
      data-testid={`card-store-${name}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-2">
            <h3 className="font-semibold text-base leading-tight">{name}</h3>
            {distance !== undefined && (
              <Badge variant="secondary" className="ml-auto shrink-0 text-xs">
                <MapPin className="h-3 w-3 mr-1" />
                {distance.toFixed(1)} mi
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-1">{address}</p>
          {itemCount > 0 && (
            <p className="text-xs text-muted-foreground">
              {itemCount} items in stock
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 shrink-0">
          {onNavigate && (
            <Button
              size="icon"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate();
              }}
              data-testid="button-navigate"
            >
              <Navigation className="h-4 w-4" />
            </Button>
          )}
          {onClick && <ChevronRight className="h-5 w-5 text-muted-foreground" />}
        </div>
      </div>
    </Card>
  );
}
