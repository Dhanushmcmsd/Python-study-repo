import type { CourseDay } from "../types";

const WEEK_THEMES: { title: string; emoji: string; description: string }[] = [
  { title: "Python Foundations", emoji: "🐍", description: "Variables, print, strings, and your first mini-project." },
  { title: "Decisions & Loops", emoji: "🔀", description: "if/else, while/for loops, lists, and an expense tracker." },
  { title: "Functions & Automation", emoji: "⚡", description: "Reusable functions, return values, datetime, and daily reports." },
  { title: "OOP & Error Handling", emoji: "🏗️", description: "Classes, inheritance, try/except, and a library system." },
  { title: "Files, Regex & Data", emoji: "📁", description: "Simulated files, CSV/JSON parsing, regex, and log analysis." },
  { title: "APIs & Web Scraping", emoji: "🌐", description: "JSON APIs, nested data, HTML parsing, and a data dashboard." },
  { title: "Scheduling & Reliability", emoji: "⏰", description: "Logging, retries, config dicts, and a job runner." },
  { title: "Office Automation", emoji: "📊", description: "CSV reports, email templates, and report pipelines." },
  { title: "AI Prompts & Classification", emoji: "🤖", description: "Prompt design, JSON parsing, and an AI ticket router." },
  { title: "AI Automation Pipelines", emoji: "🔗", description: "Chained AI steps, document extraction, and pipelines." },
  { title: "Agentic Automation", emoji: "🧠", description: "Tool registries, agent loops, guardrails, and task agents." },
  { title: "Capstone & Testing", emoji: "🎓", description: "Unit tests, project structure, and the AI Feedback Analyzer." },
];

/** Five session titles per week (Mon–Fri study days). */
const SESSION_TITLES: string[][] = [
  ["Welcome & First Print", "Comments & Variables", "Math & Text Strings", "Input & Debug Challenge", "Quiz & Personal Intro Project"],
  ["Booleans & If Statements", "elif/else & Comparisons", "While & For Loops", "Lists & Loop Debug", "Checkpoint & Expense Tracker"],
  ["Functions Intro & Define", "Parameters & Return Values", "Built-ins & Dates", "First Automation Script", "Checkpoint & Daily Report Project"],
  ["OOP Intro & Classes", "Methods & BankAccount", "Inheritance Basics", "Try/Except & Debug", "Checkpoint & Library System Project"],
  ["Files as Strings", "Reading & Writing Data", "Log Parsing & CSV", "JSON & Regex", "Checkpoint & Log Analyzer Project"],
  ["APIs & JSON Parsing", "Nested JSON & Loops", "Deep Parsing & Scraping", "Extract Prices & Debug", "Checkpoint & Data Dashboard Project"],
  ["Scheduling & Logging", "Task Schedules", "Retry Loops & Config", "Config + Retry Combined", "Checkpoint & Job Runner Project"],
  ["Office Automation Intro", "CSV Reports & PDF Text", "Email Templates", "Email + CSV Summary", "Checkpoint & Report Pipeline Project"],
  ["Prompt Structure Basics", "Structured & Improved Prompts", "JSON & Classification", "Batch & Pipeline", "Checkpoint & AI Ticket Router Project"],
  ["AI Pipeline Concepts", "Simulated AI & Chaining", "Documents & Extraction", "Multi-Step & Templates", "Checkpoint & Document AI Pipeline Project"],
  ["Agent Intro & Tool Registry", "Tool Selection & Agent Loop", "Multi-Step Agent", "Guardrails & Debug", "Checkpoint & Task Automation Agent Project"],
  ["Capstone Overview & Testing", "Project Structure & Unit Tests", "Analyzer Helpers & Sentiment", "Aggregate Stats & Debug", "Final Capstone — AI Feedback Analyzer"],
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
          `Understand and practice: ${sessionTitle}`,
          "Complete 2 interactive coding levels with live explanations",
        ],
        estimatedMinutes: 60,
        emoji: theme.emoji,
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
