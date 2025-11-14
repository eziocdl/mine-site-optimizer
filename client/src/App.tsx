import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Investors from "@/pages/Investors";
import Sustainability from "@/pages/Sustainability";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router({ currentLanguage }: { currentLanguage: string }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home currentLanguage={currentLanguage} />} />
      <Route path="/about" component={() => <About currentLanguage={currentLanguage} />} />
      <Route path="/products" component={() => <Products currentLanguage={currentLanguage} />} />
      <Route path="/investors" component={() => <Investors currentLanguage={currentLanguage} />} />
      <Route path="/sustainability" component={() => <Sustainability currentLanguage={currentLanguage} />} />
      <Route path="/news" component={() => <News currentLanguage={currentLanguage} />} />
      <Route path="/contact" component={() => <Contact currentLanguage={currentLanguage} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header
            cooperativeName="Global Mining Cooperative"
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
          <main className="flex-1">
            <Router currentLanguage={currentLanguage} />
          </main>
          <Footer
            cooperativeName="Global Mining Cooperative"
            currentLanguage={currentLanguage}
          />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
