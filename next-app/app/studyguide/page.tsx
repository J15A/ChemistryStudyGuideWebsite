"use client";
import Link from "next/link";
import {
  Atom,
  Hexagon,
  Minimize2,
  TestTubes,
  FlameKindling,
  Waypoints,
  FlaskConical,
  Pipette,
  Scale,
  Grid2x2Check,
  ArrowRightLeft,
} from "lucide-react";

export default function ChemistryStudyGuide() {
  const topics = [
    {
      slug: "stoichiometry",
      title: "Stoichiometric Relationships",
      icon: <FlaskConical className="w-5 h-5 text-blue-500" />,
    },
    {
      slug: "atomic-structure",
      title: "Atomic Structure",
      icon: <Atom className="w-5 h-5 text-blue-500" />,
    },
    {
      slug: "periodicity",
      title: "Periodicity",
      icon: <Grid2x2Check className="w-5 h-5 text-blue-500" />,
    },
    {
      slug: "bonding-structure",
      title: "Chemical Bonding and Structure",
      icon: <Waypoints className="w-5 h-5 text-blue-500" />,
    },
    {
      slug: "thermochemistry",
      title: "Thermochemistry",
      icon: <FlameKindling className="w-5 h-5 text-blue-500" />,
    },
    {
      slug: "kinetics",
      title: "Chemical Kinetics",
      icon: <Minimize2 className="w-5 h-5 text-blue-500" />,
    },
    {
      slug: "equilibrium",
      title: "Equilibrium",
      icon: <ArrowRightLeft className="w-5 h-5 text-blue-500" />,
    },
    {
      slug: "acids-bases",
      title: "Acids and Bases",
      icon: <Pipette className="w-5 h-5 text-blue-500" />,
    },
    {
      slug: "redox",
      title: "Redox Processes",
      icon: <TestTubes className="w-5 h-5 text-blue-500" />,
    },
    {
      slug: "organic",
      title: "Organic Chemistry",
      icon: <Hexagon className="w-5 h-5 text-blue-500" />,
    },
    {
      slug: "measurement",
      title: "Measurement and Data Processing",
      icon: <Scale className="w-5 h-5 text-blue-500" />,
    },
  ];

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        IB Chemistry Study Guide
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <Link key={index} href={`/studyguide/${topic.slug}`}>
            <div className="cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
                {topic.icon}
                {topic.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
