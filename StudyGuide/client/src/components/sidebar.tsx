import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { ChevronDown, ChevronRight, Circle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Topic } from "@shared/schema";

export function Sidebar() {
  const [location] = useLocation();
  const [expandedTopics, setExpandedTopics] = useState<Set<number>>(new Set([1]));

  const { data: topics = [] } = useQuery<Topic[]>({
    queryKey: ["/api/topics"],
  });

  const { data: bookmarks = [] } = useQuery({
    queryKey: ["/api/bookmarks"],
  });

  const toggleTopic = (topicId: number) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "text-ib-success";
    if (progress >= 50) return "text-ib-warning";
    return "text-gray-300";
  };

  return (
    <aside className="hidden lg:block w-80 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-ib-neutral-800 mb-4">IB Chemistry Topics</h2>
        
        {topics.map((topic, index) => {
          const isExpanded = expandedTopics.has(topic.id);
          const isActive = location.includes(topic.slug);
          // Mock progress data for demonstration
          const mockProgress = [85, 60, 0, 0][index] || 0;
          
          return (
            <div key={topic.id} className="mb-4">
              <Button
                variant="ghost"
                onClick={() => toggleTopic(topic.id)}
                className={cn(
                  "w-full flex items-center justify-between p-3 text-left font-medium rounded-lg",
                  isActive
                    ? "bg-ib-primary text-white"
                    : "bg-ib-neutral-100 hover:bg-ib-neutral-200 text-ib-neutral-700"
                )}
              >
                <span>{topic.order}. {topic.title}</span>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </Button>
              
              {isExpanded && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link href={`/topic/${topic.slug}`}>
                    <a className="block py-2 px-3 text-sm text-gray-600 hover:text-ib-primary hover:bg-blue-50 rounded">
                      <Circle className={cn("w-2 h-2 mr-2 inline", getProgressColor(mockProgress))} />
                      Introduction and Overview
                    </a>
                  </Link>
                  <Link href={`/topic/${topic.slug}/concepts`}>
                    <a className="block py-2 px-3 text-sm text-gray-600 hover:text-ib-primary hover:bg-blue-50 rounded">
                      <Circle className={cn("w-2 h-2 mr-2 inline", getProgressColor(mockProgress * 0.8))} />
                      Key Concepts
                    </a>
                  </Link>
                  <Link href={`/topic/${topic.slug}/quiz`}>
                    <a className="block py-2 px-3 text-sm text-gray-600 hover:text-ib-primary hover:bg-blue-50 rounded">
                      <Circle className={cn("w-2 h-2 mr-2 inline", getProgressColor(mockProgress * 0.6))} />
                      Practice Quiz
                    </a>
                  </Link>
                </div>
              )}
            </div>
          );
        })}

        {/* Bookmarks Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3 flex items-center">
            <Bookmark className="w-4 h-4 text-ib-accent mr-2" />
            Bookmarks
          </h3>
          <div className="space-y-2">
            {bookmarks.length > 0 ? (
              bookmarks.map((bookmark: any) => (
                <Link key={bookmark.id} href={`/topic/${bookmark.topicId}`}>
                  <a className="block py-2 px-3 text-sm text-gray-600 hover:text-ib-primary hover:bg-blue-50 rounded">
                    Bookmarked Topic
                  </a>
                </Link>
              ))
            ) : (
              <div className="text-sm text-gray-500 italic">No bookmarks yet</div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
