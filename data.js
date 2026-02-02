// ========================================
// AI Engineering Playbook - Data
// ========================================

const PHASE1_DATA = {
    weeks: [
        {
            title: "Week 1: Getting Started — Introduction to AI Coding",
            days: "Days 1-7",
            tasks: [
                { id: "p1w1t1", text: "Research and select your primary AI coding tool (GitHub Copilot, Cursor, Claude Code, Cody)" },
                { id: "p1w1t2", text: "Install and configure the AI assistant in your IDE/Editor" },
                { id: "p1w1t3", text: "Enable inline suggestions and set up keyboard shortcuts" },
                { id: "p1w1t4", text: "Understand the difference between autocomplete, chat, and agent modes" },
                { id: "p1w1t5", text: "Practice accepting/rejecting suggestions (Tab/Esc) on simple code" },
                { id: "p1w1t6", text: "Write your first 5 AI-assisted functions using inline comments" },
                { id: "p1w1t7", text: "Use the chat panel to ask questions about existing code" },
                { id: "p1w1t8", text: "Learn what a 'context window' is and why it matters" },
                { id: "p1w1t9", text: "Experiment with opening related files to improve suggestions" },
                { id: "p1w1t10", text: "Complete 3-5 real work tasks with basic AI assistance" }
            ]
        },
        {
            title: "Week 2: Building Better Prompts — Context & Precision",
            days: "Days 8-14",
            tasks: [
                { id: "p1w2t1", text: "Learn to include type definitions and interfaces in prompts" },
                { id: "p1w2t2", text: "Practice the 'Given this existing code...' pattern" },
                { id: "p1w2t3", text: "Reference documentation and requirements in your prompts" },
                { id: "p1w2t4", text: "Use numbered requirements for complex requests (1., 2., 3.)" },
                { id: "p1w2t5", text: "Specify edge cases upfront in your prompts" },
                { id: "p1w2t6", text: "Always include example inputs/outputs when possible" },
                { id: "p1w2t7", text: "Learn to specify what NOT to do (anti-patterns)" },
                { id: "p1w2t8", text: "Master follow-up prompts: 'Also add...', 'Now refactor to...'" },
                { id: "p1w2t9", text: "Practice the 'That's not quite right because...' correction pattern" },
                { id: "p1w2t10", text: "Complete 10 real work tasks with iterative prompting" }
            ]
        },
        {
            title: "Week 3: Quality & Testing — AI for Code Quality",
            days: "Days 15-21",
            tasks: [
                { id: "p1w3t1", text: "Generate unit tests for existing functions you've written" },
                { id: "p1w3t2", text: "Learn to specify test frameworks (Jest, Vitest, pytest) in prompts" },
                { id: "p1w3t3", text: "Practice prompts for edge case and boundary value tests" },
                { id: "p1w3t4", text: "Generate mocks, stubs, and test fixtures with AI" },
                { id: "p1w3t5", text: "Run AI-generated tests and fix any failures" },
                { id: "p1w3t6", text: "Generate JSDoc/docstrings for existing functions" },
                { id: "p1w3t7", text: "Use AI to write README sections and code comments" },
                { id: "p1w3t8", text: "Generate commit messages following conventional commit format" },
                { id: "p1w3t9", text: "Create PR descriptions and changelog entries with AI" },
                { id: "p1w3t10", text: "Complete 15 tasks: code + tests + docs in one workflow" }
            ]
        },
        {
            title: "Week 4: Review & Optimization — AI as Review Partner",
            days: "Days 22-30",
            tasks: [
                { id: "p1w4t1", text: "Use AI to self-review your code before submitting PRs" },
                { id: "p1w4t2", text: "Practice 'Find issues in this code' prompts" },
                { id: "p1w4t3", text: "Generate review comments for others' pull requests" },
                { id: "p1w4t4", text: "Use AI to identify potential security vulnerabilities" },
                { id: "p1w4t5", text: "Get performance optimization suggestions from AI" },
                { id: "p1w4t6", text: "Refactor code for readability with AI guidance" },
                { id: "p1w4t7", text: "Identify and eliminate code duplication using AI" },
                { id: "p1w4t8", text: "Document your top 10 most effective personal prompts" },
                { id: "p1w4t9", text: "Review your month's AI usage — what worked, what didn't" },
                { id: "p1w4t10", text: "Achieve 25+ real work tasks completed with AI assistance" }
            ]
        }
    ]
};

const PHASE2_DATA = {
    weeks: [
        {
            title: "Weeks 5-6: Agent Workflows — Multi-Step Development",
            days: "Days 31-44",
            tasks: [
                { id: "p2w1t1", text: "Understand the difference between Agent mode vs Chat mode" },
                { id: "p2w1t2", text: "Learn to break large features into step-by-step prompts" },
                { id: "p2w1t3", text: "Practice multi-file editing with agent assistance" },
                { id: "p2w1t4", text: "Use 'first...then...finally' structured prompts" },
                { id: "p2w1t5", text: "Delegate code exploration and research to AI agents" },
                { id: "p2w1t6", text: "Use agent mode for codebase navigation and understanding" },
                { id: "p2w1t7", text: "Build a complete feature end-to-end with AI agent" },
                { id: "p2w1t8", text: "Include implementation, tests, and documentation in one workflow" },
                { id: "p2w1t9", text: "Learn to review and iterate on agent-generated code" },
                { id: "p2w1t10", text: "Compare development time: with AI vs without AI" }
            ]
        },
        {
            title: "Weeks 7-8: Production Workflows — Automation & Scale",
            days: "Days 45-60",
            tasks: [
                { id: "p2w2t1", text: "Create reusable prompt templates for common tasks" },
                { id: "p2w2t2", text: "Build a personal prompt library (min 20 prompts)" },
                { id: "p2w2t3", text: "Set up project-level AI instructions (CLAUDE.md, .cursorrules)" },
                { id: "p2w2t4", text: "Use AI for API development: endpoints + validation + tests" },
                { id: "p2w2t5", text: "Generate complete component suites with AI (UI + logic + tests)" },
                { id: "p2w2t6", text: "Create database migrations and schema changes with AI" },
                { id: "p2w2t7", text: "Build E2E test suites with page objects using AI" },
                { id: "p2w2t8", text: "Complete 2 production-ready features entirely with agent" },
                { id: "p2w2t9", text: "Document your agent workflow best practices" },
                { id: "p2w2t10", text: "Share 3 AI success stories with your team" }
            ]
        }
    ]
};

const PHASE3_DATA = {
    weeks: [
        {
            title: "Weeks 9-10: Advanced Features — MCP, Skills & Subagents",
            days: "Days 61-74",
            tasks: [
                { id: "p3w1t1", text: "Learn and set up MCP (Model Context Protocol) servers" },
                { id: "p3w1t2", text: "Connect AI to databases, GitHub, and APIs via MCP" },
                { id: "p3w1t3", text: "Create custom Skills to teach AI your workflows" },
                { id: "p3w1t4", text: "Build specialized Subagents for security reviews, testing, etc." },
                { id: "p3w1t5", text: "Use AI for architecture decisions and trade-off analysis" },
                { id: "p3w1t6", text: "Generate technical RFCs and design documents with AI" },
                { id: "p3w1t7", text: "Debug complex distributed system issues with AI assistance" },
                { id: "p3w1t8", text: "Optimize performance bottlenecks using AI analysis" },
                { id: "p3w1t9", text: "Design and implement caching strategies with AI" },
                { id: "p3w1t10", text: "Create comprehensive onboarding documentation using AI" }
            ]
        },
        {
            title: "Weeks 11-12: Expert Mastery — Leadership & Scale",
            days: "Days 75-90",
            tasks: [
                { id: "p3w2t1", text: "Create a team AI playbook with prompts and standards" },
                { id: "p3w2t2", text: "Lead an AI prompt engineering workshop for your team" },
                { id: "p3w2t3", text: "Establish team-wide AI coding standards and guidelines" },
                { id: "p3w2t4", text: "Mentor teammates on effective AI usage patterns" },
                { id: "p3w2t5", text: "Integrate AI into CI/CD pipelines (code generation, tests)" },
                { id: "p3w2t6", text: "Create self-service AI templates for common team tasks" },
                { id: "p3w2t7", text: "Measure and document productivity improvements" },
                { id: "p3w2t8", text: "Generate production-ready systems: API + UI + Tests + Docs" },
                { id: "p3w2t9", text: "Present AI adoption results and lessons to leadership" },
                { id: "p3w2t10", text: "Plan ongoing mastery: new tools, techniques, and skills" }
            ]
        }
    ]
};

