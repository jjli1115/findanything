import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import ItemCard from "@/components/ItemCard";
import { Button } from "@/components/ui/button";
import { Plus, Package } from "lucide-react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const mockItems = [
    {
      id: "1",
      name: "Size 43 Mocha Birkenstock Bostons",
      storeName: "Target",
      location: "Aisle 5, Footwear Section",
    },
    {
      id: "2",
      name: "Omega 3 Fish Oil",
      storeName: "Walgreens",
      location: "Aisle 12, Health & Wellness",
    },
  ];

  const filteredItems = mockItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-40 p-4">
          <h1 className="text-2xl font-bold mb-4">Search Items</h1>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search for items..."
          />
        </div>

        <div className="p-4">
          {searchQuery ? (
            filteredItems.length > 0 ? (
              <div className="space-y-3">
                {filteredItems.map((item) => (
                  <ItemCard
                    key={item.id}
                    {...item}
                    onEdit={() => console.log("Edit", item.id)}
                    onDelete={() => console.log("Delete", item.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Package className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No items found</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Try a different search term
                </p>
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Package className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Start searching</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Search for items to find them in nearby stores
              </p>
              <Button size="sm" data-testid="button-add-item">
                <Plus className="h-4 w-4 mr-2" />
                Add New Item
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
