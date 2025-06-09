import { notFound } from "next/navigation";
import Link from "next/link";

const topicDetails: Record<string, { title: string; content: string[] }> = {
  "stoichiometry": {
    title: "Stoichiometric Relationships",
    content: [
      "The mole concept and Avogadro’s constant",
      "Empirical and molecular formulas",
      "Reacting masses and volumes",
    ],
  },
  "atomic-structure": {
    title: "Atomic Structure",
    content: [
      "Protons, neutrons and electrons",
      "Isotopes",
      "Electron configuration",
      "Mass spectrometry and nuclear decay",
    ],
  },
    "periodicity": {
        title: "Periodicity",
        content: [
        "Trends in the periodic table",
        "Atomic radius, ionization energy, and electronegativity",
        "Metallic and non-metallic character",
        ],
    },
    "bonding-structure": {
        title: "Chemical Bonding and Structure",
        content: [
        "Ionic, covalent, and metallic bonding",
        "Shapes of molecules and intermolecular forces",
        "Properties of substances based on bonding",
        ],
    },
    "thermochemistry": {
        title: "Thermochemistry",
        content: [
        "Exothermic and endothermic reactions",
        "Enthalpy changes and Hess's law",
        "Calorimetry and specific heat capacity",
        ],
    },
    "kinetics": {
        title: "Chemical Kinetics",
        content: [
        "Rate of reaction and factors affecting it",
        "Collision theory and activation energy",
        "Catalysts and their effects on reaction rates",
        ],
    },
    "equilibrium": {
        title: "Equilibrium",
        content: [
        "Dynamic equilibrium and Le Chatelier's principle",
        "Equilibrium constant (Kc) and its applications",
        "Factors affecting equilibrium position",
        ],
    },
    "acids-bases": {
        title: "Acids and Bases",
        content: [
        "Definitions of acids and bases (Arrhenius, Brønsted-Lowry)",
        "pH scale and calculations",
        "Acid-base titrations and indicators",
        ],
    },
    "redox": {
        title: "Redox Processes",
        content: [
        "Oxidation and reduction definitions",
        "Balancing redox equations",
        "Electrochemical cells and standard electrode potentials",
        ],
    },
    "organic-chemistry": {
        title: "Organic Chemistry",
        content: [
        "Functional groups and nomenclature",
        "Reactions of alkanes, alkenes, and alcohols",
        "Isomerism and stereochemistry",
        ],
    },
    "measurement-uncertainty": {
        title: "Measurement and Uncertainty",
        content: [
        "Significant figures and scientific notation",
        "Uncertainty in measurements",
        "Data processing and statistical analysis",
        ],
    },
};

export default function TopicPage({ params }: { params: { topic: string } }) {
  const topic = topicDetails[params.topic];

  if (!topic) return notFound();
  
  return (
    <main className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">{topic.title}</h1>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {topic.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