const PROMPTS_DATA = {
    categories: [
        {
            name: "Code Generation",
            icon: "⚡",
            prompts: [
                {
                    title: "Function Generation",
                    description: "Generate a complete function with types and error handling",
                    preview: "Create a [language] function called [name] that...",
                    full: `Create a [language] function called [name] that:
- Takes [param1: type, param2: type] as parameters
- Returns [output type]
- Does [specific behavior]

Requirements:
1. [requirement 1]
2. [requirement 2]

Edge cases to handle:
- [edge case 1]
- [edge case 2]

Example usage:
functionName(input) → expected output`
                },
                {
                    title: "API Endpoint",
                    description: "Create a complete REST API endpoint",
                    preview: "Create a [framework] API endpoint for [resource]...",
                    full: `Create a [framework] API endpoint for [resource]:

**HTTP Method:** [GET/POST/PUT/DELETE]
**Path:** /api/[path]

**Request:**
- Headers: [required headers]
- Body: [body schema]
- Query params: [params]

**Response:**
- Success (200): [success schema]
- Error (4xx): [error schema]

**Business logic:**
1. [step 1]
2. [step 2]

Include: input validation, error handling, TypeScript types`
                },
                {
                    title: "React Component",
                    description: "Generate a React component with props and state",
                    preview: "Create a React component called [Name]...",
                    full: `Create a React component:

**Component name:** [Name]
**Props:**
- [prop1]: [type] - [description]
- [prop2]: [type] - [description]

**State:** (if applicable)
- [state1]: [type] - [initial value]

**Behavior:**
1. [behavior 1]
2. [behavior 2]

**Styling approach:** [CSS modules/styled-components/Tailwind]

**Accessibility requirements:**
- [requirement 1]
- [requirement 2]

Include TypeScript types and basic tests.`
                }
            ]
        },
        {
            name: "Testing",
            icon: "🧪",
            prompts: [
                {
                    title: "Unit Test Generation",
                    description: "Generate comprehensive unit tests",
                    preview: "Write comprehensive unit tests using [Jest/Vitest]...",
                    full: `Write comprehensive unit tests for this function using [Jest/Vitest/pytest]:

[paste function code]

Include tests for:
1. Happy path scenarios
2. Edge cases (empty input, null, undefined)
3. Error conditions
4. Boundary values

Use describe/it block structure.
Include setup/teardown if needed.
Mock [specific dependencies] if present.`
                },
                {
                    title: "Mock Generation",
                    description: "Create mocks and test fixtures",
                    preview: "Create mocks for testing this code...",
                    full: `Create mocks for testing this code:

[paste code with dependencies]

Generate:
1. Mock implementations for [dependency names]
2. Factory functions for test data
3. Fixture files if appropriate

Use [Jest mocks/Sinon/etc] syntax.
Include TypeScript types for mocks.`
                },
                {
                    title: "E2E Test Suite",
                    description: "Generate end-to-end tests for a user flow",
                    preview: "Create comprehensive E2E tests for [feature/flow]...",
                    full: `Create comprehensive E2E tests for [feature/flow]:

**User flow:**
1. [step 1]
2. [step 2]
3. [step 3]

**Framework:** [Playwright/Cypress]

**Test scenarios:**
1. Happy path
2. Error handling
3. Edge cases
4. Accessibility

Create: page objects, fixtures, test implementation, CI config.`
                }
            ]
        },
        {
            name: "Code Review",
            icon: "🔍",
            prompts: [
                {
                    title: "PR Review",
                    description: "Review code for a pull request",
                    preview: "Review this code for a pull request...",
                    full: `Review this code for a pull request:

[paste code]

Check for:
1. Logic errors or bugs
2. Security vulnerabilities
3. Performance issues
4. Code style and best practices
5. Missing error handling
6. Edge cases not covered
7. Accessibility issues (if UI)

Format as PR review comments with line references.
Categorize as: 🔴 Must fix | 🟡 Should fix | 🟢 Suggestion`
                },
                {
                    title: "Security Audit",
                    description: "Perform a security review of code",
                    preview: "Perform a security review of this code...",
                    full: `Perform a security review of this code:

[paste code]

Check for:
1. SQL injection vulnerabilities
2. XSS vulnerabilities
3. Authentication/authorization issues
4. Sensitive data exposure
5. Input validation gaps
6. Insecure dependencies
7. OWASP Top 10 issues

Rate severity: Critical | High | Medium | Low
Provide remediation code for each issue.`
                },
                {
                    title: "Performance Optimization",
                    description: "Optimize code for performance",
                    preview: "Optimize this code for performance...",
                    full: `Optimize this code for performance:

[paste code]

Current issues observed:
[describe any known performance problems]

Consider:
1. Algorithm complexity (Big O)
2. Memory usage
3. Database query optimization
4. Caching opportunities
5. Async/parallel processing
6. Bundle size (if frontend)

Provide before/after code with explanation.`
                }
            ]
        },
        {
            name: "Agent Workflows",
            icon: "🤖",
            prompts: [
                {
                    title: "Feature Implementation",
                    description: "Build a complete feature step by step",
                    preview: "I need to implement a new feature. Help me build it...",
                    full: `I need to implement a new feature. Help me build it step by step.

**Feature:** [feature name]
**Description:** [what it does]

**Tech stack:**
- Frontend: [React/Vue/etc]
- Backend: [Node/Python/etc]
- Database: [PostgreSQL/MongoDB/etc]

**Requirements:**
1. [requirement 1]
2. [requirement 2]
3. [requirement 3]

Please:
1. First, analyze the codebase to understand existing patterns
2. Create an implementation plan
3. Implement the backend changes
4. Implement the frontend changes
5. Add unit tests
6. Update documentation

Ask me questions if anything is unclear before proceeding.`
                },
                {
                    title: "Bug Investigation",
                    description: "Investigate and fix a bug systematically",
                    preview: "Help me investigate and fix this bug...",
                    full: `Help me investigate and fix this bug.

**Symptoms:**
[describe what's happening]

**Expected behavior:**
[describe what should happen]

**Steps to reproduce:**
1. [step 1]
2. [step 2]

**Relevant files/areas:**
[list suspected files or areas]

**What I've tried:**
[list debugging attempts]

Please:
1. Analyze the relevant code paths
2. Identify potential root causes
3. Propose a fix with explanation
4. Add a test to prevent regression`
                },
                {
                    title: "Codebase Exploration",
                    description: "Understand a new codebase area",
                    preview: "Help me understand this codebase area...",
                    full: `Help me understand this codebase area.

**What I'm trying to understand:**
[specific question or area]

**Context:**
[why you need to understand this]

Please:
1. Find the relevant files and code
2. Explain the architecture and data flow
3. Identify key functions/classes involved
4. Create a diagram if helpful
5. Point out any patterns or conventions used`
                }
            ]
        },
        {
            name: "Documentation",
            icon: "📝",
            prompts: [
                {
                    title: "Generate Docs",
                    description: "Generate comprehensive documentation",
                    preview: "Generate comprehensive documentation for this code...",
                    full: `Generate comprehensive documentation for this code:

[paste code]

Include:
1. JSDoc/docstring with:
   - @description
   - @param for each parameter
   - @returns
   - @throws (if applicable)
   - @example with usage
2. Inline comments for complex logic
3. README section explaining purpose and usage`
                },
                {
                    title: "Technical RFC",
                    description: "Write a technical RFC document",
                    preview: "Help me write a technical RFC...",
                    full: `Help me write a technical RFC.

**Title:** [RFC title]
**Author:** [your name]
**Status:** Draft

**Summary:**
[1-2 sentence summary]

**Problem statement:**
[what problem this solves]

**Proposed solution:**
[high-level description]

Please generate a complete RFC including:
1. Background and motivation
2. Detailed design
3. Alternatives considered
4. Security considerations
5. Rollout plan
6. Rollback plan
7. Open questions`
                },
                {
                    title: "Commit Message",
                    description: "Generate conventional commit messages",
                    preview: "Generate a conventional commit message...",
                    full: `Generate a conventional commit message for these changes:

**Files changed:**
[list files]

**Summary of changes:**
[describe what changed]

**Why these changes were made:**
[describe motivation]

Use format: type(scope): description

Types: feat, fix, docs, style, refactor, test, chore
Keep the description under 72 characters.`
                }
            ]
        },
        {
            name: "Quick One-Liners",
            icon: "⚡",
            prompts: [
                {
                    title: "Quick Function",
                    description: "Fast function generation",
                    preview: "[lang] function: [name]([params]) → [return]",
                    full: `[lang] function: [name]([params]) → [return] that [does what]`
                },
                {
                    title: "Add Types",
                    description: "Add TypeScript types to code",
                    preview: "Add TypeScript types to: [code]",
                    full: `Add TypeScript types to this code, including interfaces for all objects:

[paste code]`
                },
                {
                    title: "Simplify",
                    description: "Simplify complex code",
                    preview: "Simplify this code: [code]",
                    full: `Simplify this code while keeping the same functionality:

[paste code]

Make it more readable and maintainable.`
                },
                {
                    title: "Error Handling",
                    description: "Add proper error handling",
                    preview: "Add proper error handling: [code]",
                    full: `Add proper error handling to this code:

[paste code]

Include:
- Try/catch blocks where appropriate
- Meaningful error messages
- Proper error types
- Logging if applicable`
                },
                {
                    title: "Regex Pattern",
                    description: "Generate regex patterns",
                    preview: "Regex to match: [pattern description]",
                    full: `Create a regex pattern to match: [describe what you want to match]

Include:
- The regex pattern
- Explanation of each part
- Example matches and non-matches
- Edge cases it handles`
                },
                {
                    title: "Mock Data",
                    description: "Generate realistic mock data",
                    preview: "Generate mock data for: [type/schema]",
                    full: `Generate realistic mock data for this type/schema:

[paste type or describe structure]

Generate [number] items.
Make the data realistic and varied.
Include edge cases.`
                }
            ]
        }
    ]
};

