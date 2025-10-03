import { Search, ListTodo, Store, Map } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function BottomNav() {
  const [location] = useLocation();

  const tabs = [
    { icon: Search, label: "Search", path: "/" },
    { icon: ListTodo, label: "Lists", path: "/lists" },
    { icon: Store, label: "Stores", path: "/stores" },
    { icon: Map, label: "Navigate", path: "/navigate" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-card-border safe-area-inset-bottom z-50">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        {tabs.map((tab) => {
          const isActive = location === tab.path;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              data-testid={`nav-${tab.label.toLowerCase()}`}
            >
              <button
                className={`flex flex-col items-center justify-center gap-1 min-w-16 py-2 px-3 rounded-lg transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover-elevate"
                }`}
              >
                <Icon className={`h-6 w-6 ${isActive ? "stroke-[2.5]" : ""}`} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
