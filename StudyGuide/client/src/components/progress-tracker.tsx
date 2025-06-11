import { useQuery } from "@tanstack/react-query";
import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Topic, UserProgress } from "@shared/schema";

export function ProgressTracker() {
  const { data: topics = [] } = useQuery<Topic[]>({
    queryKey: ["/api/topics"],
  });

  const { data: progress = [] } = useQuery<UserProgress[]>({
    queryKey: ["/api/progress"],
  });

  // Mock progress data for demonstration
  const mockProgressData = [
    { topicId: 1, title: "Stoichiometry", progress: 85, color: "bg-ib-secondary" },
    { topicId: 2, title: "Atomic Structure", progress: 60, color: "bg-ib-warning" },
    { topicId: 3, title: "Periodicity", progress: 0, color: "bg-gray-300" },
    { topicId: 4, title: "Chemical Bonding", progress: 0, color: "bg-gray-300" }
  ];

  const overallProgress = Math.round(
    mockProgressData.reduce((sum, item) => sum + item.progress, 0) / mockProgressData.length
  );

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg text-ib-neutral-800 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-ib-primary" />
          Study Progress
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {mockProgressData.map((item) => (
            <div key={item.topicId}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Topic {item.topicId}: {item.title}</span>
                <span className={`font-medium ${
                  item.progress >= 80 ? 'text-ib-secondary' :
                  item.progress >= 50 ? 'text-ib-warning' :
                  'text-gray-400'
                }`}>
                  {item.progress}%
                </span>
              </div>
              <Progress 
                value={item.progress} 
                className="w-full h-2"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Overall Progress</span>
            <span className="text-ib-primary font-semibold">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="w-full h-3 mt-2" />
        </div>
      </CardContent>
    </Card>
  );
}
