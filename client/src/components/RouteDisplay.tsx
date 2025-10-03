import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Navigation, Clock, MapPin } from "lucide-react";

interface RouteStep {
  id: string;
  itemName: string;
  location: string;
  order: number;
}

interface RouteDisplayProps {
  steps: RouteStep[];
  estimatedTime?: number;
  onStartNavigation?: () => void;
}

export default function RouteDisplay({
  steps,
  estimatedTime,
  onStartNavigation,
}: RouteDisplayProps) {
  return (
    <div className="space-y-4">
      {estimatedTime && (
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Estimated time: {estimatedTime} min</span>
            </div>
            <Button size="sm" onClick={onStartNavigation} data-testid="button-start-navigation">
              <Navigation className="h-4 w-4 mr-2" />
              Start
            </Button>
          </div>
        </Card>
      )}

      <div className="space-y-3">
        {steps.map((step, index) => (
          <Card
            key={step.id}
            className="p-4"
            data-testid={`route-step-${step.order}`}
          >
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                {step.order}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm mb-1">{step.itemName}</h4>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{step.location}</span>
                </div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="ml-4 mt-2 h-6 w-0.5 bg-border" />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
