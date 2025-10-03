import { useState } from "react";
import StoreMapCanvas from "@/components/StoreMapCanvas";
import RouteDisplay from "@/components/RouteDisplay";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Map, List } from "lucide-react";

export default function NavigatePage() {
  const [mapItems, setMapItems] = useState([
    { id: "1", x: 25, y: 30, name: "Milk" },
    { id: "2", x: 60, y: 45, name: "Bread" },
    { id: "3", x: 80, y: 70, name: "Eggs" },
  ]);

  const routeSteps = [
    { id: "1", itemName: "Milk", location: "Aisle 1, Dairy", order: 1 },
    { id: "2", itemName: "Bread", location: "Aisle 3, Bakery", order: 2 },
    { id: "3", itemName: "Eggs", location: "Aisle 1, Dairy", order: 3 },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-40 p-4">
          <h1 className="text-2xl font-bold mb-2">In-Store Navigation</h1>
          <p className="text-sm text-muted-foreground">
            Follow the optimized route to collect all items
          </p>
        </div>

        <div className="p-4">
          <Tabs defaultValue="map" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-4">
              <TabsTrigger value="map" data-testid="tab-map">
                <Map className="h-4 w-4 mr-2" />
                Map View
              </TabsTrigger>
              <TabsTrigger value="list" data-testid="tab-list">
                <List className="h-4 w-4 mr-2" />
                Route Steps
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="space-y-4">
              <StoreMapCanvas
                items={mapItems}
                onItemsChange={setMapItems}
                editable={false}
              />
              <div className="text-xs text-muted-foreground text-center">
                Follow the numbered markers in order
              </div>
            </TabsContent>

            <TabsContent value="list">
              <RouteDisplay
                steps={routeSteps}
                estimatedTime={5}
                onStartNavigation={() => console.log("Navigation started")}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
