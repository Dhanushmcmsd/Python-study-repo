import type { CourseDay } from "../types";

const WEEK_THEMES: { title: string; description: string }[] = [
  { title: "Python Foundations", description: "Variables, print, strings, and your first mini-project." },
  { title: "Decisions & Loops", description: "if/else, while/for loops, lists, and an expense tracker." },
  { title: "Functions & Automation", description: "Reusable functions, return values, datetime, and daily reports." },
  { title: "OOP & Error Handling", description: "Classes, inheritance, try/except, and a library system." },
  { title: "Files, Regex & Data", description: "Log/CSV strings, json.loads, regex, and a log analyzer you can reuse at work." },
  { title: "APIs & Web Scraping", description: "Live HTTPS APIs (Open-Meteo, JSONPlaceholder), HTML fetch, and a live dashboard." },
  { title: "Scheduling & Reliability", description: "Logging, retries, config dicts, and a job runner." },
  { title: "Office Automation", description: "CSV reports, email templates, and report pipelines." },
  { title: "Prompts & Classification", description: "Prompt design, JSON parsing, and a ticket router." },
  { title: "Automation Pipelines", description: "Chained steps, document extraction, and pipelines." },
  { title: "Tool Registries & Agents", description: "Tool registries, agent loops, guardrails, and task agents." },
  { title: "Capstone & Ship", description: "Tests, then DocPack: compress many documents, push to GitHub from this app, deploy." },
];

const SESSION_TITLES: string[][] = [
  ["Welcome & First Print", "Comments & Variables", "Math & Text Strings", "Input & Debug Challenge", "Quiz & Personal Intro Project"],
  ["Booleans & If Statements", "elif/else & Comparisons", "While & For Loops", "Lists & Loop Debug", "Checkpoint & Expense Tracker"],
  ["Functions Intro & Define", "Parameters & Return Values", "Built-ins & Dates", "First Automation Script", "Checkpoint & Daily Report Project"],
  ["OOP Intro & Classes", "Methods & BankAccount", "Inheritance Basics", "Try/Except & Debug", "Checkpoint & Library System Project"],
  ["Files as Strings", "Reading & Writing Data", "Log Parsing & CSV", "JSON & Regex", "Checkpoint & Log Analyzer Project"],
  ["Live Weather API", "Nested User JSON", "Products & HTML Fetch", "Prices & Debug Fetch", "Checkpoint & Live Dashboard Project"],
  ["Scheduling & Logging", "Task Schedules", "Retry Loops & Config", "Config + Retry Combined", "Checkpoint & Job Runner Project"],
  ["Office Automation Intro", "CSV Reports & PDF Text", "Email Templates", "Email + CSV Summary", "Checkpoint & Report Pipeline Project"],
  ["Prompt Structure Basics", "Structured & Improved Prompts", "JSON & Classification", "Batch & Pipeline", "Checkpoint & Ticket Router Project"],
  ["Pipeline Concepts", "Chaining Steps", "Documents & Extraction", "Multi-Step & Templates", "Checkpoint & Document Pipeline Project"],
  ["Tool Registry", "Tool Selection & Loop", "Multi-Step Agent", "Guardrails & Debug", "Checkpoint & Task Automation Project"],
  ["Capstone Overview & Testing", "Project Structure & Unit Tests", "Helpers & Sentiment Checks", "Stats & Debug", "Final Capstone — DocPack Compressor & GitHub"],
];

function buildCourseDays(): CourseDay[] {
  const days: CourseDay[] = [];

  for (let week = 1; week <= 12; week++) {
    const theme = WEEK_THEMES[week - 1];
    const sessions = SESSION_TITLES[week - 1];

    for (let dayInWeek = 1; dayInWeek <= 5; dayInWeek++) {
      const globalDay = (week - 1) * 5 + dayInWeek;
      const sessionTitle = sessions[dayInWeek - 1];

      days.push({
        day: globalDay,
        week,
        dayInWeek,
        title: sessionTitle,
        description: `${theme.description} Today's focus: ${sessionTitle}.`,
        topics: [sessionTitle, theme.title],
        learningGoals: [
          `Practice: ${sessionTitle}`,
          "Complete 2 coding levels",
          week === 6
            ? "Call a real HTTPS API and read a live JSON or HTML response"
            : week === 12
              ? "Finish by shipping DocPack: compress files, GitHub upload, deploy"
              : "Use the same pattern in a local script",
        ],
        estimatedMinutes: 60,
        weekTitle: theme.title,
      });
    }
  }

  return days;
}

export const COURSE_DAYS: CourseDay[] = buildCourseDays();

export function getCourseDay(day: number): CourseDay | undefined {
  return COURSE_DAYS.find((d) => d.day === day);
}

export function getWeekDays(week: number): CourseDay[] {
  return COURSE_DAYS.filter((d) => d.week === week);
}