const RESOURCES_DATA = {
    categories: [
        {
            name: "🎓 Prompt Engineering Guides",
            resources: [
                {
                    title: "DAIR.AI Prompt Engineering Guide",
                    url: "https://github.com/dair-ai/Prompt-Engineering-Guide",
                    description: "The 'Wikipedia of prompt engineering' - comprehensive guide covering fundamentals to advanced techniques. 3M+ learners.",
                    tags: ["Essential", "Beginner to Advanced", "Research-backed"]
                },
                {
                    title: "NirDiamant/Prompt_Engineering",
                    url: "https://github.com/NirDiamant/Prompt_Engineering",
                    description: "22 runnable notebooks with tutorials on Zero-Shot, Few-Shot, Chain-of-Thought, and advanced strategies.",
                    tags: ["Hands-on", "Notebooks", "Examples"]
                },
                {
                    title: "Anthropic Prompt Engineering Tutorial",
                    url: "https://github.com/anthropics/prompt-eng-interactive-tutorial",
                    description: "Interactive 9-chapter tutorial for Claude with exercises. Covers prompt structure and troubleshooting.",
                    tags: ["Claude", "Interactive", "Official"]
                },
                {
                    title: "Microsoft Generative AI for Beginners",
                    url: "https://github.com/microsoft/generative-ai-for-beginners",
                    description: "21-lesson structured curriculum for building generative AI applications with prompt engineering sections.",
                    tags: ["Beginner", "Curriculum", "Microsoft"]
                }
            ]
        },
        {
            name: "🤖 AI Coding Assistants & Tools",
            resources: [
                {
                    title: "GitHub Awesome Copilot",
                    url: "https://github.com/github/awesome-copilot",
                    description: "Official community-curated collection of prompts, instructions, and chat modes for GitHub Copilot.",
                    tags: ["Official", "Copilot", "Prompts"]
                },
                {
                    title: "Sourcegraph Awesome Code AI",
                    url: "https://github.com/sourcegraph/awesome-code-ai",
                    description: "Comprehensive list of AI coding tools including assistants, completion tools, and refactoring capabilities.",
                    tags: ["Tool List", "Comprehensive", "Categories"]
                },
                {
                    title: "Awesome AI-Assisted Coding",
                    url: "https://github.com/saviorand/awesome-ai-assisted-coding",
                    description: "Tools and practices for AI-assisted development. IDE integrations, CLI tools, and specialized AI tools.",
                    tags: ["Curated", "Tools", "Practices"]
                },
                {
                    title: "Code-and-Sorts/awesome-copilot-agents",
                    url: "https://github.com/Code-and-Sorts/awesome-copilot-agents",
                    description: "Curated list of GitHub instructions, prompts, skills, and agent markdown files for Copilot.",
                    tags: ["Agents", "Copilot", "Skills"]
                }
            ]
        },
        {
            name: "🔧 Agentic Development Frameworks",
            resources: [
                {
                    title: "GitHub Spec Kit",
                    url: "https://github.com/github/spec-kit",
                    description: "Open-source toolkit for spec-driven development with AI agents. Define requirements before generation.",
                    tags: ["GitHub", "Spec-Driven", "Framework"]
                },
                {
                    title: "Agent OS",
                    url: "https://github.com/cline/agent-os",
                    description: "Inject codebase standards into AI agents. Lightweight system for aligning agents with coding standards.",
                    tags: ["Standards", "Open Source", "Cline"]
                },
                {
                    title: "AGENTS.md Specification",
                    url: "https://agents.md",
                    description: "Open format for providing context to AI coding agents. Like README.md but for AI assistants.",
                    tags: ["Standard", "Format", "Context"]
                },
                {
                    title: "Awesome CursorRules",
                    url: "https://github.com/PatrickJS/awesome-cursorrules",
                    description: "Curated collection of .cursorrules files for customizing Cursor AI behavior per project.",
                    tags: ["Cursor", "Rules", "Customization"]
                }
            ]
        },
        {
            name: "🔌 MCP (Model Context Protocol)",
            resources: [
                {
                    title: "MCP Official Specification",
                    url: "https://github.com/modelcontextprotocol/modelcontextprotocol",
                    description: "Official Model Context Protocol spec by Anthropic. The 'USB-C for AI' - universal interface for AI tools.",
                    tags: ["Official", "Anthropic", "Protocol"]
                },
                {
                    title: "MCP Servers Collection",
                    url: "https://github.com/modelcontextprotocol/servers",
                    description: "Reference implementations of MCP servers. Examples for GitHub, databases, cloud services, and more.",
                    tags: ["Servers", "Examples", "Reference"]
                },
                {
                    title: "MCP Documentation",
                    url: "https://modelcontextprotocol.io",
                    description: "Official documentation for Model Context Protocol. Getting started, SDKs, and integration guides.",
                    tags: ["Docs", "Official", "Guides"]
                },
                {
                    title: "FastMCP (Python)",
                    url: "https://github.com/jlowin/fastmcp",
                    description: "Fast way to create MCP servers in Python. Simple API for building custom tools for AI assistants.",
                    tags: ["Python", "Library", "Easy"]
                }
            ]
        },
        {
            name: "💬 Prompt Collections",
            resources: [
                {
                    title: "Awesome ChatGPT Prompts",
                    url: "https://github.com/f/awesome-chatgpt-prompts",
                    description: "134K+ stars. Largest collection of prompts for ChatGPT, Claude, and other LLMs. 150+ role prompts.",
                    tags: ["Popular", "Roles", "General"]
                },
                {
                    title: "Awesome Claude Prompts",
                    url: "https://github.com/langgptai/awesome-claude-prompts",
                    description: "Collection of prompts specifically optimized for Claude AI interactions.",
                    tags: ["Claude", "Optimized", "Collection"]
                },
                {
                    title: "AI-Boost/Awesome-Prompts",
                    url: "https://github.com/AI-Boost/Awesome-GPTs",
                    description: "Curated prompts from top-rated GPTs. Real-world tested prompts from the GPT Store.",
                    tags: ["GPTs", "Real-World", "Tested"]
                },
                {
                    title: "System Prompts Collection",
                    url: "https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools",
                    description: "6,500+ system prompts from mainstream AI tools. Learn how major companies structure prompts.",
                    tags: ["System Prompts", "Production", "Research"]
                }
            ]
        },
        {
            name: "🛠️ Claude Skills & Extensions",
            resources: [
                {
                    title: "Anthropic Skills Repository",
                    url: "https://github.com/anthropics/skills",
                    description: "Official Claude skills by Anthropic. Reference implementations for building your own skills.",
                    tags: ["Official", "Anthropic", "Skills"]
                },
                {
                    title: "Claude Quickstarts",
                    url: "https://github.com/anthropics/claude-quickstarts",
                    description: "Quick start projects for Claude API. Customer support agent, financial analyst, coding agent examples.",
                    tags: ["Examples", "API", "Projects"]
                },
                {
                    title: "LangChain Hub",
                    url: "https://github.com/hwchase17/langchain-hub",
                    description: "Battle-tested prompts organized by use case. Summarization, QA, agents - ready for LangChain workflows.",
                    tags: ["LangChain", "Production", "Organized"]
                },
                {
                    title: "GPT Prompt Engineer",
                    url: "https://github.com/mshumer/gpt-prompt-engineer",
                    description: "Automate prompt generation and testing. Ranks prompt variations against criteria for optimization.",
                    tags: ["Automation", "Testing", "Optimization"]
                }
            ]
        }
    ]
};

