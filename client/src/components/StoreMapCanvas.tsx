import { useRef, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Plus, Trash2 } from "lucide-react";

interface MapItem {
  id: string;
  x: number;
  y: number;
  name: string;
}

interface StoreMapCanvasProps {
  items?: MapItem[];
  onItemsChange?: (items: MapItem[]) => void;
  editable?: boolean;
}

export default function StoreMapCanvas({
  items = [],
  onItemsChange,
  editable = false,
}: StoreMapCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [localItems, setLocalItems] = useState<MapItem[]>(items);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!editable) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newItem: MapItem = {
      id: Date.now().toString(),
      x,
      y,
      name: `Item ${localItems.length + 1}`,
    };

    const updatedItems = [...localItems, newItem];
    setLocalItems(updatedItems);
    onItemsChange?.(updatedItems);
  };

  const handleDeleteItem = (id: string) => {
    const updatedItems = localItems.filter((item) => item.id !== id);
    setLocalItems(updatedItems);
    onItemsChange?.(updatedItems);
    setSelectedItem(null);
  };

  return (
    <div className="space-y-4">
      <div
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="relative w-full aspect-[4/3] bg-card border-2 border-dashed border-card-border rounded-xl overflow-hidden cursor-crosshair"
        data-testid="canvas-store-map"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-card to-muted/20" />
        
        {localItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
              selectedItem === item.id ? "z-10" : ""
            }`}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItem(item.id);
            }}
            data-testid={`map-item-${item.id}`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                selectedItem === item.id
                  ? "bg-primary text-primary-foreground scale-125"
                  : "bg-chart-1 text-white"
              } transition-all shadow-lg`}
            >
              {index + 1}
            </div>
            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-background/90 px-2 py-1 rounded shadow">
              {item.name}
            </div>
          </div>
        ))}

        {editable && localItems.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
            <div className="text-center">
              <Plus className="h-8 w-8 mx-auto mb-2" />
              <p>Click to add item locations</p>
            </div>
          </div>
        )}
      </div>

      {selectedItem && editable && (
        <Button
          variant="destructive"
          size="sm"
          onClick={() => handleDeleteItem(selectedItem)}
          data-testid="button-delete-map-item"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Remove Item
        </Button>
      )}
    </div>
  );
}
