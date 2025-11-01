"use server";

import { getTodayPuzzle } from "@/lib/puzzle";
import { notFound } from "next/navigation";
import PuzzlePageClient from "@/components/puzzle/PuzzlePageClient";

const PuzzlePage = async () => {
  const dailyPuzzle = await getTodayPuzzle();

  if (!dailyPuzzle) {
    notFound();
  }

  const puzzleData = {
    id: dailyPuzzle.puzzle.id,
    dailyPuzzleId: dailyPuzzle.id,
    date: dailyPuzzle.date.toISOString(),
    title: dailyPuzzle.puzzle.title,
    description: dailyPuzzle.puzzle.description,
    starterCode: dailyPuzzle.puzzle.starterCode,
    difficulty: dailyPuzzle.puzzle.difficulty,
    language: dailyPuzzle.puzzle.language,
    hints: dailyPuzzle.puzzle.hints,
    testCases: dailyPuzzle.puzzle.testCases,
  };

  return <PuzzlePageClient puzzle={puzzleData} />;
};

export default PuzzlePage;
