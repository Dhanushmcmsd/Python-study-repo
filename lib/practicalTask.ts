export interface PracticalExampleFile {
  name: string;
  path: string;
}

export interface PracticalTask {
  day: number;
  week: number;
  title: string;
  scenario: string;
  realWorldUse: string;
  requirements: string[];
  edgeCases: string[];
  exampleFile?: PracticalExampleFile;
  acceptsOwnFile: boolean;
  ownFileHint: string;
  starterCode: string;
  solutionCode: string;
  validationPattern: string;
  gitNotes?: string;
  runLocally?: string;
}

export function dayPracticalSlug(day: number): string {
  return `day-${day}-practical`;
}

export function getPracticalTaskForDay(day: number, tasks: PracticalTask[]): PracticalTask | undefined {
  return tasks.find((t) => t.day === day);
}
