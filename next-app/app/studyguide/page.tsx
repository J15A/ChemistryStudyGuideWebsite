// app/studyguide/page.tsx
import { Atom, Hexagon, Minimize2, TestTubes, FlameKindling, Waypoints, FlaskConical, Biohazard, Pipette, Scale, Grid2x2Check, ArrowRightLeft } from "lucide-react";

export default function ChemistryStudyGuide() {
  const topics = [
    {
      title: "Stoichiometric Relationships",
      icon: <FlaskConical className="w-5 h-5 text-blue-500"/>,
      points: [
        "The mole concept and Avogadro’s constant",
        "Empirical and molecular formulas",
        "Reacting masses and volumes",
      ],
    },
    {
      title: "Atomic Structure",
      icon: <Atom className="w-5 h-5 text-blue-500"/>,
      points: [
        "Protons, neutrons and electrons",
        "Isotopes",
        "Electron configuration",
        "Mass spectrometry and nuclear decay",
      ],
    },
    {
      title: "Periodicity",
      icon: <Grid2x2Check className="w-5 h-5 text-blue-500"/>,
      points: [
        "Trends in the periodic table",
        "Ionization energy",
        "Electron affinity and electronegativity",
      ],
    },
    {
      title: "Chemical Bonding and Structure",
      icon: <Waypoints className="w-5 h-5 text-blue-500"/>,
      points: [
        "Ionic and covalent bonding",
        "Lewis structures",
        "Resonance and formal charge",
        "VSEPR theory and molecular geometry",
        "Polarity and intermolecular forces",
      ],
    },
    {
      title: "Thermochemistry",
      icon: <FlameKindling className="w-5 h-5 text-blue-500"/>,
      points: [
        "Enthalpy changes",
        "Hess’s Law",
        "Bond enthalpies",
        "Entropy and Gibbs free energy (HL)",
      ],
    },
    {
      title: "Chemical Kinetics",
      icon: <Minimize2 className="w-5 h-5 text-blue-500"/>,
      points: [
        "Rate of reaction",
        "Collision theory",
        "Rate expressions (HL)",
        "Reaction mechanisms (HL)",
      ],
    },
    {
      title: "Equilibrium",
      icon: <ArrowRightLeft className="w-5 h-5 text-blue-500"/>,
      points: [
        "The equilibrium constant (Kc)",
        "Le Chatelier’s Principle",
        "Reaction quotient (Q) vs Kc",
        "Equilibrium in industry",
      ],
    },
    {
      title: "Acids and Bases",
      icon: <Pipette className="w-5 h-5 text-blue-500"/>,
      points: [
        "Brønsted–Lowry theory",
        "pH and pOH",
        "Strong and weak acids/bases",
        "Titration curves",
        "Buffers (HL)",
      ],
    },
    {
      title: "Redox Processes",
      icon: <TestTubes className="w-5 h-5 text-blue-500"/>,
      points: [
        "Oxidation and reduction",
        "Electrochemical cells",
        "Standard electrode potentials (HL)",
        "Electrolysis",
      ],
    },
    {
      title: "Organic Chemistry",
      icon: <Hexagon className="w-5 h-5 text-blue-500"/>,
      points: [
        "Functional groups",
        "Nomenclature",
        "Reactions of alkanes, alkenes, alcohols, halogenoalkanes",
        "Reaction mechanisms (HL)",
        "Stereoisomerism (HL)",
      ],
    },
    {
      title: "Measurement and Data Processing",
      icon: <Scale className="w-5 h-5 text-blue-500"/>,
      points: [
        "Uncertainties and errors",
        "Significant figures",
        "Spectroscopy",
      ],
    },
  ];

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        IB Chemistry Study Guide
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-700 flex items-center gap-2">
              {topic.icon}
              {topic.title}
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {topic.points.map((point, i) => (
                <li key={i} className="mb-1">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
