import { useState } from "react";
import StoreCard from "@/components/StoreCard";
import { Button } from "@/components/ui/button";
import { Plus, Store as StoreIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StoresPage() {
  const [open, setOpen] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");

  const mockStores = [
    {
      id: "1",
      name: "Target",
      address: "123 Main St, San Francisco, CA 94102",
      distance: 2.3,
      itemCount: 15,
    },
    {
      id: "2",
      name: "Walgreens",
      address: "456 Market St, San Francisco, CA 94103",
      distance: 1.8,
      itemCount: 8,
    },
  ];

  const handleAddStore = () => {
    console.log("Adding store:", storeName, storeAddress);
    setOpen(false);
    setStoreName("");
    setStoreAddress("");
  };

  const handleNavigate = (storeName: string) => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    
    const address = encodeURIComponent(mockStores.find(s => s.name === storeName)?.address || "");
    
    if (isIOS) {
      window.open(`maps://maps.apple.com/?q=${address}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border z-40 p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Stores</h1>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="sm" data-testid="button-add-store">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Store
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Store</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="store-name">Store Name</Label>
                    <Input
                      id="store-name"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      placeholder="e.g., Target"
                      data-testid="input-store-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="store-address">Address</Label>
                    <Input
                      id="store-address"
                      value={storeAddress}
                      onChange={(e) => setStoreAddress(e.target.value)}
                      placeholder="e.g., 123 Main St, San Francisco, CA"
                      data-testid="input-store-address"
                    />
                  </div>
                  <Button
                    onClick={handleAddStore}
                    className="w-full"
                    data-testid="button-submit-store"
                  >
                    Add Store
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="p-4">
          {mockStores.length > 0 ? (
            <div className="space-y-3">
              {mockStores.map((store) => (
                <StoreCard
                  key={store.id}
                  {...store}
                  onClick={() => console.log("View store", store.id)}
                  onNavigate={() => handleNavigate(store.name)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <StoreIcon className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No stores yet</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Add your first store to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
