// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Study App</h1>
      <p className="mb-2">Click below to access your IB Chemistry Study Guide:</p>
      
      <Link href="/chemistry">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200">
          Go to Chemistry Study Guide
        </button>
      </Link>
    </main>
  );
}
