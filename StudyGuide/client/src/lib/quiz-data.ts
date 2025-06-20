export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "1",
    question: "What is the molar mass of H₂O?",
    options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
    correctAnswer: 1,
    explanation:
      "H₂O has 2 hydrogen atoms (1 g/mol each) and 1 oxygen atom (16 g/mol), so 2 + 16 = 18 g/mol",
  },
  {
    id: "2",
    question: "How many moles are in 36 grams of H₂O?",
    options: ["1 mole", "2 moles", "3 moles", "4 moles"],
    correctAnswer: 1,
    explanation: "Using n = m/M, n = 36g / 18g/mol = 2 moles",
  },
  {
    id: "3",
    question:
      "What is the concentration of a solution with 2 moles of solute in 4 liters of solution?",
    options: ["0.5 M", "1 M", "2 M", "4 M"],
    correctAnswer: 0,
    explanation: "Using c = n/V, c = 2 mol / 4 L = 0.5 M",
  },
  {
    id: "4",
    question: "Which element has the atomic number 6?",
    options: ["Nitrogen", "Carbon", "Oxygen", "Boron"],
    correctAnswer: 1,
    explanation: "Carbon has atomic number 6, meaning it has 6 protons",
  },
  {
    id: "5",
    question: "What is the electron configuration of carbon?",
    options: ["1s²2s²2p²", "1s²2s²2p⁴", "1s²2s²2p⁶", "1s²2s²2p¹"],
    correctAnswer: 0,
    explanation:
      "Carbon has 6 electrons: 2 in 1s, 2 in 2s, and 2 in 2p orbitals",
  },
  {
    id: "6",
    question: "Which of the following is a noble gas?",
    options: ["Helium", "Hydrogen", "Carbon", "Nitrogen"],
    correctAnswer: 0,
    explanation: "Helium is a noble gas with a full outer electron shell",
  },
  {
    id: "7",
    question:
      "What is the equilibrium constant expression for the reaction: A + B ⇌ C + D?",
    options: [
      "K = [A][B]/[C][D]",
      "K = [C][D]/[A][B]",
      "K = [A][B][C][D]",
      "K = [C][D] - [A][B]",
    ],
    correctAnswer: 1,
    explanation: "K = products/reactants = [C][D]/[A][B]",
  },
  {
    id: "8",
    question:
      "What type of bond is formed between sodium and chlorine in NaCl?",
    options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
    correctAnswer: 1,
    explanation:
      "NaCl is an ionic compound formed by the transfer of electrons",
  },
  {
    id: "9",
    question: "What is the bond angle in a tetrahedral molecule?",
    options: ["90°", "109.5°", "120°", "180°"],
    correctAnswer: 1,
    explanation: "Tetrahedral geometry has bond angles of 109.5°",
  },
  {
    id: "10",
    question: "What is the enthalpy change for an exothermic reaction?",
    options: ["Positive", "Negative", "Zero", "Cannot be determined"],
    correctAnswer: 1,
    explanation: "Exothermic reactions release heat, so ΔH is negative",
  },
  {
    id: "11",
    question: "What is the rate law for a first-order reaction?",
    options: ["rate = k[A]", "rate = k[A]²", "rate = k[A][B]", "rate = k"],
    correctAnswer: 0,
    explanation: "First-order reactions have rate = k[A]",
  },
  {
    id: "12",
    question: "What is the half-life of a first-order reaction?",
    options: [
      "t₁/₂ = ln(2)/k",
      "t₁/₂ = 1/k[A]₀",
      "t₁/₂ = [A]₀/2k",
      "t₁/₂ = k/ln(2)",
    ],
    correctAnswer: 0,
    explanation: "For first-order reactions, t₁/₂ = ln(2)/k = 0.693/k",
  },
  {
    id: "13",
    question: "What is the pH of a 0.1 M HCl solution?",
    options: ["0", "1", "7", "13"],
    correctAnswer: 1,
    explanation: "pH = -log[H⁺] = -log(0.1) = 1",
  },
  {
    id: "14",
    question: "What is the conjugate base of H₂O?",
    options: ["H₃O⁺", "OH⁻", "H₂O", "O²⁻"],
    correctAnswer: 1,
    explanation: "H₂O → H⁺ + OH⁻, so OH⁻ is the conjugate base",
  },
  {
    id: "15",
    question: "What is the oxidation number of carbon in CO₂?",
    options: ["-4", "-2", "+2", "+4"],
    correctAnswer: 3,
    explanation:
      "Oxygen has oxidation number -2, so carbon must be +4 to balance",
  },
  {
    id: "16",
    question: "What is the molecular geometry of H₂O?",
    options: ["Linear", "Bent", "Trigonal planar", "Tetrahedral"],
    correctAnswer: 1,
    explanation: "H₂O has bent geometry due to lone pairs on oxygen",
  },
  {
    id: "17",
    question: "What is the ideal gas law?",
    options: ["PV = nRT", "PV = k", "P₁V₁ = P₂V₂", "V₁/T₁ = V₂/T₂"],
    correctAnswer: 0,
    explanation: "PV = nRT is the ideal gas law where R is the gas constant",
  },
  {
    id: "18",
    question:
      "What is the percent yield if actual yield is 8g and theoretical yield is 10g?",
    options: ["60%", "70%", "80%", "90%"],
    correctAnswer: 2,
    explanation:
      "Percent yield = (actual/theoretical) × 100 = (8/10) × 100 = 80%",
  },
  {
    id: "19",
    question: "What is the concentration of a 2M solution diluted 1:4?",
    options: ["0.5M", "1M", "2M", "8M"],
    correctAnswer: 0,
    explanation:
      "Dilution factor of 1:4 means concentration becomes 2M/4 = 0.5M",
  },
  {
    id: "20",
    question: "What is the mass of 1 mole of CO₂?",
    options: ["28 g", "32 g", "44 g", "56 g"],
    correctAnswer: 2,
    explanation: "CO₂ has 1 C (12g) + 2 O (16g each) = 12 + 32 = 44 g/mol",
  },
  {
    id: "21",
    question: "What is the electron configuration of a sodium ion (Na⁺)?",
    options: ["1s²2s²2p⁶", "1s²2s²2p⁶3s¹", "1s²2s²2p⁶3s²", "1s²2s²2p⁵"],
    correctAnswer: 0,
    explanation:
      "Na⁺ has lost one electron, so it has the same configuration as neon",
  },
  {
    id: "22",
    question: "What is the bond order in O₂?",
    options: ["1", "1.5", "2", "3"],
    correctAnswer: 2,
    explanation: "O₂ has a double bond, so bond order = 2",
  },
  {
    id: "23",
    question:
      "What is the equilibrium constant for a reaction that is 90% complete?",
    options: ["0.1", "1", "9", "90"],
    correctAnswer: 2,
    explanation: "If 90% complete, [products]/[reactants] ≈ 9",
  },
  {
    id: "24",
    question: "What is the activation energy?",
    options: [
      "The energy released in a reaction",
      "The energy required to start a reaction",
      "The energy of the products",
      "The energy of the reactants",
    ],
    correctAnswer: 1,
    explanation:
      "Activation energy is the minimum energy required to start a reaction",
  },
  {
    id: "25",
    question: "What is the pH of a 0.01 M NaOH solution?",
    options: ["2", "7", "12", "14"],
    correctAnswer: 2,
    explanation: "pOH = -log[OH⁻] = -log(0.01) = 2, so pH = 14 - 2 = 12",
  },
  {
    id: "26",
    question: "What is the oxidation number of sulfur in H₂SO₄?",
    options: ["+2", "+4", "+6", "+8"],
    correctAnswer: 2,
    explanation:
      "H has +1, O has -2, so S must be +6 to balance: 2(+1) + S + 4(-2) = 0",
  },
  {
    id: "27",
    question: "What is the molecular formula of glucose?",
    options: ["C₆H₁₂O₆", "C₆H₁₀O₅", "C₅H₁₀O₅", "C₆H₁₂O₅"],
    correctAnswer: 0,
    explanation: "Glucose has the molecular formula C₆H₁₂O₆",
  },
  {
    id: "28",
    question: "What is the rate constant unit for a second-order reaction?",
    options: ["s⁻¹", "L/mol·s", "mol/L·s", "L²/mol²·s"],
    correctAnswer: 1,
    explanation: "For rate = k[A]², k has units of L/mol·s",
  },
  {
    id: "29",
    question: "What is the conjugate acid of NH₃?",
    options: ["NH₂⁻", "NH₄⁺", "NH₃", "N³⁻"],
    correctAnswer: 1,
    explanation: "NH₃ + H⁺ → NH₄⁺, so NH₄⁺ is the conjugate acid",
  },
  {
    id: "30",
    question: "What is the mass percent of carbon in CH₄?",
    options: ["25%", "50%", "75%", "80%"],
    correctAnswer: 2,
    explanation:
      "CH₄ has 1 C (12g) and 4 H (4g), so %C = 12/(12+4) × 100 = 75%",
  },
];
