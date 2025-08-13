import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Home from "@/pages/home";
import KingVon from "@/pages/king-von";
import Melly from "@/pages/melly";
import LilDurk from "@/pages/lil-durk";
import LilBaby from "@/pages/lil-baby";
import LilLoaded from "@/pages/lil-loaded";
import JuiceWrld from "@/pages/juice-wrld";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/king-von" component={KingVon} />
      <Route path="/melly" component={Melly} />
      <Route path="/lil-durk" component={LilDurk} />
      <Route path="/lil-baby" component={LilBaby} />
      <Route path="/lil-loaded" component={LilLoaded} />
      <Route path="/juice-wrld" component={JuiceWrld} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-dark-gray text-white font-sans">
          <Navigation />
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
