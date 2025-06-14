import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CircleHelp, Trophy, Clock, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QuizCard } from "@/components/quiz-card";
import type { Quiz } from "@shared/schema";

export default function QuizPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  // Get difficulty-based quizzes
  const { data: easyQuiz } = useQuery<Quiz>({
    queryKey: ["/api/quizzes/difficulty/easy"],
  });

  const { data: mediumQuiz } = useQuery<Quiz>({
    queryKey: ["/api/quizzes/difficulty/medium"],
  });

  const { data: hardQuiz } = useQuery<Quiz>({
    queryKey: ["/api/quizzes/difficulty/hard"],
  });

  // Mock quiz statistics
  const quizStats = {
    totalAttempts: 47,
    averageScore: 78,
    bestScore: 95,
    timeSpent: "2h 15m"
  };

  if (selectedQuiz) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ib-neutral-800">Practice Quiz</h1>
          <Button 
            variant="outline" 
            onClick={() => setSelectedQuiz(null)}
          >
            Back to Quiz Selection
          </Button>
        </div>
        <QuizCard quiz={selectedQuiz} />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-ib-neutral-800 mb-2">Practice Quizzes</h1>
        <p className="text-gray-600">Test your knowledge with interactive quizzes for each topic</p>
      </div>

      {/* Quiz Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-ib-primary rounded-lg flex items-center justify-center">
                <CircleHelp className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Attempts</p>
                <p className="text-xl font-bold text-ib-neutral-800">{quizStats.totalAttempts}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-ib-secondary rounded-lg flex items-center justify-center">
                <Target className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Average Score</p>
                <p className="text-xl font-bold text-ib-neutral-800">{quizStats.averageScore}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-ib-warning rounded-lg flex items-center justify-center">
                <Trophy className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Best Score</p>
                <p className="text-xl font-bold text-ib-neutral-800">{quizStats.bestScore}%</p>
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
                <p className="text-xl font-bold text-ib-neutral-800">{quizStats.timeSpent}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Available Quizzes */}
      <div>
        <h2 className="text-2xl font-bold text-ib-neutral-800 mb-6">Difficulty-Based Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Easy Quiz */}
          {easyQuiz && (
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <CircleHelp className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs mb-2 bg-green-100 text-green-800">
                        Easy
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg text-ib-neutral-800">
                  Fundamentals Quiz
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Basic chemistry concepts covering atomic structure, bonding, and simple calculations
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-medium text-ib-neutral-800">10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Est. Time:</span>
                    <span className="font-medium text-ib-neutral-800">8 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Topics:</span>
                    <span className="font-medium text-ib-neutral-800">Mixed</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => setSelectedQuiz(easyQuiz)}
                >
                  Start Easy Quiz
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Medium Quiz */}
          {mediumQuiz && (
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                      <CircleHelp className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs mb-2 bg-yellow-100 text-yellow-800">
                        Medium
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg text-ib-neutral-800">
                  Intermediate Quiz
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Intermediate problems requiring calculations and deeper understanding of concepts
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-medium text-ib-neutral-800">10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Est. Time:</span>
                    <span className="font-medium text-ib-neutral-800">12 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Topics:</span>
                    <span className="font-medium text-ib-neutral-800">Mixed</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                  onClick={() => setSelectedQuiz(mediumQuiz)}
                >
                  Start Medium Quiz
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Hard Quiz */}
          {hardQuiz && (
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                      <CircleHelp className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs mb-2 bg-red-100 text-red-800">
                        Hard
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg text-ib-neutral-800">
                  Advanced Quiz
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Complex problems requiring advanced understanding and multi-step calculations
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-medium text-ib-neutral-800">10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Est. Time:</span>
                    <span className="font-medium text-ib-neutral-800">15 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Topics:</span>
                    <span className="font-medium text-ib-neutral-800">Mixed</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => setSelectedQuiz(hardQuiz)}
                >
                  Start Hard Quiz
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}