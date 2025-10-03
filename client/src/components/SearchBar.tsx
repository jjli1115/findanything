import { Search, X } from "lucide-react";
import { Input } from "./ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search items..." }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none z-10">
        <Search className="h-5 w-5" />
      </div>
      <Input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-10 h-12 bg-card rounded-xl border-card-border w-full"
        data-testid="input-search"
      />
      {value && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={() => onChange("")}
            className="text-muted-foreground hover-elevate rounded-full p-1"
            data-testid="button-clear-search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
