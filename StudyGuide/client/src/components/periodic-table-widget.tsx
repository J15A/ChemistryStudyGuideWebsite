import { useState } from "react";
import { Table, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { elementsData } from "@/lib/chemistry-data";
import { cn } from "@/lib/utils";

export function PeriodicTableWidget() {
  const [selectedElement, setSelectedElement] = useState<typeof elementsData[0] | null>(null);
  const [showFullTable, setShowFullTable] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      'nonmetal': 'bg-red-100 text-red-800 hover:bg-red-200',
      'noble-gas': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
      'alkali-metal': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
      'alkaline-earth-metal': 'bg-green-100 text-green-800 hover:bg-green-200',
      'metalloid': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
      'halogen': 'bg-pink-100 text-pink-800 hover:bg-pink-200',
      'transition-metal': 'bg-orange-100 text-orange-800 hover:bg-orange-200',
      'post-transition-metal': 'bg-gray-100 text-gray-800 hover:bg-gray-200',
      'lanthanide': 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
      'actinide': 'bg-teal-100 text-teal-800 hover:bg-teal-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  };

  const handleElementClick = (element: typeof elementsData[0]) => {
    setSelectedElement(element);
  };

  return (
    <>
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-ib-primary rounded-lg flex items-center justify-center mr-2">
                <Table className="text-white w-4 h-4" />
              </div>
              <CardTitle className="text-lg text-ib-neutral-800">Periodic Table</CardTitle>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-6 gap-1 mb-4">
            {/* First row */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleElementClick(elementsData[0])}
              className={cn("p-2 text-xs font-medium", getCategoryColor(elementsData[0].category))}
            >
              H
            </Button>
            <div className="col-span-4"></div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleElementClick(elementsData[1])}
              className={cn("p-2 text-xs font-medium", getCategoryColor(elementsData[1].category))}
            >
              He
            </Button>
            
            {/* Second row */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleElementClick(elementsData[2])}
              className={cn("p-2 text-xs font-medium", getCategoryColor(elementsData[2].category))}
            >
              Li
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleElementClick(elementsData[3])}
              className={cn("p-2 text-xs font-medium", getCategoryColor(elementsData[3].category))}
            >
              Be
            </Button>
            <div className="col-span-2"></div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleElementClick(elementsData[4])}
              className={cn("p-2 text-xs font-medium", getCategoryColor(elementsData[4].category))}
            >
              B
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleElementClick(elementsData[5])}
              className={cn("p-2 text-xs font-medium", getCategoryColor(elementsData[5].category))}
            >
              C
            </Button>
          </div>
          
          <Button 
            variant="outline"
            size="sm"
            onClick={() => setShowFullTable(true)}
            className="w-full text-ib-primary border-ib-primary hover:bg-blue-50"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Full Periodic Table
          </Button>
        </CardContent>
      </Card>

      {/* Element Info Dialog */}
      <Dialog open={!!selectedElement} onOpenChange={() => setSelectedElement(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-ib-primary">{selectedElement?.symbol}</span>
              <span>{selectedElement?.name}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Atomic Number</p>
                <p className="text-lg font-semibold text-ib-neutral-800">{selectedElement?.atomicNumber}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Atomic Mass</p>
                <p className="text-lg font-semibold text-ib-neutral-800">{selectedElement?.atomicMass} u</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Category</p>
              <p className="text-base font-medium text-ib-primary capitalize">
                {selectedElement?.category.replace('-', ' ')}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Full Periodic Table Dialog */}
      <Dialog open={showFullTable} onOpenChange={setShowFullTable}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Periodic Table of Elements</DialogTitle>
          </DialogHeader>
          <div className="text-center p-8">
            <Table className="w-16 h-16 text-ib-primary mx-auto mb-4" />
            <p className="text-gray-600">
              Full interactive periodic table would be implemented here with complete element data,
              trends visualization, and detailed properties.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
