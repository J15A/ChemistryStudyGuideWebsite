import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";
import Home from "@/pages/home";
import TopicPage from "@/pages/topic";
import TopicsPage from "@/pages/topics";
import QuizPage from "@/pages/quiz";
import ProgressPage from "@/pages/progress";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/topics" component={TopicsPage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/progress" component={ProgressPage} />
      <Route path="/topic/:slug" component={TopicPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock progress for header
  const mockProgress = 48;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-ib-neutral-50">
          <Header
            onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            progress={mockProgress}
          />

          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 lg:p-8 pb-20 lg:pb-8 lg:ml-80">
              <Router />
            </main>
          </div>

          <MobileNav />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
