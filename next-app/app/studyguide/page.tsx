// app/studyguide/page.tsx
export default function ChemistryStudyGuide() {
  const topics = [
    {
      title: "Stoichiometric Relationships",
      points: [
        "The mole concept and Avogadro’s constant",
        "Empirical and molecular formulas",
        "Reacting masses and volumes",
      ],
    },
    {
      title: "Atomic Structure",
      points: [
        "Protons, neutrons and electrons",
        "Isotopes",
        "Electron configuration",
        "Mass spectrometry and nuclear decay",
      ],
    },
    {
      title: "Periodicity",
      points: [
        "Trends in the periodic table",
        "Ionization energy",
        "Electron affinity and electronegativity",
      ],
    },
    {
      title: "Chemical Bonding and Structure",
      points: [
        "Ionic and covalent bonding",
        "Lewis structures",
        "Resonance and formal charge",
        "VSEPR theory and molecular geometry",
        "Polarity and intermolecular forces",
      ],
    },
    {
      title: "Energetics/Thermochemistry",
      points: [
        "Enthalpy changes",
        "Hess’s Law",
        "Bond enthalpies",
        "Entropy and Gibbs free energy (HL)",
      ],
    },
    {
      title: "Chemical Kinetics",
      points: [
        "Rate of reaction",
        "Collision theory",
        "Rate expressions (HL)",
        "Reaction mechanisms (HL)",
      ],
    },
    {
      title: "Equilibrium",
      points: [
        "The equilibrium constant (Kc)",
        "Le Chatelier’s Principle",
        "Reaction quotient (Q) vs Kc",
        "Equilibrium in industry",
      ],
    },
    {
      title: "Acids and Bases",
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
      points: [
        "Oxidation and reduction",
        "Electrochemical cells",
        "Standard electrode potentials (HL)",
        "Electrolysis",
      ],
    },
    {
      title: "Organic Chemistry",
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
      points: [
        "Uncertainties and errors",
        "Significant figures",
        "Spectroscopy",
      ],
    },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">IB Chemistry Study Guide (Year 1 & 2)</h1>
      {topics.map((topic, index) => (
        <div key={index} className="mb-5">
          <h2 className="text-xl font-semibold text-blue-700">{topic.title}</h2>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            {topic.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
