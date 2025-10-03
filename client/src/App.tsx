import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import SearchPage from "@/pages/SearchPage";
import StoresPage from "@/pages/StoresPage";
import ListsPage from "@/pages/ListsPage";
import NavigatePage from "@/pages/NavigatePage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={SearchPage} />
        <Route path="/stores" component={StoresPage} />
        <Route path="/lists" component={ListsPage} />
        <Route path="/navigate" component={NavigatePage} />
        <Route component={NotFound} />
      </Switch>
      <BottomNav />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
