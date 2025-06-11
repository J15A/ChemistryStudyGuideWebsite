import { 
  Clock, Check, BookOpen, Bookmark, TrendingUp 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PeriodicTableWidget } from "@/components/periodic-table-widget";
import { ProgressTracker } from "@/components/progress-tracker";

export default function Home() {

  const recentActivity = [
    {
      id: 1,
      type: 'quiz_completed',
      title: 'Completed quiz on Molar Mass',
      time: '2 hours ago',
      icon: Check,
      color: 'bg-ib-success'
    },
    {
      id: 2,
      type: 'topic_studied',
      title: 'Studied Empirical Formulas',
      time: 'Yesterday',
      icon: BookOpen,
      color: 'bg-ib-primary'
    },
    {
      id: 3,
      type: 'bookmark_added',
      title: 'Bookmarked Molecular Geometry',
      time: '2 days ago',
      icon: Bookmark,
      color: 'bg-ib-accent'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-ib-neutral-800 mb-2">IB Chemistry Hub</h1>
        <p className="text-gray-600">Your comprehensive study companion for IB Chemistry</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Activity */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-ib-neutral-800 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-ib-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                      <div className={`w-8 h-8 ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className="text-white w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-ib-neutral-800">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Tools & Resources */}
        <div className="space-y-8">
          {/* Periodic Table Widget */}
          <PeriodicTableWidget />

          {/* Progress Tracker */}
          <ProgressTracker />
        </div>
      </div>
    </div>
  );
}
