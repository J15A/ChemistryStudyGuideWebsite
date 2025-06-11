import { Menu, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface HeaderProps {
  onMobileMenuToggle: () => void;
  progress: number;
}

export function Header({ onMobileMenuToggle, progress }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-ib-primary rounded-lg flex items-center justify-center">
                <Atom className="text-white w-4 h-4" />
              </div>
              <h1 className="text-xl font-bold text-ib-neutral-800">IB Chemistry Hub</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-ib-neutral-100 px-3 py-2 rounded-lg">
              <span className="text-sm text-ib-neutral-700">Progress:</span>
              <Progress value={progress} className="w-16 h-2" />
              <span className="text-sm font-medium text-ib-secondary">{progress}%</span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onMobileMenuToggle}
            className="md:hidden p-2"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
