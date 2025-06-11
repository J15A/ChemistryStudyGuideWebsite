import { useQuery } from "@tanstack/react-query";
import { TrendingUp, Target, Calendar, Award, Clock, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import type { Topic, UserProgress } from "@shared/schema";

export default function ProgressPage() {
  const { data: topics = [] } = useQuery<Topic[]>({
    queryKey: ["/api/topics"],
  });

  const { data: progress = [] } = useQuery<UserProgress[]>({
    queryKey: ["/api/progress"],
  });

  // Mock detailed progress data
  const progressData = [
    { topicId: 1, title: "Stoichiometric relationships", progress: 85, timeSpent: "4h 30m", lastStudied: "Today", status: "completed" },
    { topicId: 2, title: "Atomic structure", progress: 60, timeSpent: "2h 15m", lastStudied: "Yesterday", status: "in-progress" },
    { topicId: 3, title: "Periodicity", progress: 25, timeSpent: "1h 10m", lastStudied: "3 days ago", status: "in-progress" },
    { topicId: 4, title: "Chemical bonding and structure", progress: 10, timeSpent: "30m", lastStudied: "1 week ago", status: "started" },
    { topicId: 5, title: "Energetics/thermochemistry", progress: 0, timeSpent: "0m", lastStudied: "Never", status: "not-started" },
    { topicId: 6, title: "Chemical kinetics", progress: 0, timeSpent: "0m", lastStudied: "Never", status: "not-started" }
  ];

  const overallProgress = Math.round(
    progressData.reduce((sum, item) => sum + item.progress, 0) / progressData.length
  );

  const totalTimeSpent = "8h 25m";
  const completedTopics = progressData.filter(item => item.progress >= 80).length;
  const streak = 5; // days

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'started': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'started': return 'Started';
      default: return 'Not Started';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-ib-neutral-800 mb-2">Study Progress</h1>
        <p className="text-gray-600">Track your learning journey through IB Chemistry</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-ib-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Overall Progress</p>
                <p className="text-xl font-bold text-ib-neutral-800">{overallProgress}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-ib-secondary rounded-lg flex items-center justify-center">
                <Award className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed Topics</p>
                <p className="text-xl font-bold text-ib-neutral-800">{completedTopics}/{progressData.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-purple-100">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <Clock className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Time Spent</p>
                <p className="text-xl font-bold text-ib-neutral-800">{totalTimeSpent}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-50 to-orange-100">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-ib-accent rounded-lg flex items-center justify-center">
                <Calendar className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Study Streak</p>
                <p className="text-xl font-bold text-ib-neutral-800">{streak} days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Overall Progress Bar */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-ib-neutral-800 flex items-center">
            <Target className="w-5 h-5 mr-2 text-ib-primary" />
            Overall Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">IB Chemistry Curriculum</span>
              <span className="text-ib-primary font-semibold">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="w-full h-4" />
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="text-gray-500">Remaining</p>
                <p className="font-semibold text-ib-neutral-800">{100 - overallProgress}%</p>
              </div>
              <div>
                <p className="text-gray-500">Est. Completion</p>
                <p className="font-semibold text-ib-neutral-800">3 weeks</p>
              </div>
              <div>
                <p className="text-gray-500">Next Milestone</p>
                <p className="font-semibold text-ib-neutral-800">50%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Topic Progress */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-ib-neutral-800 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-ib-primary" />
            Topic Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {progressData.map((item, index) => (
              <div key={item.topicId} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-ib-primary rounded-lg flex items-center justify-center text-white text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium text-ib-neutral-800">{item.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.timeSpent}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.lastStudied}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getStatusColor(item.status)}>
                      {getStatusText(item.status)}
                    </Badge>
                    <span className={`font-medium text-sm ${
                      item.progress >= 80 ? 'text-ib-secondary' :
                      item.progress >= 50 ? 'text-ib-warning' :
                      item.progress > 0 ? 'text-ib-primary' :
                      'text-gray-400'
                    }`}>
                      {item.progress}%
                    </span>
                  </div>
                </div>
                <Progress value={item.progress} className="w-full h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Study Recommendations */}
      <Card className="bg-gradient-to-r from-ib-primary to-ib-primary-dark text-white">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Study Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Focus on completing "Atomic structure" - you're 60% done!</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Practice more quizzes to reinforce your understanding of stoichiometry</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm">Start "Energetics/thermochemistry" to maintain your study momentum</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}