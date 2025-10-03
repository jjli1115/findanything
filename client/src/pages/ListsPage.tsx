import { useState } from "react";
import GroceryListItem from "@/components/GroceryListItem";
import { Button } from "@/components/ui/button";
import { Plus, ListTodo, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function ListsPage() {
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  
  const [items, setItems] = useState([
    { id: "1", name: "Milk", location: "Aisle 1, Dairy", checked: false },
    { id: "2", name: "Bread", location: "Aisle 3, Bakery", checked: false },
    { id: "3", name: "Eggs", location: "Aisle 1, Dairy", checked: true },
  ]);

  const handleAddItem = () => {
    console.log("Adding item:", itemName);
    setOpen(false);
    setItemName("");
  };

  const handleToggleItem = (id: string, checked: boolean) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked } : item))
    );
  };

  const uncheckedItems = items.filter((item) => !item.checked);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-40 p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Grocery List</h1>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="sm" data-testid="button-add-list-item">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Item to List</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="item-name">Item Name</Label>
                    <Input
                      id="item-name"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      placeholder="e.g., Omega 3 Fish Oil"
                      data-testid="input-item-name"
                    />
                  </div>
                  <Button
                    onClick={handleAddItem}
                    className="w-full"
                    data-testid="button-submit-item"
                  >
                    Add to List
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {uncheckedItems.length > 0 && (
            <Card className="p-3 bg-primary/10 border-primary/20">
              <Button
                variant="default"
                size="sm"
                className="w-full"
                data-testid="button-optimize-route"
                onClick={() => console.log("Optimizing route")}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Optimize Shopping Route
              </Button>
            </Card>
          )}
        </div>

        <div className="p-4">
          {items.length > 0 ? (
            <div className="space-y-1">
              {items.map((item) => (
                <GroceryListItem
                  key={item.id}
                  {...item}
                  onCheckedChange={(checked) =>
                    handleToggleItem(item.id, checked)
                  }
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ListTodo className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No items yet</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Add items to create your grocery list
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