const AI_TOOLS_GUIDE_DATA = {
    sections: [
        {
            id: "mcp-servers",
            title: "🔌 MCP Servers (Model Context Protocol)",
            icon: "🔌",
            description: "Connect AI assistants to external tools, databases, and APIs",
            analogy: "Think of MCP as a 'USB port for AI' – a universal connector that allows AI coding assistants to interact with external tools and systems in a standardized way.",
            whenToUse: [
                "Querying databases or APIs",
                "Browser automation for testing",
                "GitHub repository operations",
                "Reading design files from Figma",
                "Accessing internal documentation"
            ],
            howToSetup: {
                title: "Setting up an MCP Server",
                steps: [
                    "Choose a pre-built MCP server (GitHub, Playwright, PostgreSQL, etc.)",
                    "Add configuration to your settings file",
                    "Restart your AI assistant",
                    "Ask 'What MCP tools do you have?' to verify"
                ],
                example: {
                    tool: "Claude Code (~/.claude/settings.json)",
                    code: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your-token"
      }
    }
  }
}`
                }
            },
            resources: [
                { title: "MCP Official Docs", url: "https://modelcontextprotocol.io" },
                { title: "MCP Servers Collection", url: "https://github.com/modelcontextprotocol/servers" }
            ]
        },
        {
            id: "skills",
            title: "🎯 Skills",
            icon: "🎯",
            description: "Reusable capability packages that teach AI specific tasks",
            analogy: "Skills are like 'recipe cards' for AI – each card teaches a specific dish with ingredients (tools), steps (instructions), and tips (examples).",
            whenToUse: [
                "Repetitive complex tasks you do often",
                "Team-specific workflows and patterns",
                "Tasks requiring scripts alongside instructions",
                "Shareable capabilities across projects"
            ],
            howToCreate: {
                title: "Creating a Skill (GitHub Copilot)",
                location: "Project: .github/skills/<skill-name>/SKILL.md | Personal: ~/.copilot/skills/",
                steps: [
                    "Create folder in .github/skills/<your-skill-name>/",
                    "Create SKILL.md file with YAML frontmatter",
                    "Add optional: scripts/, examples/, templates/ folders",
                    "Use skill by prompting related tasks"
                ],
                example: {
                    title: "Example SKILL.md",
                    code: `---
name: api-testing
description: Generate API integration tests using Jest
---

# API Testing Skill

## When to Use
- Creating tests for new API endpoints
- Adding test coverage to existing APIs

## Instructions
1. Analyze the endpoint's route and method
2. Generate tests for happy path, errors, edge cases
3. Use the template in templates/test-template.ts

## Example
For endpoint: POST /api/users
Generate tests covering:
- Valid user creation (201)
- Missing required fields (400)
- Duplicate email (409)`
                }
            },
            comparison: {
                title: "Skills vs Custom Instructions",
                items: [
                    { aspect: "Scope", skills: "Specific task/workflow", instructions: "General behavior" },
                    { aspect: "Structure", skills: "Includes scripts, examples", instructions: "Usually just text" },
                    { aspect: "Activation", skills: "Auto-selected by context", instructions: "Always active" }
                ]
            }
        },
        {
            id: "agents",
            title: "🤖 Agents",
            icon: "🤖",
            description: "AI systems that autonomously plan and execute multi-step tasks",
            analogy: "If regular AI chat is like texting a friend for advice, Agents are like hiring a contractor who plans the work, gathers materials, does the job, and checks their work – all from a single request.",
            whenToUse: [
                "Implementing complete features",
                "Large refactoring projects",
                "Bug investigation across multiple files",
                "Setting up new project structures",
                "Creating end-to-end test suites"
            ],
            comparison: {
                title: "Agent Mode vs Chat Mode",
                items: [
                    { aspect: "Interaction", agent: "Goal-oriented execution", chat: "Q&A conversation" },
                    { aspect: "Scope", agent: "Multi-step workflow", chat: "Single response" },
                    { aspect: "Autonomy", agent: "High (it drives)", chat: "Low (you guide)" },
                    { aspect: "File Changes", agent: "Makes changes", chat: "Suggests changes" }
                ]
            },
            toolSupport: [
                { tool: "GitHub Copilot", activation: "@workspace command or Agent mode toggle" },
                { tool: "Claude Code", activation: "Default behavior in terminal" },
                { tool: "Cursor", activation: "Agent toggle in chat panel" },
                { tool: "Windsurf", activation: "Cascade panel (built-in)" }
            ],
            examplePrompt: `I need to implement a new feature. Help me build it step by step.

**Feature:** User authentication with JWT
**Tech stack:** Node.js, Express, PostgreSQL

**Requirements:**
1. Login endpoint with email/password
2. JWT token generation and refresh
3. Middleware for protected routes

Please:
1. Analyze existing codebase patterns
2. Create implementation plan
3. Implement changes with tests
4. Update documentation`
        },
        {
            id: "subagents",
            title: "👥 Subagents",
            icon: "👥",
            description: "Specialized AI assistants that main agents can delegate tasks to",
            analogy: "If the main Agent is a general contractor, Subagents are the electrician, plumber, and painter they call in for specialized work. Each expert focuses on their domain without distraction.",
            whenToUse: [
                "Dedicated code review without context loss",
                "Security audits with focused attention",
                "Documentation writing with consistent style",
                "Testing with specialized patterns",
                "Frontend/Backend domain expertise"
            ],
            builtIn: [
                { name: "Explore", purpose: "Investigate codebases, understand architecture", tools: "Read, Grep, Glob (read-only)" },
                { name: "Plan", purpose: "Create implementation plans without changes", tools: "Read, Grep (read-only)" }
            ],
            howToCreate: {
                title: "Creating a Custom Subagent",
                methods: [
                    { name: "Interactive", steps: "Run /agents → Create New Agent → Define name, description, prompt, tools" },
                    { name: "File-based", location: "Project: .claude/agents/name.md | User: ~/.claude/agents/name.md" }
                ],
                example: {
                    title: "security-reviewer.md",
                    code: `---
name: security-reviewer
description: Reviews code for security vulnerabilities
tools:
  - Read
  - Grep
  - Glob
---

# Security Reviewer

You are a security expert reviewing code for vulnerabilities.

## Focus Areas
- OWASP Top 10 vulnerabilities
- Authentication/authorization flaws
- Input validation issues
- Sensitive data exposure

## Output Format
For each issue:
1. Severity: Critical/High/Medium/Low
2. Location: File and line
3. Description: What's wrong
4. Fix: How to remediate

Do NOT modify code, only review and report.`
                }
            }
        },
        {
            id: "custom-instructions",
            title: "⚙️ Custom Instructions",
            icon: "⚙️",
            description: "Persistent configuration that shapes AI behavior across interactions",
            analogy: "Custom instructions are like job preferences – you tell a new employee: 'We use TypeScript, prefer functional programming, and always write tests.' They apply this to everything they do.",
            types: [
                { level: "User-Level", scope: "All your projects", location: "Settings or user profile" },
                { level: "Project-Level", scope: "Specific repository", location: "Version controlled with code" },
                { level: "Workspace-Level", scope: "Current workspace", location: "Overrides defaults" }
            ],
            toolFiles: [
                { tool: "GitHub Copilot", file: ".github/copilot-instructions.md" },
                { tool: "Claude Code", file: "CLAUDE.md" },
                { tool: "Cursor", file: ".cursorrules or .cursor/rules/" },
                { tool: "Windsurf", file: ".windsurfrules" },
                { tool: "Aider", file: "AGENTS.md or .aider.conf.yml" }
            ],
            universalFormat: {
                title: "AGENTS.md (Universal Format)",
                description: "Open standard that works across most AI tools",
                example: `# AGENTS.md

## Project Overview
E-commerce platform built with Next.js and PostgreSQL

## Tech Stack
- Frontend: Next.js 14, TypeScript, TailwindCSS
- Backend: Node.js, Prisma ORM
- Database: PostgreSQL

## Commands
- \`npm run dev\` - Start development
- \`npm test\` - Run tests
- \`npm run lint\` - Check code style

## Code Style
- TypeScript strict mode
- Functional components only
- Zod for validation
- Jest for testing

## Do NOT
- Use \`any\` type
- Skip error handling
- Commit console.log statements`
            }
        },
        {
            id: "copilot-coding-agent",
            title: "🚀 GitHub Copilot Coding Agent",
            icon: "🚀",
            description: "Autonomous AI that works on GitHub Issues in the background",
            analogy: "Think of it as an AI intern you can assign GitHub Issues to. They work on the task, create commits, and submit a PR for your review – all while you focus on other work.",
            capabilities: [
                "Bug fixes with clear reproduction steps",
                "Small to medium features",
                "Code refactoring tasks",
                "Test coverage improvements",
                "Documentation updates"
            ],
            howToAssign: [
                { method: "GitHub.com", steps: "Open issue → Assignees → Select 'Copilot'" },
                { method: "VS Code", steps: "Command Palette → 'Assign Issue to Copilot'" },
                { method: "Copilot Chat", steps: "@github Assign issue #42 to Copilot" }
            ],
            workflow: [
                "ANALYZE: Read issue, examine repo, review instructions",
                "PLAN: Create implementation strategy",
                "IMPLEMENT: Create branch, make changes, write tests",
                "VALIDATE: Run tests, linting, auto-fix issues",
                "SUBMIT: Open Draft PR, request human review"
            ],
            issueTemplate: {
                title: "Issue Template for Copilot",
                code: `## Summary
Add pagination to /api/users endpoint

## Acceptance Criteria
- [ ] Accept page and limit query params
- [ ] Return pagination metadata
- [ ] Default: page 1, limit 20

## Files to Modify
- src/routes/users.ts
- src/services/userService.ts

## Testing Requirements
- Add pagination tests
- Update existing API tests`
            }
        }
    ]
};

const CONTEXT_ENGINEERING_DATA = {
    concepts: [
        {
            title: "📌 What is Context Engineering?",
            items: [
                { term: "Definition", description: "Strategic curation of all information AI has access to - code, history, dependencies, standards, docs" },
                { term: "Goal", description: "Optimize token utility against LLM constraints to consistently achieve desired outcomes" },
                { term: "Beyond Prompting", description: "Encompasses the entire information ecosystem an AI agent interacts with" }
            ]
        },
        {
            title: "🎯 Core Strategies",
            items: [
                { term: "Selection", description: "Retrieve only the most relevant pieces of information from codebase and docs" },
                { term: "Compression", description: "Retain critical info while reducing tokens - summarization, trimming, extraction" },
                { term: "Ordering", description: "Position information where models are most likely to attend to it" },
                { term: "Isolation", description: "Split context across specialized agents or maintain separate sessions" },
                { term: "Format", description: "Structure information for maximum AI comprehension" }
            ]
        },
        {
            title: "📦 Types of Context",
            items: [
                { term: "Instructions", description: "Agent's role, objectives, requirements, and constraints" },
                { term: "Examples", description: "Behavioral examples, response examples, anti-patterns to avoid" },
                { term: "Knowledge", description: "Domain info, documentation, APIs, schemas, workflows" },
                { term: "Memory", description: "Short-term (session state) and long-term (user preferences, history)" },
                { term: "Tools", description: "Available tools, parameters, how to interpret outputs" },
                { term: "Guardrails", description: "Input validation, action constraints, output quality standards" }
            ]
        },
        {
            title: "✅ Best Practices",
            items: [
                { term: "Start Minimal", description: "Begin with minimal context and progressively add detail" },
                { term: "Keep Fresh", description: "Regularly audit and update project docs as codebase evolves" },
                { term: "Be Consistent", description: "Maintain consistent code style - AI generates better matches" },
                { term: "Verify Output", description: "Never commit code you don't understand - you're responsible" },
                { term: "Short Sessions", description: "Commit frequently, start fresh chats for each issue" },
                { term: "Limit Tools", description: "Prevent overload by limiting active tools per step" }
            ]
        },
        {
            title: "📁 Project Context Setup",
            items: [
                { term: "Tech Stack", description: "Document your languages, frameworks, and key libraries" },
                { term: "Conventions", description: "List 3-5 code examples of patterns you use" },
                { term: "Anti-Patterns", description: "Explicitly state what NOT to do" },
                { term: "Domain Terms", description: "Define business-specific terminology" },
                { term: "File Structure", description: "Explain your project organization" }
            ]
        }
    ]
};

