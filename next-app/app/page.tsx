// app/page.tsx
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Study App</h1>
      <p className="mb-2">Click below to access your IB Chemistry Study Guide:</p>
      
      <Link href="/studyguide">
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">
          <BookOpen className="w-5 h-5" />
          Go to Chemistry Study Guide
        </button>
      </Link>
    </main>
  );
}
