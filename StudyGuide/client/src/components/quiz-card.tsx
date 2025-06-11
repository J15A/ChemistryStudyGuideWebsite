import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CircleHelp, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { apiRequest } from "@/lib/queryClient";
import type { Quiz } from "@shared/schema";

interface QuizCardProps {
  quiz: Quiz;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export function QuizCard({ quiz }: QuizCardProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  const queryClient = useQueryClient();
  
  const questions = quiz.questions as Question[];
  const currentQuestion = questions[currentQuestionIndex];
  const progress = quizCompleted ? 100 : ((currentQuestionIndex + 1) / questions.length) * 100;

  const submitAnswerMutation = useMutation({
    mutationFn: async (answerData: any) => {
      return apiRequest('POST', '/api/quiz-attempts', answerData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/progress'] });
    }
  });

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;

    const answerIndex = parseInt(selectedAnswer);
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Store the answer
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerIndex
    }));
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setShowFeedback(false);
    } else {
      // Quiz completed
      const finalScore = Math.round(((score + (isCorrect ? 1 : 0)) / questions.length) * 100);
      setQuizCompleted(true);
      submitAnswerMutation.mutate({
        userId: 1,
        quizId: quiz.id,
        answers: answers,
        score: finalScore
      });
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setShowFeedback(false);
    setIsCorrect(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers({});
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer("");
      setShowFeedback(false);
    }
  };

  if (quizCompleted) {
    const finalScore = Math.round(((score + (isCorrect ? 1 : 0)) / questions.length) * 100);
    
    return (
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <Check className="text-white w-5 h-5" />
              </div>
              <CardTitle className="text-xl text-ib-neutral-800">Quiz Complete!</CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-ib-primary mb-2">{finalScore}%</div>
            <p className="text-gray-600">
              You scored {score + (isCorrect ? 1 : 0)} out of {questions.length} questions correctly
            </p>
          </div>

          <div className="mb-6">
            <Progress value={100} className="w-full h-2 mb-4" />
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleRestartQuiz}
              className="bg-ib-primary hover:bg-ib-primary-dark text-white"
            >
              Retake Quiz
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
            >
              Back to Quizzes
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-ib-secondary rounded-lg flex items-center justify-center mr-3">
              <CircleHelp className="text-white w-5 h-5" />
            </div>
            <CardTitle className="text-xl text-ib-neutral-800">{quiz.title}</CardTitle>
          </div>
          <div className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-6">
          <Progress value={progress} className="w-full h-2 mb-4" />
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-ib-neutral-800 mb-4">
            {currentQuestion.question}
          </h3>
          
          <RadioGroup
            value={selectedAnswer}
            onValueChange={setSelectedAnswer}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {showFeedback && (
          <div className={`mb-6 p-4 rounded-lg border ${
            isCorrect 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center mb-2">
              {isCorrect ? (
                <Check className="w-5 h-5 text-green-600 mr-2" />
              ) : (
                <X className="w-5 h-5 text-red-600 mr-2" />
              )}
              <span className={`font-medium ${
                isCorrect ? 'text-green-800' : 'text-red-800'
              }`}>
                {isCorrect ? 'Correct!' : 'Incorrect.'}
              </span>
            </div>
            <p className={`text-sm ${
              isCorrect ? 'text-green-700' : 'text-red-700'
            }`}>
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          {!showFeedback ? (
            <Button
              onClick={handleAnswerSubmit}
              disabled={!selectedAnswer}
              className="bg-ib-primary hover:bg-ib-primary-dark text-white"
            >
              Check Answer
            </Button>
          ) : (
            <Button
              onClick={handleNextQuestion}
              className="bg-ib-primary hover:bg-ib-primary-dark text-white"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