const CONCEPTS_COMPARISON_DATA = {
    title: "Custom Instructions vs Custom Prompts vs Skills vs Agents vs Commands vs Subagents",
    description: "Understanding when to use each concept is critical for effective AI-assisted development",
    quickReference: {
        headers: ["Aspect", "Custom Instructions", "Custom Prompts", "Commands", "Skills", "Agents", "Subagents"],
        rows: [
            { aspect: "Primary Purpose", values: ["Define default behavior", "Reusable templates", "Quick actions/shortcuts", "Task-specific packages", "Autonomous execution", "Delegated specialists"] },
            { aspect: "Scope", values: ["Always active", "On-demand", "Single action", "Context-triggered", "Goal-oriented", "Focused subtask"] },
            { aspect: "Persistence", values: ["Permanent", "Saved, manual", "Session-only", "Auto-selected", "Session-based", "Task-scoped"] },
            { aspect: "Complexity", values: ["Simple rules", "Templated", "One-liner", "Multi-file", "Multi-step", "Specialized"] },
            { aspect: "User Interaction", values: ["None after setup", "Single invoke", "Immediate", "Minimal", "High autonomy", "Delegated"] },
            { aspect: "Best For", values: ["Standards", "Repetitive asks", "Quick tasks", "Domain expertise", "Large features", "Expert subtasks"] }
        ]
    },
    concepts: [
        {
            id: "custom-instructions",
            name: "Custom Instructions",
            icon: "⚙️",
            subtitle: "Always-On Configuration",
            analogy: "Think of Custom Instructions as \"house rules\" – once set, they apply to every interaction automatically.",
            definition: "Persistent rules that define how the AI behaves in ALL interactions. They are always active once configured.",
            whenToUse: [
                "Coding standards and conventions",
                "Technology stack preferences",
                "Company-specific terminology",
                "Forbidden practices (anti-patterns)",
                "Output format preferences"
            ],
            fileLocations: {
                "GitHub Copilot": ".github/copilot-instructions.md",
                "Claude Code": "CLAUDE.md",
                "Cursor": ".cursorrules or .cursor/rules/",
                "Windsurf": ".windsurfrules",
                "OpenCode": "agents.md (via /init command)"
            },
            example: {
                title: "Real-World Example: Stripe-like Payment SaaS Instructions",
                filename: ".github/copilot-instructions.md",
                code: `# Project: PaymentFlow - Payment Processing Platform

## About This Project
We're building a payment processing SaaS similar to Stripe. Security, reliability, 
and compliance are CRITICAL. Every line of code must meet financial industry standards.

## Technology Stack
- **Backend**: Node.js 20+ with TypeScript 5.3 (strict mode)
- **API**: Express.js with OpenAPI/Swagger specs
- **Database**: PostgreSQL 15 with Prisma ORM
- **Queue**: Redis + Bull for async processing
- **Testing**: Jest + Supertest (100% coverage required for payment flows)
- **Monitoring**: DataDog APM, Sentry for errors

## Security Requirements (NON-NEGOTIABLE)
- ✅ ALWAYS validate and sanitize ALL user inputs (use Zod schemas)
- ✅ ALWAYS use parameterized queries (Prisma prevents SQL injection)
- ✅ NEVER log sensitive data (credit cards, API keys, PII)
- ✅ ALWAYS encrypt PII at rest (use our encryption utils)
- ✅ All payment endpoints MUST have rate limiting (10 req/min per IP)
- ✅ Add audit logs for ALL financial transactions

## Code Conventions

### Naming Standards
- Files: kebab-case (payment-processor.ts, webhook-handler.ts)
- Classes: PascalCase (PaymentIntent, CustomerAccount)
- Functions: camelCase (processPayment, validateCard)
- Constants: SCREAMING_SNAKE_CASE (MAX_RETRY_ATTEMPTS, API_VERSION)
- Database tables: snake_case (payment_intents, customer_accounts)

### Error Handling (Critical for Financial Operations)
\`\`\`typescript
// ✅ ALWAYS use our custom error classes
throw new PaymentError('Insufficient funds', { 
  code: 'INSUFFICIENT_FUNDS',
  customerId,
  amount 
});

// ❌ NEVER throw generic errors
throw new Error('Payment failed');
\`\`\`

### Testing Requirements
- Payment flows: 100% coverage (no exceptions)
- Other critical paths: 90% coverage minimum
- Unit tests: test file next to source (payment.service.test.ts)
- Integration tests: /tests/integration/
- ALWAYS test error scenarios (network failures, timeouts, declined cards)

### API Response Format (Consistent for all endpoints)
\`\`\`typescript
// Success response
{ 
  success: true, 
  data: { ... },
  requestId: uuid 
}

// Error response
{ 
  success: false, 
  error: { 
    code: 'INVALID_CARD', 
    message: 'user-friendly message',
    requestId: uuid 
  }
}
\`\`\`

## Forbidden Practices (NEVER do these - will fail code review)
- ❌ NEVER use \`any\` type (use \`unknown\` or proper types)
- ❌ NEVER commit console.log (use our logger: logger.info())
- ❌ NEVER store credit card numbers (use tokenization)
- ❌ NEVER hardcode API keys or secrets (use environment variables)
- ❌ NEVER skip input validation (always use Zod schemas)
- ❌ NEVER make sync calls to external APIs (always async with timeouts)
- ❌ NEVER mutate function parameters (use immutable patterns)

## Performance Requirements
- API response time: < 200ms (P95)
- Database queries: < 50ms (use indexes!)
- Payment processing: < 3 seconds end-to-end
- ALWAYS add database indexes for foreign keys and frequent queries

## Documentation Standards
- All public APIs: OpenAPI/Swagger documentation
- Complex business logic: Inline comments explaining WHY, not WHAT
- Database migrations: Include rollback strategy
- New features: Update /docs/API.md

## Git Commit Convention
- feat: New feature (feat: add card tokenization)
- fix: Bug fix (fix: prevent double-charging)
- sec: Security fix (sec: add rate limiting to webhook endpoint)
- perf: Performance improvement
- test: Add/update tests
- docs: Documentation only`
            },
            beforeAfter: {
                before: {
                    prompt: 'User: "Create a payment processing endpoint"',
                    result: `app.post('/charge', (req, res) => {
  const amount = req.body.amount;
  // Process payment
  res.json({ success: true });
});
// ❌ No validation, no error handling, no logging, not async`
                },
                after: {
                    prompt: 'User: "Create a payment processing endpoint"',
                    result: `// ✅ Follows all security & coding standards
const chargeSchema = z.object({
  amount: z.number().positive().max(1000000),
  customerId: z.string().uuid(),
  currency: z.enum(['USD', 'EUR'])
});

router.post('/v1/charge', 
  rateLimit({ max: 10, windowMs: 60000 }),
  async (req, res) => {
    try {
      const data = chargeSchema.parse(req.body);
      const result = await paymentService.processCharge(data);
      
      logger.info('Payment processed', { 
        customerId: data.customerId,
        requestId: req.id 
      });
      
      res.json({ success: true, data: result, requestId: req.id });
    } catch (error) {
      handlePaymentError(error, req, res);
    }
  }
);`
                }
            }
        },
        {
            id: "custom-prompts",
            name: "Custom Prompts",
            icon: "📝",
            subtitle: "Reusable Request Templates",
            analogy: "Think of Custom Prompts as \"macros\" – pre-written prompts you invoke when needed, optionally with variables.",
            definition: "Saved templates for common requests that you invoke when needed. They help standardize repetitive requests.",
            whenToUse: [
                "Frequent requests with similar structure",
                "Complex prompts you don't want to retype",
                "Team-standardized code generation patterns",
                "Documentation templates",
                "Review checklists"
            ],
            fileLocations: {
                "GitHub Copilot": ".github/prompts/<name>.md",
                "Claude Code": ".claude/prompts/<name>.md",
                "OpenCode": "Custom commands via Ctrl+K"
            },
            example: {
                title: "Real-World Example: Microservice CRUD Generator (Used by 50+ devs)",
                filename: ".github/prompts/crud-microservice.md",
                code: `---
name: crud-microservice
description: Generate complete CRUD microservice with all layers
variables:
  - resourceName (e.g., "Product", "Order", "Customer")
  - fields (JSON array of field definitions)
  - hasAuth (boolean)
---

# Generate Complete CRUD Microservice: {{resourceName}}

You're generating a production-ready microservice for **{{resourceName}}** following our architecture.

## Field Definitions
{{fields}}

## Architecture Layers to Generate

### 1. Database Layer (Prisma Schema)
- Create Prisma model in \`prisma/schema.prisma\`
- Include: id (UUID), createdAt, updatedAt, {{fields}}, soft delete
- Add indexes for frequently queried fields
- Include relations if specified

### 2. DTOs & Validation (Zod Schemas)
File: \`src/dtos/{{resourceName.toLowerCase()}}.dto.ts\`
- CreateDto: Required fields only
- UpdateDto: All fields optional except id
- ResponseDto: All fields including timestamps
- Use Zod for runtime validation

### 3. Repository Layer
File: \`src/repositories/{{resourceName.toLowerCase()}}.repository.ts\`
- Methods: create(), findById(), findAll(), update(), delete() (soft)
- Include pagination (skip, take)
- Include filtering and sorting
- Handle Prisma errors gracefully

### 4. Service Layer (Business Logic)
File: \`src/services/{{resourceName.toLowerCase()}}.service.ts\`
- Implement business rules
- Transaction handling where needed
- Event publishing (for audit trail)
- Cache invalidation logic

### 5. Controller Layer (REST API)
File: \`src/controllers/{{resourceName.toLowerCase()}}.controller.ts\`
Routes:
- POST   /api/v1/{{resourceName.toLowerCase()}}s - Create
- GET    /api/v1/{{resourceName.toLowerCase()}}s/:id - Get by ID  
- GET    /api/v1/{{resourceName.toLowerCase()}}s - List (paginated)
- PATCH  /api/v1/{{resourceName.toLowerCase()}}s/:id - Update
- DELETE /api/v1/{{resourceName.toLowerCase()}}s/:id - Soft delete

{{#if hasAuth}}
All endpoints require JWT authentication and proper role checks.
{{/if}}

### 6. Integration Tests
File: \`tests/integration/{{resourceName.toLowerCase()}}.test.ts\`
Test scenarios:
- ✅ Create with valid data → 201 Created
- ✅ Create with invalid data → 400 Bad Request
- ✅ Get by ID (exists) → 200 OK
- ✅ Get by ID (not found) → 404 Not Found
- ✅ Update existing → 200 OK
- ✅ Delete existing → 204 No Content
- ✅ List with pagination → 200 OK
{{#if hasAuth}}
- ✅ Unauthorized access → 401 Unauthorized
{{/if}}

### 7. OpenAPI Documentation
Update \`src/swagger/{{resourceName.toLowerCase()}}.swagger.ts\`
- Complete schema definitions
- Request/response examples
- Error response codes

## Code Quality Requirements
- TypeScript strict mode
- ESLint compliant
- 90%+ test coverage
- Error handling for all edge cases
- Proper logging (info, warn, error levels)
- Input sanitization

## Example Invocation
\`\`\`
@prompt crud-microservice

resourceName: Product
fields: |
  - name: string (required, min 3 chars)
  - description: string (optional)
  - price: decimal (required, positive)
  - sku: string (required, unique)
  - categoryId: UUID (foreign key to Category)
  - stock: integer (default: 0)
hasAuth: true
\`\`\`

## Expected Output
7 files generated:
1. prisma/schema.prisma (updated)
2. src/dtos/product.dto.ts
3. src/repositories/product.repository.ts  
4. src/services/product.service.ts
5. src/controllers/product.controller.ts
6. tests/integration/product.test.ts
7. src/swagger/product.swagger.ts

Plus: Migration file created, ready to run \`npm run migrate\``
            },
            usage: {
                invocation: "@prompt crud-microservice",
                variables: `resourceName: Invoice
fields: |
  - invoiceNumber: string (unique, auto-generated)
  - customerId: UUID (foreign key)
  - amount: decimal (required)
  - status: enum ['draft', 'sent', 'paid', 'overdue']
  - dueDate: date
  - paidAt: date (optional)
hasAuth: true`,
                result: "Generates complete 7-file microservice with CRUD operations, validation, tests, and API docs"
            },
            comparison: {
                headers: ["Without Custom Prompt", "With Custom Prompt"],
                rows: [
                    ["Manually write ~2000 lines", "Invoke template, get 2000 lines"],
                    ["Takes 4-6 hours", "Takes 10 minutes"],
                    ["Inconsistent patterns", "100% consistent architecture"],
                    ["Forget edge cases", "All patterns enforced"],
                    ["Team asks how to structure", "Team knows exact pattern"]
                ]
            }
        },
        {
            id: "commands",
            name: "Commands (Slash Commands)",
            icon: "⚡",
            subtitle: "Quick Actions & Shortcuts",
            analogy: "Commands are like keyboard shortcuts for AI – type a trigger and immediately execute a specific action.",
            definition: "Built-in or custom shortcuts that trigger specific AI behaviors or actions. They provide quick access to common operations.",
            whenToUse: [
                "Quick file operations",
                "Switching AI models or modes",
                "Running diagnostics or analysis",
                "Initializing project context",
                "Exporting or importing sessions"
            ],
            fileLocations: {
                "Claude Code": "/help, /init, /compact, /clear",
                "OpenCode": "/init, /models, Ctrl+K (custom)",
                "Cursor": "Cmd+K shortcuts, /commands",
                "GitHub Copilot": "/explain, /fix, /tests, /doc"
            },
            builtInCommands: [
                { tool: "Claude Code", commands: ["/help", "/init", "/compact", "/clear", "/doctor"] },
                { tool: "OpenCode", commands: ["/init", "/models", "Ctrl+S (save)", "Ctrl+N (new)", "Ctrl+L (load)"] },
                { tool: "Copilot", commands: ["/explain", "/fix", "/tests", "/doc", "/optimize"] },
                { tool: "Cursor", commands: ["Cmd+K (edit)", "Cmd+L (chat)", "Cmd+Shift+L (add to chat)"] }
            ],
            example: {
                title: "Real-World Example: Senior Dev's Daily Command Workflow",
                filename: "Terminal / IDE",
                code: `# Morning: Starting work on bug fix
$ opencode
> /init                    # Analyzes repo, creates context
> /models                  # Switch to GPT-4 for complex reasoning

# Quick code explanation for teammate (Copilot in VS Code)
Select confusing function → Press Cmd+I → Type: /explain
# AI: "This implements the Saga pattern for distributed transactions..."

# Found a bug, need quick fix (Cursor)
Cmd+K → Type: /fix "Handle null case when user.email is undefined"
# AI automatically updates code with null check

# Need tests for new feature (GitHub Copilot)
Open paymentService.ts → Cmd+I → Type: /tests
# AI generates comprehensive test suite in paymentService.test.ts

# Code review time - optimize this slow query (Copilot)
Select database query → /optimize
# AI: "Add index on user_id column, use pagination..."

# Context getting long, compress conversation (Claude Code)
> /compact                 # Summarizes chat history, frees token space

# Switch to cheaper model for simple tasks (OpenCode)
Ctrl+M → Select "Claude Haiku"    # Faster, cheaper for simple q's

# End of day: Save work session (OpenCode)
Ctrl+S → Name: "payment-gateway-bug-fix"
# Later: Ctrl+L to load and continue

# Export session for documentation (OpenCode)
$ opencode export abc123
# Creates markdown with full conversation for team wiki

## Real Time Savings
- /explain on complex code: 5 min vs 20 min reading docs
- /fix with context: 2 min vs 15 min debugging
- /tests generation: 5 min vs 45 min writing tests
- /init for new repo: 30 sec vs 10 min manual exploration
- Model switching: Instant vs restarting IDE/losing context`
            }
        },
        {
            id: "skills",
            name: "Skills",
            icon: "🎯",
            subtitle: "Task-Specific Capability Packages",
            analogy: "Think of Skills as \"recipe books\" – each skill includes instructions, examples, scripts, and templates for a specific task.",
            definition: "Self-contained capability packages that teach the AI how to perform specific complex tasks with multi-file support.",
            whenToUse: [
                "Complex, multi-step workflows",
                "Tasks requiring specific tools or scripts",
                "Domain-specific expertise",
                "Workflows with multiple output files",
                "Reusable across projects (portable)"
            ],
            fileLocations: {
                "GitHub Copilot": ".github/skills/<skill-name>/SKILL.md",
                "Claude Code": ".claude/agents/<name>.md (as subagent)",
                "OpenCode": "Via agents.md configuration"
            },
            vsInstructions: {
                headers: ["Custom Instructions", "Skills"],
                rows: [
                    ["Always active", "Context-activated"],
                    ["General behavior", "Specific task"],
                    ["Text only", "Includes scripts, templates"],
                    ["One file", "Multi-file package"]
                ]
            },
            example: {
                title: "Real-World Example: AWS Infrastructure-as-Code Skill (DevOps Team)",
                structure: `.github/skills/aws-infrastructure/
├── SKILL.md              # Main skill instructions
├── templates/
│   ├── vpc.tf.template
│   ├── eks-cluster.tf.template
│   ├── rds-database.tf.template
│   ├── s3-bucket.tf.template
│   └── iam-roles.tf.template
├── scripts/
│   ├── validate-terraform.sh
│   ├── estimate-costs.sh
│   └── security-scan.sh
├── examples/
│   ├── production-example/
│   └── staging-example/
└── docs/
    ├── naming-conventions.md
    └── cost-optimization.md`,
                skillMd: `---
name: aws-infrastructure
description: Generate production-ready AWS infrastructure with Terraform
triggers:
  - "create aws infrastructure"
  - "set up terraform for"
  - "deploy to aws"
---

# AWS Infrastructure-as-Code Generator

## Purpose
This skill generates enterprise-grade AWS infrastructure using Terraform,
following our team's security, compliance, and cost optimization standards.

## What This Skill Generates

### 1. VPC & Networking
- Multi-AZ VPC with public/private subnets
- NAT Gateways for high availability
- Security groups with least-privilege rules
- Network ACLs for additional security layer

### 2. Compute (EKS Cluster or EC2)
- EKS cluster with node groups (if Kubernetes)
- Auto Scaling Groups with proper health checks
- IAM roles with IRSA (IAM Roles for Service Accounts)
- Spot instances for cost savings (dev/staging)

### 3. Database (RDS)
- Multi-AZ deployment for production
- Automated backups (7-day retention minimum)
- Encryption at rest and in transit
- Read replicas if specified

### 4. Storage (S3)
- Versioning enabled
- Server-side encryption (SSE-S3 or KMS)
- Lifecycle policies for cost optimization
- Block public access by default

### 5. Monitoring & Logging
- CloudWatch log groups
- CloudWatch alarms (CPU, memory, disk)
- SNS topics for alerts
- AWS Config for compliance

## File Structure Generated
infrastructure/
├── main.tf                # Provider config
├── variables.tf           # Input variables
├── outputs.tf             # Output values
├── vpc.tf                 # VPC resources
├── eks.tf or ec2.tf       # Compute
├── rds.tf                 # Database
├── s3.tf                  # Storage
├── iam.tf                 # IAM roles & policies
├── monitoring.tf          # CloudWatch
└── terraform.tfvars       # Environment-specific values

## Security Standards (Auto-Applied)
✅ All data encrypted at rest (KMS keys)
✅ All data encrypted in transit (TLS 1.2+)
✅ No hardcoded credentials (use AWS Secrets Manager)
✅ IAM least-privilege principle
✅ S3 block public access enforced
✅ VPC Flow Logs enabled
✅ CloudTrail logging enabled
✅ Resource tagging enforced (Environment, Team, CostCenter)

## Cost Optimization (Auto-Applied)
- Spot instances for non-production (60-80% savings)
- S3 lifecycle policies (move to IA after 30 days)
- RDS reserved instances recommendation
- Auto-scaling based on actual load
- CloudWatch cost anomaly detection

## Example Usage
User: "Create AWS infrastructure for a SaaS application with:
- React frontend (CloudFront + S3)
- Node.js backend (EKS cluster)
- PostgreSQL database (RDS)
- Redis cache (ElastiCache)
- Environment: production
- Region: us-east-1
- Budget: $500/month"

AI will:
1. Load templates from templates/
2. Reference examples/production-example/
3. Run scripts/estimate-costs.sh → Validates budget
4. Generate all .tf files
5. Run scripts/validate-terraform.sh → terraform validate
6. Run scripts/security-scan.sh → checkov scan
7. Output: terraform plan preview + cost estimate

## Post-Generation
The skill outputs:
1. Complete Terraform files
2. README with deployment instructions
3. Cost estimate breakdown
4. Security scan results
5. Next steps:
   - Review terraform plan
   - Apply: terraform apply
   - Save terraform.tfstate to S3 backend`
            },
            autoActivation: {
                trigger: 'User: "Set up AWS infrastructure for microservices app"',
                steps: [
                    'Detects "AWS infrastructure" → Matches skill trigger',
                    'Loads SKILL.md + templates/',
                    'Asks clarifying questions (compute type, database, region)',
                    'Generates 10+ Terraform files',
                    'Runs validation scripts',
                    'Provides cost estimate and deployment plan'
                ]
            }
        },
        {
            id: "agents",
            name: "Agents",
            icon: "🤖",
            subtitle: "Autonomous Multi-Step Execution",
            analogy: "Unlike chat (Q&A) or skills (templates), Agents are like hiring a contractor who plans the work, gathers materials, does the job, and checks their work – all from a single request.",
            definition: "Autonomous AI modes that can plan and execute multi-step tasks independently, making decisions and navigating your codebase.",
            whenToUse: [
                "Implementing complete features",
                "Multi-file refactoring",
                "Bug investigation across codebase",
                "Setting up new projects/modules",
                "Complex migrations",
                "End-to-end feature development"
            ],
            toolSupport: [
                { tool: "GitHub Copilot", mode: "Copilot Coding Agent (assign via issue)" },
                { tool: "Claude Code", mode: "Default mode (always agent)" },
                { tool: "Cursor", mode: "Agent mode toggle" },
                { tool: "OpenCode", mode: "Default TUI mode with tool execution" }
            ],
            vsSkills: {
                headers: ["Skills", "Agents"],
                rows: [
                    ["Template-driven", "Goal-driven"],
                    ["Predictable output", "Adaptive approach"],
                    ["Single task focus", "Multi-step journey"],
                    ["You provide context", "Agent discovers context"],
                    ["Follows instructions", "Makes decisions"]
                ]
            },
            executionPhases: [
                { phase: "ANALYSIS", description: "Reads project structure, finds existing code, understands tech stack", duration: "~2 mins" },
                { phase: "PLANNING", description: "Creates implementation strategy, identifies files to create/modify", duration: "~1 min" },
                { phase: "IMPLEMENTATION", description: "Makes code changes across multiple files, runs commands", duration: "Variable" },
                { phase: "VALIDATION", description: "Runs tests, linting, type checking, auto-fixes issues", duration: "~1 min" },
                { phase: "SUMMARY", description: "Reports what was created, provides usage instructions", duration: "Instant" }
            ],
            examplePrompt: {
                bad: "Add stripe payments",
                good: `Real-World Example: Implement Subscription Billing (GitHub Copilot Agent Assignment)

## Context
We're a B2B SaaS with 3 pricing tiers (Starter, Pro, Enterprise).
Currently no billing - users trigger manually. Need automated subscription billing.

## Feature Requirements

### 1. Subscription Plans & Pricing
- Starter: $29/month (max 5 users)
- Pro: $99/month (max 25 users)
- Enterprise: $299/month (unlimited users)
- Annual plans: 20% discount
- Support: Credit card (Stripe), invoice payment (Enterprise only)

### 2. Database Schema Changes
Create new tables:
- subscriptions (id, user_id, plan_id, status, current_period_end, cancel_at_period_end)
- invoices (id, subscription_id, amount, status, stripe_invoice_id, invoice_pdf_url)
- payment_methods (id, user_id, stripe_payment_method_id, card_last4, card_brand)

Add to users table:
- stripe_customer_id (varchar)
- subscription_status (enum: active, canceled, past_due, trialing)

### 3. Backend Implementation (Node.js/Express)

#### API Endpoints Needed:
POST   /api/v1/subscriptions/create        - Start subscription
POST   /api/v1/subscriptions/upgrade       - Upgrade plan
POST   /api/v1/subscriptions/cancel        - Cancel subscription  
GET    /api/v1/subscriptions/current       - Get user's subscription
POST   /api/v1/payment-methods/attach      - Save payment method
GET    /api/v1/invoices                    - List invoices
POST   /api/v1/webhooks/stripe              - Handle Stripe webhooks

#### Business Logic:
- When subscription canceled → Continue until period end
- Downgrade → Immediate, prorated credit
- Upgrade → Immediate, prorated charge
- Failed payment → 3 retry attempts over 7 days → Then suspend account
- Send email notifications for: subscription created, upgraded, canceled, payment failed

### 4. Frontend (React)

#### Components to Create:
- \`PricingTable.tsx\` - Display pricing   tiers with "Subscribe" buttons
- \`SubscriptionManagement.tsx\` - Current plan, usage, upgrade/cancel
- \`PaymentMethodForm.tsx\` - Credit card inputs (using Stripe Elements)
- \`InvoiceHistory.tsx\` - List of past invoices with PDF download
- \`BillingAlert.tsx\` - Show banner when payment fails

#### User Flows:
1. New user selects plan → Payment form → Stripe processes → Subscription active
2. Existing user upgrades → Confirm dialog → Prorated charge → Plan updated
3. User cancels → Confirm dialog → Mark for cancel_at_period_end
4. Payment fails → Email sent → Banner shown → User updates card

### 5. Stripe Integration
- Use Stripe Checkout for new subscriptions
- Use Stripe Elements for payment method updates
- Webhook events to handle:
  - invoice.payment_succeeded
  - invoice.payment_failed
  - customer.subscription.updated
  - customer.subscription.deleted

### 6. Testing Requirements
- Unit tests for subscription service logic
- Integration tests for all API endpoints
- Webhook event handler tests (mock Stripe events)
- E2E test: Complete subscription flow (use Stripe test mode)

### 7. Security & Compliance
- Store only token/customer ID, never full card numbers
- Use Stripe's official libraries (no custom payment processing)
- Add rate limiting to webhook endpoint
- Verify webhook signatures (prevent replay attacks)
- Log all billing events for audit trail

## Technical Constraints
- Use existing Prisma setup (prisma/schema.prisma)
- Stripe SDK: stripe@12.0.0
- Environment variables: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET
- Use our existing email service (src/services/email.service.ts)
- Follow error handling patterns (src/utils/errors.ts)

## Out of Scope (Not for this PR)
- Usage-based billing (seats only for now)
- Multi-currency support (USD only)
- Tax calculation (assume US-only, add sales tax later)
- Customer portal (use Stripe's hosted portal)

## Expected Agent Workflow
1. **Analysis** (~2 min): Read existing code, understand architecture
2. **Planning** (~1 min): Create implementation plan, list files to modify
3. **Implementation** (~15 min):
   - Update Prisma schema → Run migration
   - Create subscription service layer
   - Build REST API endpoints
   - Add Stripe webhook handler
   - Create React components
   - Add API client calls
4. **Validation** (~2 min):
   - Run tests → Fix failing tests
   - Type check → Fix TypeScript errors
   - Lint → Auto-fix issues
5. **Summary**: List files changed, next steps (add .env variables, run migrations)

## Success Criteria
- User can subscribe, upgrade, downgrade, cancel
- Webhooks properly update database
- Failed payments trigger email + UI banner
- All tests pass
- TypeScript compiles with no errors
- Can process test subscription end-to-end`
            }
        },
        {
            id: "subagents",
            name: "Subagents",
            icon: "👥",
            subtitle: "Delegated Specialist Assistants",
            analogy: "If the main Agent is a general contractor, Subagents are the electrician, plumber, and painter they call in for specialized work. Each expert focuses on their domain.",
            definition: "Specialized AI assistants that the main agent delegates specific tasks to. Each subagent has focused context and expertise for their domain.",
            whenToUse: [
                "Security audits and vulnerability scanning",
                "Performance optimization reviews",
                "Test generation for specific modules",
                "Documentation for complex systems",
                "Database schema design",
                "API design reviews"
            ],
            fileLocations: {
                "Claude Code": ".claude/agents/<name>.md",
                "GitHub Copilot": "Via Skills (indirect)",
                "Cursor": "Via .cursor/rules/ (rule-based)"
            },
            builtInSubagents: [
                { name: "Explore", purpose: "Code search and analysis", tools: "Read-only file access, grep" },
                { name: "Plan", purpose: "Task planning and breakdown", tools: "Read files, create plans" },
                { name: "Think", purpose: "Extended reasoning", tools: "Longer context processing" }
            ],
            vsAgents: {
                headers: ["Agents", "Subagents"],
                rows: [
                    ["Main orchestrator", "Delegated specialist"],
                    ["Broad context", "Focused context"],
                    ["Makes high-level decisions", "Executes specific tasks"],
                    ["User-initiated", "Agent-initiated"],
                    ["Full tool access", "Scoped tool access"]
                ]
            },
            example: {
                title: "Security Review Subagent",
                filename: ".claude/agents/security-reviewer.md",
                code: `# Security Reviewer Subagent

You are a specialized security expert. Your ONLY job is to find security vulnerabilities.

## Focus Areas
1. Authentication/Authorization flaws
2. SQL/NoSQL injection
3. XSS vulnerabilities
4. Insecure dependencies
5. Secrets in code
6. OWASP Top 10

## Review Process
1. Scan for hardcoded secrets
2. Check input validation
3. Review auth middleware
4. Analyze database queries
5. Check dependency vulnerabilities

## Output Format
For each finding:
- **Severity**: Critical/High/Medium/Low
- **Location**: file:line
- **Issue**: Description
- **Fix**: Recommended solution
- **Reference**: CWE/OWASP link

## Tools to Use
- grep_search for pattern matching
- view_file to read source
- run_command for npm audit`
            },
            invocation: {
                claude: '@security-reviewer "Review the auth module for vulnerabilities"',
                copilot: 'Reference security skill in your prompt',
                cursor: 'Enable security rules in .cursor/rules/'
            }
        },
        {
            id: "opencode",
            name: "OpenCode",
            icon: "🖥️",
            subtitle: "Open-Source Terminal AI Assistant",
            analogy: "OpenCode is like having Claude Code but fully open-source, running in your terminal with support for multiple AI providers and local models.",
            definition: "A powerful, open-source AI coding assistant CLI tool with a TUI (Terminal User Interface) that integrates AI directly into your terminal workflow.",
            whenToUse: [
                "Prefer open-source over proprietary tools",
                "Need multi-provider support (OpenAI, Claude, Gemini, etc.)",
                "Want to use local/self-hosted models",
                "Terminal-centric workflow",
                "Privacy-focused development (runs locally)",
                "Need session management and history"
            ],
            features: [
                "Multi-AI provider support (OpenAI, Claude, Gemini, Groq, Azure, local)",
                "Interactive TUI with Vim-like editor",
                "Session management (save, load, search)",
                "Tool integration (execute commands, modify code)",
                "LSP integration for code intelligence",
                "Auto-compact for long conversations",
                "Custom commands with arguments",
                "File change tracking",
                "SQLite-based persistent storage"
            ],
            keyCommands: [
                { command: "opencode", description: "Launch interactive TUI" },
                { command: "opencode -p \"prompt\"", description: "Single prompt, non-interactive" },
                { command: "opencode auth login", description: "Configure API keys" },
                { command: "/init", description: "Analyze repo, create agents.md" },
                { command: "Ctrl+K", description: "Open custom commands" },
                { command: "Ctrl+M", description: "Switch AI model" }
            ],
            example: {
                title: "OpenCode Configuration",
                filename: "agents.md",
                code: `# Project: My App

## Technology Stack
- Go 1.21+
- PostgreSQL with pgx
- Chi router
- Docker for deployment

## Code Style
- Use gofmt and golint
- Prefer composition over inheritance
- Always handle errors explicitly
- Write table-driven tests

## Commands
- Build: \`go build ./...\`
- Test: \`go test -v ./...\`
- Lint: \`golangci-lint run\`

## Project Structure
- cmd/ - Entry points
- internal/ - Private packages  
- pkg/ - Public packages
- api/ - API definitions`
            },
            comparison: {
                headers: ["Feature", "OpenCode", "Claude Code"],
                rows: [
                    ["Open Source", "✅ Yes", "❌ No"],
                    ["Multi-Provider", "✅ 8+ providers", "❌ Claude only"],
                    ["Local Models", "✅ Supported", "❌ No"],
                    ["TUI Interface", "✅ Full TUI", "✅ CLI-based"],
                    ["Session Mgmt", "✅ SQLite", "✅ Built-in"],
                    ["LSP Support", "✅ Yes", "✅ Yes"],
                    ["Price", "Free + API costs", "Subscription"]
                ]
            }
        }
    ],
    scenarios: [
        {
            question: "I want the AI to always write TypeScript",
            winner: "Custom Instructions",
            reasoning: {
                "Custom Instructions": "✅ Add to instructions file: 'Always use TypeScript with strict mode'",
                "Custom Prompt": "❌ This is a behavior, not a request template",
                "Command": "❌ Commands are for actions, not preferences",
                "Skill": "❌ This is a rule, not a task",
                "Agent": "❌ This is a preference, not a goal",
                "Subagent": "❌ No delegation needed"
            }
        },
        {
            question: "I frequently ask for API endpoints with the same structure",
            winner: "Custom Prompt",
            reasoning: {
                "Custom Instructions": "❌ Too specific for 'always on'",
                "Custom Prompt": "✅ Create template with variables for resource, method, fields",
                "Command": "❌ Too complex for a quick action",
                "Skill": "❌ Overkill (no scripts or examples needed)",
                "Agent": "❌ Overkill (single-step request)",
                "Subagent": "❌ No specialization needed"
            }
        },
        {
            question: "I need to quickly switch between GPT-4 and Claude models",
            winner: "Command",
            reasoning: {
                "Custom Instructions": "❌ Model switching is an action, not a rule",
                "Custom Prompt": "❌ Not a reusable prompt template",
                "Command": "✅ Use /models or Ctrl+M in OpenCode",
                "Skill": "❌ Not a complex task",
                "Agent": "❌ Just a quick action",
                "Subagent": "❌ No delegation needed"
            }
        },
        {
            question: "I want AI to generate complete React component packages",
            winner: "Skill",
            reasoning: {
                "Custom Instructions": "❌ Too complex for simple rules",
                "Custom Prompt": "❌ Limited (no templates or examples)",
                "Command": "❌ Not a one-off action",
                "Skill": "✅ Perfect: SKILL.md + templates/ + examples/",
                "Agent": "❌ Works but overkill for templated task",
                "Subagent": "❌ Not a specialized subtask"
            }
        },
        {
            question: "I need to implement a complete authentication system",
            winner: "Agent",
            reasoning: {
                "Custom Instructions": "❌ Multi-step implementation needed",
                "Custom Prompt": "❌ Too complex for a single prompt",
                "Command": "❌ This is a project, not a quick action",
                "Skill": "❌ Too rigid for adaptive needs",
                "Agent": "✅ Give goal, let agent plan and execute",
                "Subagent": "❌ Needs orchestration, not just specialization"
            }
        },
        {
            question: "I need a security audit of my auth module",
            winner: "Subagent",
            reasoning: {
                "Custom Instructions": "❌ Security review isn't always-on",
                "Custom Prompt": "❌ Too specialized for a template",
                "Command": "❌ Not a quick action",
                "Skill": "❌ Less focused than a dedicated subagent",
                "Agent": "❌ Could work but less focused",
                "Subagent": "✅ Dedicated security-reviewer subagent with focused expertise"
            }
        },
        {
            question: "I want to use multiple AI providers with the same tool",
            winner: "OpenCode",
            reasoning: {
                "Custom Instructions": "❌ Not about configuration",
                "Custom Prompt": "❌ Not about templates",
                "Command": "⚠️ OpenCode's /models command helps switch",
                "Skill": "❌ Not the right concept",
                "Agent": "❌ Not provider-specific",
                "OpenCode": "✅ Supports 8+ AI providers including local models"
            }
        }
    ],
    decisionFlowchart: [
        { question: "Is it a RULE that should always apply?", yes: "Use CUSTOM INSTRUCTIONS", no: "Continue" },
        { question: "Is it a REQUEST you repeat often with same structure?", yes: "Use CUSTOM PROMPT", no: "Continue" },
        { question: "Is it a quick ACTION like switching modes or saving?", yes: "Use COMMAND", no: "Continue" },
        { question: "Is it a TASK that needs templates, scripts, or examples?", yes: "Use SKILL", no: "Continue" },
        { question: "Is it a GOAL requiring multiple files and decisions?", yes: "Use AGENT", no: "Continue" },
        { question: "Is it a SPECIALIZED subtask (security, performance, etc.)?", yes: "Use SUBAGENT", no: "Just ask in chat" }
    ],
    summary: [
        { concept: "Custom Instructions", analogy: "House rules", size: "50-500 lines", activation: "Always on", bestFor: "Standards, preferences" },
        { concept: "Custom Prompts", analogy: "Macros/shortcuts", size: "20-100 lines", activation: "On invocation", bestFor: "Repetitive requests" },
        { concept: "Commands", analogy: "Keyboard shortcuts", size: "One-liners", activation: "Immediate", bestFor: "Quick actions" },
        { concept: "Skills", analogy: "Recipe books", size: "100-1000+ lines", activation: "Context-triggered", bestFor: "Domain expertise" },
        { concept: "Agents", analogy: "General contractor", size: "N/A (it's a mode)", activation: "User-initiated", bestFor: "Complex goals" },
        { concept: "Subagents", analogy: "Specialist (electrician)", size: "50-200 lines", activation: "Agent-delegated", bestFor: "Expert subtasks" },
        { concept: "OpenCode", analogy: "Swiss army knife", size: "Config file", activation: "CLI/TUI launch", bestFor: "Multi-provider, terminal" }
    ]
};

