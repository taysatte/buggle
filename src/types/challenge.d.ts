export interface TestCase {
  input: string;
  expectedOutput: string | number | null;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  initialCode: string;
  testCases: TestCase[];
  language: string;
}

export const challenges: Challenge[];
